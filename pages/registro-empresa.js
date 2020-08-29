//Dependencias
import Link from 'next/link'
import { useForm } from "react-hook-form";
import {useRouter} from 'next/router'
import {useContext} from 'react'
//Context
import {FirebaseContext} from 'firebase/context'
//Componentes
import Layout from 'components/Layout'
import HeaderGlobal from 'components/Header/HeaderGlobal'
import {Formulario, Campo, BtnSubmit, Ancor, Titulo, Error } from 'components/UI'

const RegistroEmpresa = () => {
    const router = useRouter()
    const {metodos} = useContext(FirebaseContext)

    const { register, handleSubmit, errors } = useForm();    

    const handleOnSubmit = async (datos) => { //el handleSubmit de useForm() por default ejecuta el e.preventDefault()   
        const {nombre, email, contraseña} = datos;   
        const info = {
            tipo: 'empresa',
            ...datos
        }

        const nameAndType = {
            tipo: "empresa",
            nombre
          }

        try {
            metodos.registrar(nameAndType, email, contraseña)
                .then(metodos.crearUsuarioBD(info))      
            router.push("/login")
        } catch (error) {
            console.log(error.message)
        }
    };

    return ( 
        <>
        <HeaderGlobal />
        <Layout>
            <Titulo>Registra tu negocio</Titulo>
            <Formulario
                onSubmit={handleSubmit(handleOnSubmit)}
            >
                <Campo>
                    <input 
                        type="text"
                        placeholder="Inserta nombre de negocio"
                        name="nombre"
                        ref={register({ required: true })}
                     /> 
                     {errors.nombre && <Error>Este campo es requerido</Error>}
                </Campo> 
                <Campo>
                    <input 
                        type="text"
                        placeholder="Inserta URL"
                        name="url"
                        ref={register({ required: true })}
                     /> 
                     {errors.url && <Error>Este campo es requerido</Error>}
                </Campo>
                <Campo>
                    <input 
                        type="text"
                        placeholder="Inserta RFC"
                        name="rfc"
                        ref={register({ required: true })}
                     /> 
                     {errors.rfc && <Error>Este campo es requerido</Error>}
                </Campo> 
                <Campo>
                    <input 
                        type="text"
                        placeholder="Inserta dirección del negocio"
                        name="direccion"
                        ref={register({ required: true })}
                     /> 
                     {errors.direccion && <Error>Este campo es requerido</Error>}
                </Campo>  
                <Campo>
                    <input
                        type="number"
                        placeholder="Inserta numero telefónico"
                        name="telefono"
                        ref={register({ required: "Este campo es obligatorio", minLength: { value: 10, message: "Telefono inválido"} })}
                    />
                    {errors.telefono && <Error>{errors.telefono.message}</Error>}
                </Campo>
                <Campo>
                    <input
                        type="text"
                        placeholder="Inserta tu email"
                        name="email"
                        ref={register({
                            required: "Este campo es requerido",
                            pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Email inválido"
                        }
                    })}
                    />
                    {errors.email && <Error>{errors.email.message}</Error>}
                </Campo>
                <Campo>
                    <input
                        type="password"
                        placeholder="Inserta tu contraseña"
                        name="contraseña"
                        ref={register({
                            required: "Este campo es requerido",
                            minLength: {
                            value: 6,
                            message: "Contraseña minima de 6 cacteres"
                        }
                    })}
                    />
                    {errors.contraseña && <Error>{errors.contraseña.message}</Error>}
                </Campo>
                <Campo>
                    <BtnSubmit
                        type="submit"
                    >Registrar
                    </BtnSubmit>
                </Campo>
                <Campo>
                    <Link href="/login">
                        <Ancor>¿Ya tienes cuenta? Inicia Sesión</Ancor>
                    </Link>
                </Campo>                 
                    
            
                                                   
            </Formulario>
        </Layout>
        </>
     );
}
 
export default RegistroEmpresa;