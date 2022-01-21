import React, { useState, useEffect } from "react"
import {
  UserMediaProps,
  AudioPlayerProps,
  SoundEffectProps,
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
  const [audioContext, setAudioContext] = useState<AudioContext>()
  const [destination, setDestination] = useState<AudioDestinationNode>()
  const [mediaStreamDestinationNode, setMediaStreamDestinationNode] =
    useState<MediaStreamAudioDestinationNode>()
  const [userMediaReady, setUserMediaReady] = useState<boolean>(false)
  const [musicReady, setMusicReady] = useState<boolean>(false)
  const [soundEffectReady, setSoundEffectReady] = useState<boolean>(false)

  useEffect(() => {
    const AudioContext =
      window.AudioContext || (window as any).webkitAudioContext
    const context = new AudioContext()

    if (!userMedia) setUserMediaReady(true)
    if (!audioPlayer) setMusicReady(true)
    if (!soundEffects) setSoundEffectReady(true)

    setAudioContext(context)
    setDestination(context.destination)
    setMediaStreamDestinationNode(context.createMediaStreamDestination())
  }, [])

  useEffect(() => {
    if (
      mediaStreamDestinationNode &&
      userMediaReady &&
      musicReady &&
      soundEffectReady
    ) {
      if (onStream) onStream(mediaStreamDestinationNode.stream)
    }
  }, [mediaStreamDestinationNode, userMediaReady, musicReady, soundEffectReady])

  return (
    <Container>
      {audioContext && destination && mediaStreamDestinationNode ? (
        <>
          <UserMediaContainer>
            {userMedia && (
              <UserMedia
                {...userMedia}
                insertDefaultUI={insertDefaultUI}
                audioContext={audioContext}
                mediaStreamDestinationNode={mediaStreamDestinationNode}
                setUserMediaReady={setUserMediaReady}
              />
            )}
          </UserMediaContainer>
          {soundEffects && soundEffects.length ? (
            <SoundEffectContainer>
              {soundEffects.map((s, i) => (
                <SoundEffect
                  {...s}
                  key={i}
                  insertDefaultUI={insertDefaultUI}
                  audioContext={audioContext}
                  destination={destination}
                  mediaStreamDestinationNode={mediaStreamDestinationNode}
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
                audioContext={audioContext}
                destination={destination}
                mediaStreamDestinationNode={mediaStreamDestinationNode}
                setMusicReady={setMusicReady}
              />
            </AudioPlayerContainer>
          )}
        </>
      ) : null}
    </Container>
  )
}

export default ReactDjPlayer
