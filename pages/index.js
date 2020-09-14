import Hero from 'components/Hero'
import Section from 'components/Section'
import Footer from 'components/Fotter'
import Firebase from 'firebase/metodos'

export default function Home({productos}) {
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

