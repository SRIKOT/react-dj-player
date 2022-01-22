import React, { useEffect, useState } from "react"
import { UserMediaProps, WebAudioApiState } from "../interfaces"
import { ButtonCircle } from "../styles/globals"

interface Props extends UserMediaProps {
  insertDefaultUI: boolean
  webAudioApi: WebAudioApiState
  setUserMediaReady: (ready: boolean) => void
}

const UserMedia = ({
  constraints,
  muted = false,
  onError,
  insertDefaultUI,
  webAudioApi,
  setUserMediaReady,
}: Props) => {
  const [muted2, setMuted2] = useState<boolean>(false)
  const [gain1, setGain1] = useState<GainNode>()
  const { audioContext, mediaStreamDestinationNode } = webAudioApi

  useEffect(() => {
    const initUserMediaStream = async () => {
      if (navigator.mediaDevices === undefined) {
        return onError?.(
          new DOMException("Your device is not support', 'NotSupportedError")
        )
      }

      const gainNode1 = audioContext.createGain()
      gainNode1.gain.value = 1
      gainNode1.connect(mediaStreamDestinationNode)
      setGain1(gainNode1)

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          const audioInput = audioContext.createMediaStreamSource(stream)
          audioInput.connect(gainNode1)
          setUserMediaReady(true)
        })
        .catch((err: DOMException) => {
          if (onError) onError(err)
        })
    }

    initUserMediaStream()
  }, [])

  useEffect(() => {
    if (gain1) gain1.gain.value = muted2 ? 0 : 1
  }, [gain1, muted2])

  useEffect(() => {
    setMuted2(muted)
  }, [muted])

  return insertDefaultUI ? (
    <ButtonCircle
      color={muted2 ? "error" : ""}
      onClick={() => setMuted2(!muted2)}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="18"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        {muted2 ? (
          <>
            <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3z"></path>
            <path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z"></path>
          </>
        ) : (
          <>
            <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"></path>
            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"></path>
          </>
        )}
      </svg>
    </ButtonCircle>
  ) : null
}

export default UserMedia
