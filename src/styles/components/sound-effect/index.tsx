import styled from "styled-components"
import { ButtonCircle } from "../../globals"

const SoundEffectContainer = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
  position: relative;
`

const SoundEffectSubContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
  gap: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`

const PrevNavButton = styled(ButtonCircle)`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  display: none;
`

const NextNavButton = styled(ButtonCircle)`
  position: absolute;
  z-index: 1;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  display: none;
`

export {
  SoundEffectContainer,
  SoundEffectSubContainer,
  PrevNavButton,
  NextNavButton,
}
