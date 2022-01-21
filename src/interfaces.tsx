import { MouseEventHandler } from "react"

export interface UserMediaProps {
  constraints: MediaStreamConstraints
  muted?: boolean
  onError?: (error: DOMException) => void
}

export interface AudioPlayerProps {
  src?: string
  crossOrigin?: string
  volume?: number
  preload?: "" | "none" | "metadata" | "auto"
  loop?: boolean
  muted?: boolean
  playing?: boolean
  onWating?: (e: React.SyntheticEvent<HTMLAudioElement, Event>) => void
  onCanplay?: (e: React.SyntheticEvent<HTMLAudioElement, Event>) => void
  onCanPlayThrough?: (e: React.SyntheticEvent<HTMLAudioElement, Event>) => void
  onPlay?: (e: React.SyntheticEvent<HTMLAudioElement, Event>) => void
  onPause?: (e: React.SyntheticEvent<HTMLAudioElement, Event>) => void
  onEnded?: (e: React.SyntheticEvent<HTMLAudioElement, Event>) => void
  onError?: (e: React.SyntheticEvent<HTMLAudioElement, Event>) => void
  onClickNext?: () => void
  onClickPrevious?: () => void
  onVolumeChange?: (volume: number) => void
  onMuted?: (muted: boolean) => void
  onLoop?: (muted: boolean) => void
}

export interface SoundEffectProps {
  name?: React.ReactNode
  src: string
  volume?: number
  onRef?: (player: SoundEffectPlayer) => void
}

export interface SoundEffectPlayer {
  play: () => void
}

export interface ButtonProps {
  color?: "error" | ""
  onClick?: MouseEventHandler<HTMLButtonElement>
}
