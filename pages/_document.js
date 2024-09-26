import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zh-Hant">
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');
            `,
          }}
        />
        <meta charset="UTF-8"></meta>
        <meta
          name="description"
          content="偏不要性別框架，見證你勇敢表達！2024 年臺灣女孩日，衛福部社家署與聚樂邦合作開設「偏見眼鏡行」，提供多元服務，矯正各式偏見的視力問題。現在就推開大門，進入「偏見眼鏡行」吧！"
        />
        <link rel="icon" href="/images/web_icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
