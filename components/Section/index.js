//Dependencias
//Context
//Componentes
import {Contenedor, Titulo} from './styles'
import Prodcuto from 'components/ProductoEnLista';


const Section = ({productos}) => {
    return ( 
        <>  
            <Titulo>Últimos agregados</Titulo>
            <Contenedor>
               {productos.map(producto => <Prodcuto key={producto.id} producto={producto}/>)}
            </Contenedor>
            <Titulo>Más vendidos</Titulo>
            <Contenedor>
               {productos.map(producto => <Prodcuto key={producto.id} producto={producto}/>)}
            </Contenedor>
        </>
     );
}
 
export default Section;