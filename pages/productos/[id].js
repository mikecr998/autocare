//Dependencias
import {useContext, useEffect, useState} from 'react'
import Modal from 'react-modal'
import CSS from 'components/Modal/styles.module.css'
//Context
import {FirebaseContext} from 'firebase/context'
//Componentes
import HeaderUsuario from  'components/Header/HeaderUsuario'
import HeaderGlobal from 'components/Header/HeaderGlobal'
import Spinner from 'components/Spinner'
import Producto from 'components/Producto'
import ModalCompra from 'components/Modal/ModalCompra'

import Firebase from 'firebase/metodos'

Modal.setAppElement("#__next")

const ProductoPagina = ({product}) => {
    
    const {metodos, usuario} = useContext(FirebaseContext)
    const [producto, setProducto ] = useState(product)
    const [modalstate, setModal] = useState(false)

    const {id} = producto 
    
    metodos.getProducto(id)
        .then( res => setProducto(res))
    

    useEffect(()=> {
        //Al desmontar dejar de escuchar los cambios del doc
        var unsub = metodos.db.collection('productos').onSnapshot(() => {});
        return () => unsub();        
    },[])


    const toggleLike = () => {
        if(producto.likes.includes(usuario.id)) { //Comprueba si el ID del user ya ha votado
            const pos = producto.likes.indexOf(usuario.id)
            producto.likes.splice(pos,1)
            metodos.meGusta(id,producto.likes)
            return
        } 
        const nuevosLikes = [...producto.likes,usuario.id]
        metodos.meGusta(id,nuevosLikes)
    }
   
    return ( 
        <>
            { usuario ? <HeaderUsuario /> : <HeaderGlobal />}
            {producto === null ? <Spinner /> : <Producto producto={producto} toggleLike={toggleLike} setModal={setModal}/>}
            <Modal isOpen={modalstate} onRequestClose={()=>setModal(false)} className={CSS.modal}>
                <ModalCompra setModal={setModal} id={id}/>
            </Modal>
        </>
     );
}
 
export default ProductoPagina;

export async function getServerSideProps({params}) {
    const {id} = params
    const product = await Firebase.getProducto(id)
    return {
      props: {product}
    }
  }