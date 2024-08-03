import { createGlobalStyle } from 'styled-components';
import RobotoRegular from './assets/fonts/Roboto/Roboto-Regular.ttf';
import RobotoMedium from './assets/fonts/Roboto/Roboto-Medium.ttf';
import RobotoItalic from './assets/fonts/Roboto/Roboto-Italic.ttf';
import RobotoBold from './assets/fonts/Roboto/Roboto-Bold.ttf';

const GlobalStyles = createGlobalStyle`
:root {
	--button: #e44848;
	--main: #101828;
	--inputs: #f7f7f7;
	--block-features: #f2f4f7;
	--rating: #ffc531;
	--text: var(--text);
}


#root {
  padding: 0;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoRegular}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoMedium}) format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoItalic}) format('truetype');
  font-weight: 400;
  font-style: italic;;
}

  @font-face {
  font-family: 'Roboto';
  src: url(${RobotoBold}) format('truetype');
  font-weight: 700;
  font-style: normal;
}

html {
box-sizing: border-box;
}

*,
*::before,
*::after {
box-sizing: inherit;
}

body {
font-family: 'Roboto', sans-serif;
background-repeat: no-repeat;
padding: 0;
margin: 0;
width: 100%;
height: 100%;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
}

textarea {
    font-family: 'Roboto', sans-serif ; 
  }

textarea::placeholder {
    font-family: 'Roboto', sans-serif ; 
  }

input {
    font-family: 'Roboto', sans-serif ; 
  }

input::placeholder {
    font-family: 'Roboto', sans-serif ; 
  }`;

export default GlobalStyles;
