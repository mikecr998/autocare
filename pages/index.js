//Dependencias 
// import {useState, useContext, useEffect} from 'react'
// //Context
// import {FirebaseContext} from 'firebase/context'
//Componentes
import Hero from 'components/Hero'
import Section from 'components/Section'
import Footer from 'components/Fotter'
import Firebase from 'firebase/metodos'

export default function Home({productos}) {
  // const [productos, setProductos] = useState(null)
  // const {metodos} = useContext(FirebaseContext)

  // useEffect(()=> {
  //   metodos.getProductosUltimos()
  //   .then(res => setProductos(res))
  // }, [])

  return (
    <>
      <main >
        <Hero/>
        {productos && <Section productos={productos}/>}
        <Footer />
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const productos = await Firebase.getProductosUltimos()
  return {
    props: {productos}, 
  }
}

