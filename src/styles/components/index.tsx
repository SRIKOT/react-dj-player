import styled from "styled-components"
import { device } from "../base"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  align-items: center;
  padding: 0.75rem;
  gap: 0.75rem;
  @media only screen and ${device.tablet} {
    flex-direction: row;
    padding: 1rem;
    gap: 1rem;
  }
`

const SoundEffectContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  gap: 0.5rem;
  padding: 0.5rem;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`

const AudioPlayerContainer = styled.div`
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  gap: 0.5rem;
  @media only screen and ${device.tablet} {
    width: auto;
    justify-content: flex-end;
    min-width: 350px;
  }
`

const UserMediaContainer = styled.div`
  display: flex;
`

export {
  Container,
  SoundEffectContainer,
  AudioPlayerContainer,
  UserMediaContainer,
}
