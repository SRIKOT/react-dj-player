import React from "react"
import { PrevNavButton } from "../../styles/components/sound-effect"
import { Icon } from "@iconify/react"

interface SoundEffectPrevProps {
  prevRef: React.LegacyRef<HTMLButtonElement>
  onMouseDown: (value: number) => void
  onMouseUp: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const PrevNav = ({ onMouseDown, onMouseUp, prevRef }: SoundEffectPrevProps) => {
  return (
    <PrevNavButton
      ref={prevRef}
      onMouseDown={() => onMouseDown(-20)}
      onMouseUp={onMouseUp}
    >
      <Icon icon="iconoir:nav-arrow-left" width={28} height={28} />
    </PrevNavButton>
  )
}

export default PrevNav
