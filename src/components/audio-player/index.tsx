import React, { useEffect, useState, useRef } from "react"
import VolumeControl from "./volume-control"
import MainControl from "./main-control"
import Additinonal from "./additional"
import Progressbar from "./progressbar"
import { AudioPlayerProps, WebAudioApiState } from "../../interfaces"

interface Props extends AudioPlayerProps {
  insertDefaultUI: boolean
  webAudioApi: WebAudioApiState
  setAudioPlayerReady: (ready: boolean) => void
}

const AudioPlayer = ({
  src,
  crossOrigin,
  volume = 1,
  preload = "metadata",
  loop = false,
  muted = false,
  playing = false,
  onWating,
  onCanplay,
  onCanPlayThrough,
  onPlay,
  onPause,
  onEnded,
  onError,
  onClickNext,
  onClickPrevious,
  onVolumeChange,
  onMuted,
  onLoop,
  insertDefaultUI,
  webAudioApi,
  setAudioPlayerReady,
}: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [gainDj, setGainDj] = useState<GainNode>()
  const [gainListener, setGainListener] = useState<GainNode>()
  const [playing2, setPlaying2] = useState<boolean>(false)
  const [volume2, setVolume2] = useState<number>(1)
  const [muted2, setMuted2] = useState<boolean>(false)
  const [loop2, setLoop2] = useState<boolean>(false)
  const [playerLoaded, setPlayerLoaded] = useState<boolean>(false)
  const { audioContext, destination, mediaStreamDestinationNode } = webAudioApi

  const handleOnPlay = async (
    e: React.SyntheticEvent<HTMLAudioElement, Event>
  ) => {
    onPlay?.(e)
    setPlaying2(true)
    if (audioContext.state === "suspended") {
      await audioContext.resume()
    }
  }

  const handleOnPause = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    onPause?.(e)
    setPlaying2(false)
  }

  const handleOnEnded = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    onEnded?.(e)
    setPlaying2(false)
    if (audioRef.current) audioRef.current.currentTime = 0
  }

  const handleOnClickNext = () => {
    onClickNext?.()
    if (audioRef.current) audioRef.current.currentTime = 0
  }

  const handleOnClickPrevious = () => {
    onClickPrevious?.()
    if (audioRef.current) audioRef.current.currentTime = 0
  }

  const handleOnMuted = (muted: boolean) => {
    onMuted?.(muted)
  }

  const handleOnLoop = (loop: boolean) => {
    onLoop?.(loop)
  }

  const handleOnLoadedMetadata = () => {
    setPlayerLoaded(true)
  }

  useEffect(() => {
    if (!audioRef.current) return
    const g1 = audioContext.createGain()
    g1.gain.value = volume
    g1.connect(destination)
    setGainDj(g1)

    const g2 = audioContext.createGain()
    g2.gain.value = volume
    g2.connect(mediaStreamDestinationNode)
    setGainListener(g2)

    const source = audioContext.createMediaElementSource(audioRef.current)
    source.connect(g1)
    source.connect(g2)

    setAudioPlayerReady(true)
  }, [])

  useEffect(() => {
    const playPause = async () => {
      if (!audioRef.current) return
      if (playing2) {
        await audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }

    playPause()
  }, [playing2])

  useEffect(() => {
    if (gainDj && gainListener) {
      gainDj.gain.value = volume2
      gainListener.gain.value = volume2
    }
  }, [gainDj, gainListener, volume2])

  useEffect(() => {
    handleOnMuted(muted2)
  }, [muted2])

  useEffect(() => {
    handleOnLoop(loop2)
  }, [loop2])

  useEffect(() => {
    setPlaying2(playing)
  }, [playing])

  useEffect(() => {
    volume = Number(volume) || 0
    volume = volume >= 1 ? 1 : volume <= 0 ? 0 : volume
    setVolume2(volume)
  }, [volume])

  useEffect(() => {
    setMuted2(muted)
  }, [muted])

  useEffect(() => {
    setLoop2(loop)
  }, [loop])

  return (
    <>
      <audio
        ref={audioRef}
        preload={preload}
        crossOrigin={crossOrigin}
        src={src}
        muted={muted2}
        loop={loop2}
        onWaiting={(e) => onWating?.(e)}
        onCanPlay={(e) => onCanplay?.(e)}
        onCanPlayThrough={(e) => onCanPlayThrough?.(e)}
        onPlay={(e) => handleOnPlay(e)}
        onPause={(e) => handleOnPause(e)}
        onEnded={(e) => handleOnEnded(e)}
        onLoadedMetadata={() => handleOnLoadedMetadata()}
        onError={(e) => onError?.(e)}
      />
      {insertDefaultUI && playerLoaded && audioRef.current ? (
        <>
          <Progressbar audio={audioRef.current} />
          <Additinonal loop={loop2} setLoop={setLoop2} />
          <MainControl
            playing={playing2}
            setPlaying={setPlaying2}
            onClickNext={handleOnClickNext}
            onClickPrevious={handleOnClickPrevious}
          />
          <VolumeControl
            muted={muted2}
            volume={volume2}
            setVolume={setVolume2}
            setMuted={setMuted2}
            onVolumeChange={onVolumeChange}
          />
        </>
      ) : null}
    </>
  )
}

export default AudioPlayer
