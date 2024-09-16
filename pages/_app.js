import Head from "next/head";
import { ThemeProvider } from "@emotion/react";
import { VisionGameProvider } from "@/context/VisionGameContext";
import theme from "../styles/theme";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
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
