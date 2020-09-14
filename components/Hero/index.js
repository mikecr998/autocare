//Dependencias
import styled from 'styled-components'
import {useContext} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
//Componentes
import Header from "components/HeaderResponsive"

const Contenedor = styled.div`
    background-image: url('hero.jpg');
    background-size: cover;  
    width: 100%;
    height: 100vh;
    opacity: .85;
`;

const ContenedorFrase = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;

    @media (min-width:768px) {
        width: 700px;
        margin: 0 auto;
    }
`
const Frase = styled.h1`
    font-family: "Roboto", sans-serif;
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    margin-top: 14rem;

    @media (min-width:768px) {
        font-size: 3rem;
        margin: 17rem auto 0 auto;
    }
`
const Hero = () => {
    return ( 
        <>
       <Contenedor>
            <ContenedorFrase>
                <Frase>Las mejores piezas las encuentras aquí</Frase>
                <FontAwesomeIcon 
                    icon={faAngleDoubleDown}
                    height="100"
                    color="white"
                />
            </ContenedorFrase> 
        </Contenedor>
       <Header/>
        </>
     );
}
 
export default Hero;