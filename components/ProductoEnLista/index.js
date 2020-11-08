//Dependencias
import Link from 'next/link'
//Context
//Componentes
import {Contenedor, Nombre, Imagen, ContenedorImagen, FotterProducto, Boton} from './styles'


const Producto = ({producto}) => {
    const {nombre, marca, piezas, fotoURL, id} = producto
    return (
        <Contenedor>
            <Nombre>{nombre}</Nombre>
            <ContenedorImagen>
                <Imagen src={fotoURL} />
            </ContenedorImagen>
            <FotterProducto>
                <p> Marca: <span>{marca}</span></p>
                <p>No. piezas: <span>{piezas}</span></p>
            </FotterProducto>
            <Link href="/productos/[id]" as={ `/productos/${id}`}>
                <Boton>
                    Ver Más
                </Boton>
            </Link>
        </Contenedor>
     );
}

export default Producto;