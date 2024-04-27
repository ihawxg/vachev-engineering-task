import { ThemeProvider } from "styled-components";
import { theme } from "~/styles";
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
