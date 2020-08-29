//Dependencias
import shortid from 'shortid'
import {useRouter} from 'next/router'
import { useForm } from "react-hook-form";
import {useState, useContext} from 'react'
//Context
import {FirebaseContext} from "firebase/context"
//Componentes
import CSS from './styles.module.css'




const ModalActualizarProducto = ({setModal, id, setCambio}) => {
    const router = useRouter()
    const {metodos} =  useContext(FirebaseContext)
    const { register, handleSubmit, getValues } = useForm();
    const [error, SetError] = useState(null)
    const [fotoURL, setFotoURL] = useState("")

    const OnSubmit = () => {
        const datos = getValues() 
        const {nombre, marca, precio, piezas, descripcion, foto} = datos;
        if(nombre === "" || marca === "" || precio === "" || piezas === "" || descripcion === "" || foto.length === 0) {
            SetError(true)
            return
        } 
        delete datos.foto
        datos.fotoURL= fotoURL
        SetError(false)
        setModal(false)
        metodos.actualizarProducto(id, datos)
        setCambio(value => !value)
        
    }

    const OnChangeFoto = e => {
        const id = shortid.generate()
        const File = e.target.files[0]
        const referencia = metodos.storage.ref(`productos/${File.name}-${id}`)
        const subida = referencia.put(File)

        //Subir foto del producto
        subida.on('state_changed', snapshot => {
                       
        }, error => {
            console.log(error)
        }, () => {
            referencia.getDownloadURL()
                .then(url => setFotoURL(url))
        })  
    }  

    return ( 
        <div className={CSS.contenedor}>
            <button onClick={()=> setModal(false)} className={CSS.btnCerrar}>X</button>
            {error && <p className={CSS.error}>Todos los campos son obligatorios</p>}
            <form onSubmit={handleSubmit(OnSubmit)}>
                <input 
                    placeholder="Nombre" 
                    name="nombre"
                    ref={register} 
                    className={CSS.input}
                />
                <input 
                    placeholder="Marca" 
                    name="marca"
                    ref={register}
                    className={CSS.input}
                />
                <input 
                    type="number"
                    placeholder="Precio" 
                    name="precio"
                    ref={register}
                    className={CSS.input}
                />
                <input 
                    type="number"
                    placeholder="Piezas" 
                    name="piezas"
                    ref={register}
                    className={CSS.input}
                />
                <input 
                    type="file"
                    name="foto"
                    ref={register}
                    onChange={OnChangeFoto}
                    className={CSS.inputFile}
                />
                <textarea 
                    placeholder="Descripción" 
                    name="descripcion"
                    ref={register}
                    className={CSS.input}
                />
                <input type="submit" value="Hecho" className={CSS.btnActualizar} />
            </form>           
        </div>
     );
}
 
export default ModalActualizarProducto;