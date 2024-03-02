import { createGlobalStyle } from 'styled-components';
import colors from './Variables';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

  * {
    background-color: ${colors.colorPrimary};
    border: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
