import styled from "styled-components"
import { device, color } from "../base"

const Container = styled.div`
  background-color: ${color.white};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  align-items: center;
  padding: 0.75rem;
  gap: 0.75rem;
  @media only screen and ${device.tablet} {
    flex-direction: row;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    gap: 1rem;
  }
`

const SoundEffectContainer = styled.div`
  display: flex;
  width: 100%;
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

const AudioPlayerContainer = styled.div`
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  gap: 1rem;
  position: relative;
  padding-top: 0.75rem;
  @media only screen and ${device.tablet} {
    width: auto;
    justify-content: inherit;
    min-width: 350px;
    position: static;
    padding-left: 0;
    padding-right: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`

const UserMediaContainer = styled.div`
  display: flex;
  padding-left: 0;
  padding-right: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

export {
  Container,
  SoundEffectContainer,
  AudioPlayerContainer,
  UserMediaContainer,
}
