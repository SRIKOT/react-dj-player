import styled from "styled-components"
import { ButtonCircle } from "../../globals"

const NextNavButton = styled(ButtonCircle)`
  position: absolute;
  z-index: 1;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  display: none;
`

export { NextNavButton }
