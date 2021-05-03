import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle` 
  .noscroll {
    position: fixed;
    width: 100%;
    overflow-y: scroll;
    overflow: hidden;
  }

  * {
    font: normal 14px Roboto, sans-serif;
    text-align: justify;
  }

  body {
    cursor: cell;
    color: white;
    -webkit-font-smoothing: antialiased;
    --Excel: #10A508;
    --Iniciante: #ED7C3ff1;
    --Trainee: #00CEA5;
    --Profissional: #16486B;
    --Especialista: #525252;
    --Erro: #c53030;
    --BG: rgba(220, 220, 220, 0.8);
    --BGBlack: rgba(0, 0, 0, 0.8);
    background: var(--BG);
  }

  button {
    cursor: pointer;
  }

  hr {
    width: 100%;
    height: 2px;
    border-top: 1px solid white;
  }

  h1,h2,h3,h4 {
    font-family: 'Ubuntu', sans-serif;
    font-weight: bold;
    letter-spacing: 1px;
  }

  a:hover {
    text-decoration: none;
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .content-box {
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin: 5px 20px 10px;
    padding: 0 20px 10px;
    box-shadow: 1px 1px 6px #696969;
    /* width: 90%; */
    /* max-width: 600px; */
    min-width: 480px;
  }

  .content-box input {
    color: white;
    border: none;
    background: rgba(105, 105, 105, 0.3);
  }

  .content-box input:focus {
    color: white;
    background: transparent;
    box-shadow: none;
    border-color: #fff;
  }

  .content-box span {
    color: white;
    border: none;
    background: transparent;
    letter-spacing: 2px;
    line-height: 20px;
    font-family: monospace;
    font-size: 15px;
  }

  .content-box button {
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  .content-box button:hover {
    background: transparent;
    border: 1px solid var(--Excel);
    color: var(--Excel);
  }

  .content-box button:hover svg {
    color: var(--Excel);
  }

  .form-control,
  .input-group-text {
    border-radius: 0;
  }
  .input-group-text span {
    color: #fff;
  }
  .input-group-append:hover {
    cursor: pointer;
  }

  .input-group-append:hover svg {
    color: var(--Excel);
  }

  .input-group {
    border: 1px dashed;
    border-color: transparent transparent white transparent;
  }

  .square {
    position: absolute;
    bottom: -2px;
    right: 13px;
    background: var(--Excel);
    border: 0.009rem solid;
    border-color: #7FFF00 #7FFF00 #7FFF00 #7FFF00;
    width: 5px;
    height: 5px;
  }

  .voltar {
    display: flex;
    padding-top: 2rem;
  }

  .link-login {
    color: #fff;
  }

  .link-login:hover,
  .link-login:hover svg {
    color: var(--Excel) !important;
  }

  #loading {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: rotate;
    background: rgba(0,0,0,0.6);
    z-index: 100;
  }

  #loading .image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    height: 120px;
    margin: -60px 0 0 -60px;
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
  }

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
