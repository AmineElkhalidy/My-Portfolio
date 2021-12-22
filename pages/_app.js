import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (

    <>
      <Head>
        <link key='link-one' rel="shortcut icon" href="./assets/img/Logo.png" type="image/x-icon" />
        <link key='link-two' rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
        <title>Amine Elkhalidy - Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  
    )
}

export default MyApp
