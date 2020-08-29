//Dependencias
import shortid from "shortid"
import { useForm } from "react-hook-form";
import {useState, useContext, useEffect} from 'react'
import {useRouter} from 'next/router'
//Context
import { FirebaseContext } from "firebase/context";
//Componentes
import HeaderEmpresa from 'components/Header/HeaderEmpresa'
import Layout from 'components/Layout'
import {Formulario, Campo, Titulo, Contenedor, CampoNumero, BtnSubmit, Error} from 'components/UI'

const NuevoProducto = () => {
    const router = useRouter()
    const {metodos, usuario} = useContext(FirebaseContext)
    const { register, handleSubmit, getValues  } = useForm();
    const [error, SetError] = useState(null)
    const [fotoURL, setFotoURL] = useState("")
    const [progreso, setProgreso] = useState(0)

    const OnSubmit = () => {
        const info = getValues() 
        const {nombre, marca, descripcion, precio, piezas, foto} = info;
        if(nombre === "" || marca === "" || descripcion === "" || precio === "" || piezas === "" || foto.length === 0) {
            SetError("Todos los campos son obligatotios")
            return
        }
        delete info.foto    
        info.usuario= usuario.email
        info.usuarioNombre= usuario.nombre
        info.likes= []
        info.fotoURL= fotoURL
        
        metodos.nuevoProducto(info).then(
            () => router.push("/") 
        )       
    }

    const OnChangeFoto = e => {
        const id = shortid.generate()
        const File = e.target.files[0]
        const referencia = metodos.storage.ref(`productos/${File.name}-${id}`)
        const subida = referencia.put(File)

        //Subir foto del producto
        subida.on('state_changed', snapshot => {
            let porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setProgreso(porcentaje-20)           
        }, error => {
            console.log(error)
        }, () => {
            referencia.getDownloadURL()
                .then(url => setFotoURL(url))
                .then(setProgreso(100))
        })  
    }    

    const OnChange = e => {
        setDatos({...datos,[e.target.name]: e.target.value})
    }

    return ( 
        <>
            <HeaderEmpresa />
            <Layout>
                <Titulo>Registro de Producto</Titulo>
                <Formulario
                    onSubmit={handleSubmit(()=> OnSubmit())}
                >
                    {error && <div><Error>{error}</Error></div>}
                    <Campo>
                        <input 
                            type="text"
                            placeholder="Nombre del producto"
                            name="nombre"
                            ref={register}
                        />
                    </Campo>
                    <Campo>
                        <input 
                            type="text"
                            placeholder="Marca del producto"
                            name="marca"
                            ref={register}
                        />
                    </Campo>
                    <Contenedor>
                        <CampoNumero>
                            <input 
                                type="decimal"
                                placeholder="Precio"
                                name="precio"
                                ref={register}
                            />
                        </CampoNumero>                      
                        <CampoNumero>
                            <input 
                                type="number"
                                placeholder="Piezas"
                                name="piezas"
                                ref={register}
                            />
                        </CampoNumero>
                    </Contenedor>        
                    <Campo>
                        <input 
                            type="file"
                            name="foto"
                            ref={register}
                            onChange={OnChangeFoto}
                        />
                        <progress value={progreso} max="100"></progress>
                    </Campo>
                    <Campo>
                        <textarea 
                            placeholder="Descripción del producto" rows="5"
                            name="descripcion"
                            ref={register}
                        />
                    </Campo>       
                    
                    <Campo>
                        <BtnSubmit>
                            Hecho
                        </BtnSubmit>
                    </Campo>
                </Formulario>
            </Layout>
        </>
     );
}
 
export default NuevoProducto;