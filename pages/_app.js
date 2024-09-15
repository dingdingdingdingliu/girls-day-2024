import Head from "next/head";
import { ThemeProvider } from "@emotion/react";
import { Noto_Sans_TC as NotoSansTC } from "next/font/google";
import { VisionGameProvider } from "@/context/VisionGameContext";

import theme from "../styles/theme";
import "@/styles/globals.css";

// 引入 Noto Sans TC 字型
const notoSansTC = NotoSansTC({
  subsets: ["latin"], // 選擇合適的字元集，例如 'latin'
  weights: ["400", "700"], // 指定字型的粗細
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>2024 臺灣女孩日｜偏見眼鏡行</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <VisionGameProvider>
          <div className={notoSansTC.className}>
            <Component {...pageProps} />
          </div>
        </VisionGameProvider>
      </ThemeProvider>
    </>
  );
}
