import React, { memo } from "react"
import { ButtonIcon } from "../../styles/globals"
import { Container } from "../../styles/components/audio-player/additional"

interface AdditinonalProps {
  loop: boolean
  setLoop: React.Dispatch<React.SetStateAction<boolean>>
}

const Additinonal = ({ loop, setLoop }: AdditinonalProps) => {
  return (
    <Container>
      <ButtonIcon onClick={() => setLoop(!loop)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          width="23"
          height="23"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          {loop ? (
            <path
              d="M17 17H7v-3l-4 4l4 4v-3h12v-6h-2M7 7h10v3l4-4l-4-4v3H5v6h2V7z"
              fill="#868686"
            ></path>
          ) : (
            <path
              d="M2 5.27L3.28 4L20 20.72L18.73 22l-3-3H7v3l-4-4l4-4v3h6.73L7 10.27V11H5V8.27l-3-3M17 13h2v4.18l-2-2V13m0-8V2l4 4l-4 4V7H8.82l-2-2H17z"
              fill="#868686"
            ></path>
          )}
        </svg>
      </ButtonIcon>
    </Container>
  )
}

export default memo(Additinonal)
