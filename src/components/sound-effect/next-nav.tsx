import React from "react"
import { NextNavButton } from "../../styles/components/sound-effect"
import { Icon } from "@iconify/react"

interface SoundEffectNextProps {
  nextRef: React.LegacyRef<HTMLButtonElement>
  onMouseDown: (value: number) => void
  onMouseUp: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const NextNav = ({ onMouseDown, onMouseUp, nextRef }: SoundEffectNextProps) => {
  return (
    <NextNavButton
      ref={nextRef}
      onMouseDown={() => onMouseDown(20)}
      onMouseUp={onMouseUp}
    >
      <Icon icon="iconoir:nav-arrow-right" width={28} height={28} />
    </NextNavButton>
  )
}

export default NextNav
