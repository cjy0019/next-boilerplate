import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import palette from './palette';

const globalStyle = css`
  ${reset};

  @font-face {
    font-family: 'SpoqaBold';
    src: local('Spoqa Han Sans Neo Bold'),
      url('/fonts/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
      url('/fonts/SpoqaHanSansNeo-Bold.woff') format('woff');
    font-display: fallback;
  }

  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'SpoqaBold';
    color: ${palette.black};
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyle;
