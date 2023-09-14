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
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1076996290197435"
     crossorigin="anonymous"></script>
          ` }} />
        </body>
      </Html>
    )
  }
}
