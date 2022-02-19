import styled from "styled-components"
import { color, shadow } from "../../base"

const Button = styled.button`
  border-radius: 0.25rem;
  box-shadow: ${shadow.md};
  cursor: pointer;
  border: 0;
  line-height: 1;
  display: inline-block;
  background-color: ${color.white};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  height: 3rem;
  width: auto;
`

export { Button }
