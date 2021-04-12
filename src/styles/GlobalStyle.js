import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

 :root {
    --white: #FFFFFF;
    --main: #e5e5e5;
    --btn:#006ee3;
    --colorInput: #6c6c80;
    --black0: #202020;
    --black1: #404040;
    --black2: #8c8c8c;
    --black3: #b9b9b9;
    --red: #FF1510;
    --pink: #FDECEC;
    --green: #E7F6E7;
  }
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Work Sans', sans-serif;

  }
  html,body, #root{
    background:var(--white);
  }
  *,button,input{
    border:0;
    background:none;
    margin:0;
  }
  body {
    font-size:1.6rem;
  }
  html {
  /* a cada 1rem será considera 10px */
  font-size: 62.5%;
}

`;
