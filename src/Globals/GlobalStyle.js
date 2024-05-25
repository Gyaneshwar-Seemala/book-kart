import { createGlobalStyle } from "styled-components";
import OutfitFont from "../../src/Assets/Fonts/Outfit-VariableFont_wght.ttf";
import Akkurat from "../../src/Assets/Fonts/Akkurat-Mono.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Outfit';
    src: url(${OutfitFont}) format('truetype');
  }
  @font-face {
    font-family: 'Akkurat';
    src: url(${Akkurat}) format('truetype');
  }
`;

export default GlobalStyle;
