//Dependencias
import Modal from 'react-modal'
import {useState, useContext} from 'react'
//Context
import {FirebaseContext} from 'firebase/context'
//Componentes
import {
    Contenedor, 
    Nombre, 
    Imagen, 
    ContenedorImagen, 
    FotterProducto,
    ContendorBotones, 
    BotonEditar,
    BotonEliminar
} from 'components/ProductoEnLista/styles'
import ModalActualizarProducto from 'components/Modal/ModalActualizarProducto'
import CSS from 'components/Modal/styles.module.css'

Modal.setAppElement("#__next")

const ProductosEmpresa = ({producto, productos, setProductos}) => {
    const [modalstate, setModal] = useState(false)

    const {metodos} = useContext(FirebaseContext)

    const {id, nombre, fotoURL, marca, piezas} = producto

    const eliminar = () => {
        const nuevosProductos = productos.filter(producto => producto.id !== id )

        setProductos([...nuevosProductos])
        metodos.eliminarProducto(id)
    }

    return ( 
        <>
            <Contenedor>
                <Nombre>{nombre}</Nombre>
                <ContenedorImagen>
                    <Imagen src={fotoURL} />
                </ContenedorImagen>
                <FotterProducto>
                    <p> Marca: <span>{marca}</span></p>
                    <p>No. piezas: <span>{piezas}</span></p>
                </FotterProducto>
                <ContendorBotones>
                <BotonEditar
                    onClick={()=> setModal(true)}
                >Editar</BotonEditar>
                <BotonEliminar
                    onClick={eliminar}
                >Eliminar</BotonEliminar>
                </ContendorBotones>
            </Contenedor>

            <Modal isOpen={modalstate} onRequestClose={()=>setModal(false)} className={CSS.modal}>
                <ModalActualizarProducto setModal={setModal} id={id} productos={productos} setProductos={setProductos}/>
            </Modal>
        </>
     );
}
 
export default ProductosEmpresa;