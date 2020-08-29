//Dependencias
import styled from 'styled-components'
import {useContext} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
//Context
import {FirebaseContext} from 'firebase/context'
//Componentes
import Header from 'components/Hero/header'
import HeaderUsuario from 'components/Header/HeaderUsuario'
import HeaderEmpresa from 'components/Header/HeaderEmpresa'

const Contenedor = styled.div`
    background-image: url('hero.jpg');
    background-size: cover;  
    width: 100%;
    margin: 0%;
    height: 100vh;
    position: relative;
    opacity: .85;
`;

const ContenedorFrase = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 3rem auto;

    @media (min-width:768px) {
        width: 700px;
        margin: 8rem auto;
    }
`
const Frase = styled.h1`
    font-family: "Roboto", sans-serif;
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    color: white;
    text-transform: uppercase;

    @media (min-width:768px) {
        font-size: 3rem;
    }
`

const Hero = () => {
    const {usuario} = useContext(FirebaseContext)  

    return ( 
       <Contenedor>
           {usuario  ? (
               usuario.tipo === "usuario" ? <HeaderUsuario sinFondo/> : <HeaderEmpresa sinFondo/>
           ) : <Header />}
           <ContenedorFrase>
            <Frase>Las mejores piezas las encuentras aquí</Frase>
            <FontAwesomeIcon 
                icon={faAngleDoubleDown}
                height="100"
                color="white"
            />
            </ContenedorFrase>
            
       </Contenedor>
     );
}
 
export default Hero;