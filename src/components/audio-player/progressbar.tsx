import React, { useEffect, useState } from "react"
import {
  Container,
  StyledSlider,
  StyledTrack,
  StyledThumb,
} from "../../styles/components/audio-player/progressbar"

interface ProgressbarTrackProps {
  index: number
  value: number | readonly number[]
}
interface ProgressbarProps {
  audio: HTMLAudioElement
}

const Progressbar = ({ audio }: ProgressbarProps) => {
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [currentLoaded, setCurrentLoaded] = useState<number>(0)

  const Track = (props: any, state: ProgressbarTrackProps) => {
    const styleDefault = {
      left: 0,
      right: 0,
    }
    if (state.index === 0) {
      Object.assign(props.style, {
        ...styleDefault,
        width: `${(currentTime / audio.duration) * 100}%`,
        zIndex: 1,
      })
    } else {
      Object.assign(props.style, {
        ...styleDefault,
        width: `${(currentLoaded / audio.duration) * 100}%`,
      })
    }

    return <StyledTrack {...props} index={state.index} />
  }

  const Thumb = (props: any, state: ProgressbarTrackProps) => {
    return <StyledThumb {...props} index={state.index}></StyledThumb>
  }

  useEffect(() => {
    audio.ontimeupdate = () => {
      const timeRanges = []
      for (let i = 0; i < audio.buffered.length; i++) {
        timeRanges.push({
          start: audio.buffered.start(i),
          end: audio.buffered.end(i),
        })
      }

      const timeRang = timeRanges.find(
        (d) => audio.currentTime >= d.start && audio.currentTime <= d.end
      )

      setCurrentTime(Number(audio.currentTime.toFixed(0)))
      if (timeRang) setCurrentLoaded(timeRang.end)
    }
  }, [])

  return (
    <Container>
      <StyledSlider
        value={currentTime}
        max={audio.duration}
        renderTrack={Track}
        renderThumb={Thumb}
        onChange={(value) => (audio.currentTime = Number(value))}
      />
    </Container>
  )
}

export default Progressbar
