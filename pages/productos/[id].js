//Dependencias
import {useRouter} from 'next/router'
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

Modal.setAppElement("#__next")

const ProductoPagina = () => {
    
    const {metodos, usuario} = useContext(FirebaseContext)
    
    const [producto, setProducto ] = useState({})
    const [modalstate, setModal] = useState(false)

    //Routing para obtener el id actual
    const router = useRouter();
    const { query: { id } } = router; //Destructuring para obtener el id que se encuentra en la URL 
    
    useEffect(()=> {
        if(id) {
            metodos.getProducto(id)
            .then( res => setProducto(res))
        }
    }, [])

    const toggleLike = () => {
        if(producto.likes.includes(usuario.id)) { //Comprueba si el ID del user ya ha votado
            const pos = producto.likes.indexOf(usuario.id)
            const nuevosLikes = [...producto.likes]
            nuevosLikes.splice(pos,1)
            metodos.meGusta(id,nuevosLikes)
            setProducto({...producto, likes: nuevosLikes})
            return
        } 
        const nuevosLikes = [...producto.likes,usuario.id]
        setProducto({...producto, likes: nuevosLikes})
        metodos.meGusta(id,nuevosLikes)
    }
   
    return ( 
        <>
            { usuario ? <HeaderUsuario /> : <HeaderGlobal />}
            {Object.keys(producto).length === 0 ? <Spinner /> : <Producto producto={producto} toggleLike={toggleLike} setModal={setModal}/>}
            <Modal isOpen={modalstate} onRequestClose={()=>setModal(false)} className={CSS.modal}>
                <ModalCompra setModal={setModal} id={id}/>
            </Modal>
        </>
     );
}
 
export default ProductoPagina;

