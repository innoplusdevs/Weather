import "../styles/globals.css";
import type { AppProps } from "next/app";

// Site content provider
import { SiteContext } from "components/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteContext>
      <Component {...pageProps} />
    </SiteContext>
  );
}

export default MyApp;
