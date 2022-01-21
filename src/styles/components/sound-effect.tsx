import styled from "styled-components"
import { color, shadow } from "../base"

const Button = styled.button`
  padding: 0.5em;
  border-radius: 0.25rem;
  box-shadow: ${shadow.md};
  cursor: pointer;
  border: 0;
  line-height: 1;
  display: inline-block;
  background-color: ${color.white};
`

export { Button }
