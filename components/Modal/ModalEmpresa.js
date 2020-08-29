import CSS from './styles.module.css'
import { useForm } from "react-hook-form";
import {useState, useContext} from 'react'
import {FirebaseContext} from "firebase/context"

const ModalEmpresa = ({setModal, userEmail}) => {
    const {metodos} =  useContext(FirebaseContext)
    const { register, handleSubmit, getValues } = useForm();
    const [error, SetError] = useState(null)

    const OnSubmit = () => {
        const datos = getValues() 
        const {nombre, direccion, url, rfc, telefono} = datos;
        if(nombre === "" || direccion === "" || url === "" || rfc === "" || telefono === "") {
            SetError(true)
            return
        } 
        SetError(false)
        setModal(false)
        metodos.actualizarInfo(userEmail,datos)
        metodos.actualizarNombreEmpresaProducto(userEmail, nombre)
    }
    return ( 
        <div className={CSS.contenedor}>
            <button onClick={()=> setModal(false)} className={CSS.btnCerrar}>X</button>
            {error && <p className={CSS.error}>Todos los campos son obligatorios</p>}
            <form onSubmit={handleSubmit(OnSubmit)}>
                <input 
                    placeholder="Nuevo nombre" 
                    name="nombre"
                    ref={register} 
                    className={CSS.input}
                />
                <input 
                    placeholder="Nueva dirección" 
                    name="direccion"
                    ref={register}
                    className={CSS.input}
                />
                <input 
                    placeholder="Nuevo URL" 
                    name="url"
                    ref={register}
                    className={CSS.input}
                />
                <input 
                    placeholder="Nuevo RFC" 
                    name="rfc"
                    ref={register}
                    className={CSS.input}
                />
                <input 
                    placeholder="Nuevo teléfono" 
                    name="telefono"
                    ref={register}
                    className={CSS.input}
                />
                <input type="submit" value="Hecho" className={CSS.btnActualizar} />
            </form>           
        </div>
     );
}
 
export default ModalEmpresa;