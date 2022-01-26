import React, { memo } from "react"
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
  currentTime: number
  audio: HTMLAudioElement
}

const Thumb = (props: any) => <StyledThumb {...props}></StyledThumb>

const Track = (props: any, state: ProgressbarTrackProps) => (
  <StyledTrack {...props} index={state.index} />
)

const Progressbar = ({ currentTime, audio }: ProgressbarProps) => {
  return (
    <Container>
      <StyledSlider
        value={currentTime}
        max={audio.duration || 100}
        renderTrack={Track}
        renderThumb={Thumb}
        onChange={(value) => {
          audio.currentTime = Number(value)
        }}
      />
    </Container>
  )
}

export default memo(Progressbar)
