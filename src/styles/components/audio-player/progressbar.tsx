import styled from "styled-components"
import ReactSlider from "react-slider"
import { color } from "../../base"

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 3px;
  background-color: ${color.gray200};
  cursor: pointer;
  border-radius: 0.25rem;
`

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  ${(props: any) => ` ${
    props.index === 0
      ? `
      background-color: ${color.gray400};
      border-top-left-radius: 0.25rem;
    `
      : props.index === 1
      ? `
        background-color: ${color.gray200};
        border-top-right-radius: 0.25rem;
        `
      : `
        background-color: ${color.gray400};
        `
  }
  `}
`

const StyledThumb = styled.div`
  height: 0.75rem;
  width: 0.75rem;
  text-align: center;
  background-color: ${color.gray400};
  border-radius: 50%;
  margin-top: -4.6px;
  margin-left: -0.5px;
  outline: none;
`

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
`

export { Container, StyledSlider, StyledTrack, StyledThumb }
