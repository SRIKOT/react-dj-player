import styled from "styled-components"
import { ButtonCircle } from "../../globals"

const PrevNavButton = styled(ButtonCircle)`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  display: none;
`
export { PrevNavButton }
