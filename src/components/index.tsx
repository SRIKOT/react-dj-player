import React, { useState, useEffect } from "react"
import {
  UserMediaProps,
  AudioPlayerProps,
  SoundEffectProps,
  WebAudioApiState,
} from "../interfaces"
import AudioPlayer from "./audio-player"
import SoundEffect from "./sound-effect"
import UserMedia from "./user-media"
import {
  Container,
  SoundEffectContainer,
  AudioPlayerContainer,
  UserMediaContainer,
} from "../styles/components"

interface ReactDjPlayerProps {
  insertDefaultUI?: boolean
  userMedia?: UserMediaProps
  audioPlayer?: AudioPlayerProps
  soundEffects?: Array<SoundEffectProps>
  onStream?: (stream: MediaStream) => void
}

const ReactDjPlayer = ({
  insertDefaultUI = true,
  userMedia,
  audioPlayer,
  soundEffects,
  onStream,
}: ReactDjPlayerProps) => {
  const [userMediaReady, setUserMediaReady] = useState<boolean>(false)
  const [audioPlayerReady, setAudioPlayerReady] = useState<boolean>(false)
  const [soundEffectReady, setSoundEffectReady] = useState<boolean>(false)
  const [webAudioApi, setWebAudioApi] = useState<WebAudioApiState>()

  useEffect(() => {
    const AudioContext =
      window.AudioContext || (window as any).webkitAudioContext
    const context = new AudioContext()

    if (!userMedia) setUserMediaReady(true)
    if (!audioPlayer) setAudioPlayerReady(true)
    if (!soundEffects) setSoundEffectReady(true)

    setWebAudioApi({
      audioContext: context,
      destination: context.destination,
      mediaStreamDestinationNode: context.createMediaStreamDestination(),
    })
  }, [])

  useEffect(() => {
    if (webAudioApi && userMediaReady && audioPlayerReady && soundEffectReady) {
      if (onStream) onStream(webAudioApi.mediaStreamDestinationNode.stream)
    }
  }, [webAudioApi, userMediaReady, audioPlayerReady, soundEffectReady])

  return (
    <Container>
      {webAudioApi ? (
        <>
          {userMedia && (
            <UserMediaContainer>
              <UserMedia
                {...userMedia}
                insertDefaultUI={insertDefaultUI}
                webAudioApi={webAudioApi}
                setUserMediaReady={setUserMediaReady}
              />
            </UserMediaContainer>
          )}
          {soundEffects && soundEffects.length ? (
            <SoundEffectContainer>
              {soundEffects.map((s, i) => (
                <SoundEffect
                  {...s}
                  key={i}
                  insertDefaultUI={insertDefaultUI}
                  webAudioApi={webAudioApi}
                  setSoundEffectReady={setSoundEffectReady}
                />
              ))}
            </SoundEffectContainer>
          ) : null}
          {audioPlayer && (
            <AudioPlayerContainer>
              <AudioPlayer
                {...audioPlayer}
                insertDefaultUI={insertDefaultUI}
                webAudioApi={webAudioApi}
                setAudioPlayerReady={setAudioPlayerReady}
              />
            </AudioPlayerContainer>
          )}
        </>
      ) : null}
    </Container>
  )
}

export default ReactDjPlayer
