import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="bg-gradient-wrapper">
        <Head />
        <body>
          <Main />
          <NextScript />
          <noscript dangerouslySetInnerHTML={{ __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KFSGCMS"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          ` }} />
          <script src="//code.tidio.co/jxpuq4yvxbfcmox0r4ydtjuk5jxuywxl.js" async></script>
        </body>
      </Html>
    )
  }
}
