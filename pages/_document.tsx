import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="keywords"
            content="Hi! My name is lampham. Iam a web developer and welcome to my portfolio"
          />
          <meta
            name="description"
            // eslint-disable-next-line max-len
            content="The only official domain: Lam Pham"
          />

          <meta name="application-name" content="Lam Pham" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Lam Pham" />

          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#1285d2" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Lam Pham Portfolio" />
          <meta
            property="og:description"
            // eslint-disable-next-line max-len
            content="Hi! My name is Lam Pham. Iam a web developer and welcome to my portfolio."
          />
          <meta property="og:site_name" content="Lam Pham" />
          <meta property="og:url" content="https://www.lampnm.com" />
          <meta
            property="og:image"
            content="https://media.discordapp.net/attachments/1048815885265141770/1070630351430488105/IMG_2192.jpeg?width=507&height=676"
          />

          <link rel="manifest" href="/manifest.json" />

          <link rel="icon" href="/lampham.svg" />
          <link rel="shortcut icon" href="/lampham.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://cdn-homepage.cloudfront.net" />
          <link
            href="https://fonts.googleapis.com/css2?family=Tomorrow:ital,wght@0,400;0,600;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
