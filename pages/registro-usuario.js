//Dependencias
import Link from "next/link";
import { useForm } from "react-hook-form";
import {useRouter} from 'next/router'
import {useContext} from 'react'
//Context
import {FirebaseContext} from 'firebase/context'
//Componentes
import Layout from "components/Layout";
import Header from "components/HeaderResponsive/header";
import {
  Formulario,
  Campo,
  BtnSubmit,
  Ancor,
  Titulo,
  Error,
  FondoForm
} from "components/UI";

const RegistroUsuario = () => {
  const router = useRouter()
  const {metodos} = useContext(FirebaseContext)

  const { register, handleSubmit, errors } = useForm();


  const handleOnSubmit = (datos) => { //el handleSubmit de useForm() por default ejecuta el e.preventDefault()
    const {nombres, email,contraseña} = datos;
    const info = {
      tipo: 'usuario',
      ...datos
    }

    const nameAndType = {
      tipo: "usuario",
      nombres
    }

    try {
      metodos.registrar(nameAndType, email, contraseña)
      metodos.crearUsuarioBD(info)
      router.push("/login")
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <FondoForm>
      <Header/>
        <Titulo>Registro</Titulo>
        <Formulario onSubmit={handleSubmit(handleOnSubmit)}>
          <Campo>
            <input
              type="text"
              placeholder="Inserta nombre"
              name="nombres"
              ref={register({ required: true })}
            />
            {errors.nombres && <Error>Este campo es requerido</Error>}
          </Campo>
          <Campo>
            <input
              type="text"
              placeholder="Inserta apellido"
              name="apellidos"
              ref={register({ required: true })}
            />
            {errors.apellidos && <Error>Este campo es requerido</Error>}
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
                  message: "Email inválido",
                },
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
                  message: "Contraseña minima de 6 cacteres",
                },
              })}
            />
            {errors.contraseña && <Error>{errors.contraseña.message}</Error>}
          </Campo>
          <Campo>
            <BtnSubmit type="submit">Registrarme</BtnSubmit>
          </Campo>
          <Campo>
            <Link href="/login">
              <Ancor>¿Ya tienes cuenta? Inicia Sesión</Ancor>
            </Link>
          </Campo>
        </Formulario>
    </FondoForm>
  );
};

export default RegistroUsuario;
