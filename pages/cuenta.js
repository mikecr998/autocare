//Dependencias
import Modal from 'react-modal'
import CSS from 'components/Modal/styles.module.css'
//Context
import {FirebaseContext} from 'firebase/context'
import { useState, useContext, useEffect } from 'react'
//Componentes
import Header from "components/HeaderResponsive/header"
import {Titulo, ImagenUser, FondoForm} from 'components/UI'
import CuentaEmpresa from 'components/Cuentas/Empresa'
import CuentaUsuario from 'components/Cuentas/Usuario'
import ModalEmpresa from 'components/Modal/ModalEmpresa'
import ModalUsuario from 'components/Modal/ModalUsuario'
import Spinner from 'components/Spinner'

Modal.setAppElement("#__next")

const overlayPortal = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        zIndex: 999
    }
}
const Cuenta = () => {
    const {metodos, usuario} = useContext(FirebaseContext)
    const [user, setUser] = useState(usuario)
    const [modalstate, setModal] = useState(false)

    useEffect(()=> {
        setUser(usuario)
    }, [usuario])

    useEffect(()=> {
        if(user) {
            metodos.obtenerUsuario(sessionStorage.getItem("usuario"))
                    .then(res => setUser(res[0]))
        }
    },[])

    // const header = user && (user.tipo === "empresa" ? <HeaderEmpresa /> : <HeaderUsuario />)
    const cuenta = user && (user.tipo === "empresa" ?
        (<CuentaEmpresa user={user} setModal={setModal}/> ) : (<CuentaUsuario user={user} setModal={setModal} /> ))

    return (
        <FondoForm cuenta>
            <Header />
                <Titulo cuenta>Información de la cuenta</Titulo>
                <ImagenUser>
                    <img src="user.svg"/>
                </ImagenUser>
                {user === null ? <Spinner /> : cuenta}
            <Modal isOpen={modalstate} onRequestClose={()=>setModal(false)} className={CSS.modal} style={overlayPortal}>
                {user && (user.tipo === "empresa" ? <ModalEmpresa setModal={setModal} userEmail={user.email} setUser={setUser} /> : <ModalUsuario setModal={setModal} userEmail={user.email} setUser={setUser}/>)}
            </Modal>
        </FondoForm>
     );
}
export default Cuenta;