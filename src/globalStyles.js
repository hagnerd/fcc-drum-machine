import { injectGlobal } from "emotion";

injectGlobal`
/* Typography */
@import url('https://fonts.googleapis.com/css?family=VT323|Open+Sans');

/* resets */
  body, html {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 1em;
  }

  body {
    font-weight: 400;
    line-height: 1.45;
    background-color: #F7F7F7;
  }

  p {
    /* margin-bottom: 1.3em; */
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4 {
    /* margin: 1.414em 0 0.5em; */
    font-weight: inherit;
    line-height: 1.2;
  }

  h1 {
    font-family: 'VT323';
    font-size: 3.998em;
    /* margin-top: 0; */
  }

  h2 {
    font-size: 2.827em;
  }

  h3 {
    font-family: 'VT323';
    font-size: 1.999em;
  }

  h4 {
    font-size: 1.414em;
  }

  small, .font_small {
    font-size: 0.707em;
  }

  /* Small Screen */
  @media (max-width: 420px) {
    html {
      font-size: .9em;
    }
  }

  @media (min-width: 800px) {

  }
`;
