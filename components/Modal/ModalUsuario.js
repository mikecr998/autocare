import CSS from './styles.module.css'
import { useForm } from "react-hook-form";
import {useState, useContext} from 'react'
import {FirebaseContext} from "firebase/context"

const ModalUsuario = ({setModal, userEmail, setUser}) => {
    const {metodos} =  useContext(FirebaseContext)
    const { register, handleSubmit, getValues } = useForm();
    const [error, SetError] = useState(null)

    const OnSubmit = () => {
        const datos = getValues() 
        const {nombres, apellidos} = datos;
        if(nombres === "" || apellidos === "") {
            SetError(true)
            return
        } 
        SetError(false)
        setModal(false)
        setUser({email:userEmail, tipo: "usuario", ...datos})
        metodos.actualizarInfo(userEmail,datos)
    }
    return ( 
        <div className={CSS.contenedor}>
            <button onClick={()=> setModal(false)} className={CSS.btnCerrar}>X</button>
            {error && <p className={CSS.error}>Todos los campos son obligatorios</p>}
            <form onSubmit={handleSubmit(OnSubmit)}>
                <input 
                    placeholder="Nombre" 
                    name="nombres"
                    ref={register} 
                    className={CSS.input}
                />
                <input 
                    placeholder="Apellido" 
                    name="apellidos"
                    ref={register}
                    className={CSS.input}
                />
                <input type="submit" value="Hecho" className={CSS.btnActualizar} />
            </form>           
        </div>
     );
}
 
export default ModalUsuario;