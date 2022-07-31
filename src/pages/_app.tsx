import { AppProps } from 'next/app';
import { wrapper } from '../modules';
import GlobalStyle from '../styles/GlobalStyle';

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(app);
