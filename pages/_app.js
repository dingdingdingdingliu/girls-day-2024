import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { ThemeProvider } from "@emotion/react";
import { VisionGameProvider } from "@/context/VisionGameContext";
import theme from "../styles/theme";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", "G-0J3TCGLSWW", {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>2024 臺灣女孩日｜偏見眼鏡行</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <VisionGameProvider>
          <div>
            <Component {...pageProps} />
          </div>
        </VisionGameProvider>
      </ThemeProvider>
    </>
  );
}
