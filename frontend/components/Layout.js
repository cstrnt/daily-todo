import Head from 'next/head';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>✍ Daily Todo!</title>
      <link
        href="https://fonts.googleapis.com/css?family=Rubik"
        rel="stylesheet"
      />
      <link
        href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        rel="stylesheet"
      />
    </Head>
    <h1 className="title">✍ DAILY TODO 📅</h1>
    {children}
    <style jsx global>
      {`
        body {
          font-family: Rubik;
        }
        .title {
          text-align: center;
        }
      `}
    </style>
  </>
);

export default Layout;
