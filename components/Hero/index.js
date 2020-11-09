//Dependencias
import Link from "next/link"
import styled from 'styled-components'
import {useContext} from "react"
//Context
import {FirebaseContext} from 'firebase/context'
//Componentes
import Header from "components/HeaderResponsive/header"
import {BotonPrimario} from "components/UI"

const Background = styled.div`
    background-image: url('hero.jpg');
    background-size: cover;
    width: 100%;
    height: 100vh;
`;

const Contenido = styled.div`
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    padding-top: 50px;

    @media (max-width:414px) {
        display: flex;
        flex-direction: column;
        padding-top: 0px;
    }
`
const Frase = styled.h1`
    font-weight: 700;
    color: #ffd800;
    text-transform: uppercase;
    font-size: 3rem;
    line-height: 50px;
    letter-spacing: 3px;
    background: rgba(0,0,0,.65);
    padding: 10px;
    margin: 50px 0px 70px 0px;

    span {
        color: #d81428;
    }

    @media (max-width:415px) {
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 1px;
        width:95%;
        margin: 100px auto 50px auto;
    }
`
const Hero = () => {
    const {usuario} = useContext(FirebaseContext)
    return (
        <>
        <Background>
        <Header/>
            <Contenido>
                <Frase>Descubre las <span>mejores piezas</span> y las más recomendadas aquí</Frase>
                <Link href={usuario ? (usuario.tipo !== "empresa" ? "/productosTodos" : "/ver-productos") : "/login"} passHref>
                    <BotonPrimario>COMPRAR AHORA</BotonPrimario>
                </Link>
            </Contenido>
        </Background>
        </>
     );
}

export default Hero;