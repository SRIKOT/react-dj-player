import styled from "styled-components"

const Container = styled.div`
  display: flex;
  input[type="range"] {
    // height: 25px;
    -webkit-appearance: none;
    // margin: 10px 0;
    margin-bottom: 5px;
    width: 100%;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #b2b2b2;
    background: #b2b2b2;
    border-radius: 1px;
    border: 0px solid #b2b2b2;
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #868686;
    border: 1px solid #868686;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #868686;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #b2b2b2;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #b2b2b2;
    background: #b2b2b2;
    border-radius: 1px;
    border: 0px solid #b2b2b2;
  }
  input[type="range"]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #868686;
    border: 1px solid #868686;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #868686;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: #b2b2b2;
    border: 0px solid #b2b2b2;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #b2b2b2;
  }
  input[type="range"]::-ms-fill-upper {
    background: #b2b2b2;
    border: 0px solid #b2b2b2;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #b2b2b2;
  }
  input[type="range"]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #868686;
    border: 1px solid #868686;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #868686;
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #b2b2b2;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #b2b2b2;
  }
`

const InputVolume = styled.input`
  cursor: pointer;
`

export { Container, InputVolume }
