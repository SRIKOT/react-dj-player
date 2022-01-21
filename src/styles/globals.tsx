import styled, { css } from "styled-components"
import { ButtonProps } from "../interfaces"
import { color, shadow } from "./base"

const ButtonIcon = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  cursor: pointer;
  display: inline-block;
  background-color: ${color.white};
`

const ButtonCircle = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  cursor: pointer;
  display: inline-block;
  background-color: ${color.white};
  width: 42px;
  height: 42px;
  border-radius: 9999px;
  box-shadow: ${shadow.md};
  ${(props) =>
    props.color === "error" &&
    css`
      color: ${color.white};
      background-color: ${color.danger};
    `}
`

export { ButtonIcon, ButtonCircle }
