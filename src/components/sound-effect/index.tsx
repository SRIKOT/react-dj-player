import React, { createRef, useState, useEffect } from "react"
import { SoundEffectProps, WebAudioApiState } from "../../interfaces"
import SoundEffect from "./sound-effect"
import {
  SoundEffectContainer,
  SoundEffectSubContainer,
} from "../../styles/components/sound-effect"
import LeftNav from "./prev-nav"
import RightNav from "./next-nav"

interface SoundEffectListProps {
  insertDefaultUI: boolean
  soundEffects: Array<SoundEffectProps>
  webAudioApi: WebAudioApiState
  setSoundEffectReady: (ready: boolean) => void
}

let timer: NodeJS.Timer
const SoundEffectList = ({
  insertDefaultUI,
  soundEffects,
  webAudioApi,
  setSoundEffectReady,
}: SoundEffectListProps) => {
  const soundEffectRef = createRef<HTMLDivElement>()
  const prevRef = createRef<HTMLButtonElement>()
  const nextRef = createRef<HTMLButtonElement>()
  const [isOverflow, setIsOverflow] = useState<boolean>(false)
  const navDistance = 20

  const onMouseDown = (value: number) => {
    timer = setInterval(() => {
      if (soundEffectRef.current) {
        soundEffectRef.current.scrollLeft += value
        onUpdateNav()
      }
    }, 50)
  }

  const onMouseUp = () => {
    clearInterval(timer)
  }

  const onUpdateNav = () => {
    if (soundEffectRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = soundEffectRef.current

      if (scrollLeft >= navDistance) {
        showPrevNav()
      } else {
        hidePrevNav()
      }

      const scrollMax = scrollWidth - clientWidth
      if (scrollLeft >= scrollMax - navDistance) {
        hideNextNav()
      } else {
        showNextNav()
      }
    }
  }

  const showPrevNav = () => {
    if (prevRef.current) prevRef.current.style.display = "initial"
  }

  const hidePrevNav = () => {
    if (prevRef.current) prevRef.current.style.display = "none"
    clearInterval(timer)
  }

  const showNextNav = () => {
    if (nextRef.current) nextRef.current.style.display = "initial"
  }

  const hideNextNav = () => {
    if (nextRef.current) nextRef.current.style.display = "none"
    clearInterval(timer)
  }

  useEffect(() => {
    if (soundEffectRef.current) {
      const { offsetWidth, scrollWidth } = soundEffectRef.current
      setIsOverflow(offsetWidth < scrollWidth)
    }
  }, [])

  useEffect(() => {
    if (isOverflow) {
      hidePrevNav()
      showNextNav()
    }
  }, [isOverflow])

  return (
    <SoundEffectContainer>
      {isOverflow && (
        <LeftNav
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          prevRef={prevRef}
        />
      )}
      <SoundEffectSubContainer
        ref={soundEffectRef}
        onScroll={() => onUpdateNav()}
      >
        {soundEffects.map((s, i) => (
          <SoundEffect
            {...s}
            key={i}
            insertDefaultUI={insertDefaultUI}
            webAudioApi={webAudioApi}
            setSoundEffectReady={setSoundEffectReady}
          />
        ))}
      </SoundEffectSubContainer>
      {isOverflow && (
        <RightNav
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          nextRef={nextRef}
        />
      )}
    </SoundEffectContainer>
  )
}

export default SoundEffectList
