import {Contenedor,ContenedorArticles, Titulo, Banner,Texto} from './styles'
import Producto from 'components/ProductoEnLista';


const Section = ({productos}) => {
    return (
        <>
            <Contenedor>
            <Titulo>Últimos agregados</Titulo>
            <ContenedorArticles>
               {productos.map(producto => <Producto key={producto.id} producto={producto}/>)}
            </ContenedorArticles>
            </Contenedor>

            <Banner>
               <figure></figure>
               <h2>Contamos con la mejor calidad en productos</h2>
            </Banner>

            <Contenedor>
               <Titulo>Más vendidos</Titulo>
               <ContenedorArticles>
                  {productos.map(producto => <Producto key={producto.id} producto={producto}/>)}
               </ContenedorArticles>
            </Contenedor>
        </>
     );
}

export default Section;