import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import { Noto_Sans_TC as NotoSansTC } from "next/font/google";

import "@/styles/globals.css";

// 引入 Noto Sans TC 字型
const notoSansTC = NotoSansTC({
  subsets: ["latin"], // 選擇合適的字元集，例如 'latin'
  weights: ["400", "700"], // 指定字型的粗細
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div className={notoSansTC.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
