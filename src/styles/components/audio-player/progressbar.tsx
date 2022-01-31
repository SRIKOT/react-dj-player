import styled from "styled-components"
import ReactSlider from "react-slider"
import { color } from "../../base"

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 3px;
  background-color: ${color.gray100};
  cursor: pointer;
`

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  ${(props: any) => `
    ${
      props.index === 0
        ? `
          background-color: ${color.gray400};
        `
        : `
          background-color: ${color.gray200};
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
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
