//Dependencias
import {useState} from 'react'
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useContext } from "react";
//Context
import { FirebaseContext } from "firebase/context";
//Componentes
import Layout from "components/Layout";
import Header from "components/HeaderResponsive";
import { Formulario, Campo, BtnSubmit, Titulo, Error } from "components/UI";

const Login = () => {
  const router = useRouter();
  const { metodos } = useContext(FirebaseContext);

  const { register, handleSubmit, errors } = useForm();
  const [error, SetError] = useState(null)

  const handleOnSubmit = async (datos) => {
    //el handleSubmit de useForm() por default ejecuta el e.preventDefault()
    const { email, contraseña } = datos;
      metodos.login(email, contraseña)
        .then( user =>{ LocalStorage(user.user.email), router.push("/") })
        .catch(function(error) {
            if(error.code === "auth/user-not-found") {
                SetError("No existe usuario con estas credenciales")
                return
            } else if(error.code === "auth/wrong-password") {
                SetError("La contraseña es incorrecta")
                return
            }
        })
  }

  const LocalStorage = usuario => {
    sessionStorage.setItem("usuario",usuario) 
  }
  return (
    <>
      <Header />
      <Layout>
        <Titulo>Iniciar Sesión</Titulo>
        <Formulario onSubmit={handleSubmit(handleOnSubmit)}>
            {error && <div><Error>{error}</Error></div>}
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
                required: "Este campo es requerido"
              })}
            />
            {errors.contraseña && <Error>{errors.contraseña.message}</Error>}
          </Campo>
          <Campo>
            <BtnSubmit type="submit">Iniciar Sesión</BtnSubmit>
          </Campo>
        </Formulario>
      </Layout>
    </>
  );
};

export default Login;
