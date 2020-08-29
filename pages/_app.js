import Head from 'next/head'
import FirebaseProvider from 'firebase/context'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" /> 
        <title>AUTOCARE</title>
      </Head>
      
      <FirebaseProvider>
        <Component {...pageProps} />
      </FirebaseProvider>

      <style jsx global>{`
        html {
          box-sizing: border-box;
        }
        *, *:before, *:after {
          box-sizing: inherit;
        }
        body {
          background: rgb(231,224,217);
          background: radial-gradient(circle, rgba(231,224,217,1) 0%, rgba(234,222,208,1) 100%); 
        }
        input:focus { 
          outline: none; 
        }
        button:focus { 
          outline: none; 
        }       
      `}</style>
    
    </>
  )
}

export default MyApp
