import React, { useEffect, useState, memo } from "react"
import { fetchBuffer } from "../../utils"
import { SoundEffectProps, WebAudioApiState } from "../../interfaces"
import { Button } from "../../styles/components/sound-effect/sound-effect"

interface Props extends SoundEffectProps {
  insertDefaultUI: boolean
  webAudioApi: WebAudioApiState
  setSoundEffectReady: (ready: boolean) => void
}

const SoundEffect = ({
  name,
  src,
  volume = 1,
  className,
  onRef,
  insertDefaultUI,
  webAudioApi,
  setSoundEffectReady,
}: Props) => {
  const [gainDj, setGainDj] = useState<GainNode>()
  const [gainListener, setGainListener] = useState<GainNode>()
  const [buffer, setBuffer] = useState<AudioBuffer>()
  const { audioContext, destination, mediaStreamDestinationNode } = webAudioApi

  const playSoundEffect = () => {
    if (!gainDj || !gainListener || !buffer) return
    const source = audioContext.createBufferSource()
    source.buffer = buffer
    source.connect(gainDj)
    source.connect(gainListener)
    source.start()
  }

  useEffect(() => {
    const initSoundEffect = async () => {
      try {
        const gainNode1 = audioContext.createGain()
        gainNode1.gain.value = volume
        gainNode1.connect(destination)
        setGainDj(gainNode1)

        const gainNode2 = audioContext.createGain()
        gainNode2.gain.value = volume
        gainNode2.connect(mediaStreamDestinationNode)
        setGainListener(gainNode2)

        const arrayBuffer = await fetchBuffer(src)
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
        setBuffer(audioBuffer)
        setSoundEffectReady(true)
      } catch (error) {
        console.error(error)
      }
    }

    initSoundEffect()
  }, [])

  useEffect(() => {
    if (gainDj && gainListener) {
      gainDj.gain.value = volume
      gainListener.gain.value = volume
    }
  }, [volume, gainDj, gainListener])

  useEffect(() => {
    if (gainDj && gainListener && buffer) {
      onRef?.({
        play: playSoundEffect,
      })
    }
  }, [gainDj, gainListener, buffer])

  return insertDefaultUI ? (
    className ? (
      <button className={className} onClick={() => playSoundEffect()}>
        {name}
      </button>
    ) : (
      <Button onClick={() => playSoundEffect()}>{name}</Button>
    )
  ) : null
}

export default memo(SoundEffect)
