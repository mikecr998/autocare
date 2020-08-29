import CSS from './styles.module.css'
import { useForm } from "react-hook-form";
import {useState, useContext} from 'react'
import {FirebaseContext} from "firebase/context"
import {useRouter} from 'next/router'

const ModalCompra = ({setModal, id}) => {
    const router = useRouter()
    const {metodos} =  useContext(FirebaseContext)
    const { register, handleSubmit, getValues } = useForm();
    const [error, SetError] = useState(null)

    const OnSubmit = () => {
        const datos = getValues() 
        const {nombre, numero, vencimiento, clave} = datos;
        if(nombre === "" || numero === "" || vencimiento === "" || clave === "" ) {
            SetError(true)
            return
        } 
        SetError(false)
        setModal(false)
        metodos.ComprarProducto(id)
            .then(res => console.log(res))
        //metodos.eliminarProducto(id)
        router.push("/")
    }
    return ( 
        <div className={CSS.contenedor}>
            <button onClick={()=> setModal(false)} className={CSS.btnCerrar}>X</button>
            {error && <p className={CSS.error}>Todos los campos son obligatorios</p>}
            <form onSubmit={handleSubmit(OnSubmit)}>
                <input 
                    placeholder="Propietario de la tarjeta" 
                    name="nombre"
                    ref={register} 
                    className={CSS.input}
                />
                <input 
                    placeholder="XXXX XXXX XXXX XXXX" 
                    name="numero"
                    ref={register}
                    className={CSS.input}
                />
                <input 
                    placeholder="MM / AA" 
                    name="vencimiento"
                    ref={register}
                    className={CSS.input}
                />
                <input 
                    placeholder="CVV / CVC" 
                    name="clave"
                    ref={register}
                    className={CSS.input}
                />
                <input type="submit" value="Comprar" className={CSS.btnActualizar} />
            </form>           
        </div>
     );
}
 
export default ModalCompra;