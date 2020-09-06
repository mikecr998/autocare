import styled from 'styled-components'
import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

const Contenedor = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .5rem 0;

    @media(min-width:768px) {
        width: 1200px;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const Logo = styled.img`
    height: 100px;
    border-radius: 9999px;
    cursor: pointer;
    @media(min-width: 768px) {
        margin: 10px 0 0 20px;        
        
    }
`;

const Lista = styled.ul`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        list-style:none;
        padding: 0;
        margin: 1rem auto;        
        color: white;
        font-weight: 700;
        font-family: sans-serif; 

    @media(min-width:768px) {
        flex-direction: row;
        margin:0;
        justify-content: space-around;
    }
`;

const Ancor = styled.a`
    cursor: pointer;
   @media(min-width: 768px) {
    font-size: 1.4rem;
    margin: 0 20px 0 0;

    &:hover {
        color: #DEB887;
    }
   } 

`;

const Elemento = styled.li`
    margin-bottom: 1rem;
    ul {
        margin-top: .5rem;
        padding:0;
        text-align:center;
        text-decoration: none;
        list-style:none;
    }
   @media(min-width:768px) {
    font-size: 1.4rem;
    margin: 0 20px 0 0;
    padding: 0;
    position: relative;
    cursor: pointer;

    &:hover {
        color: #DEB887;

        ul {
             display: block;
         }
    } 

     ul {
        display: flex;
        flex-direction: column;
        display: none;
        position: absolute;
        text-align: unset;
        margin:0 0 1rem 0;
    } 
   }
`;

const ElementoEfecto = styled.li`
    list-style: none;
    font-size: .8rem;
    margin-bottom: .5rem;

    @media(min-width:768px) {
        font-size: 1.4rem;
        margin: 0 20px 0 0;
        padding: 0;
        position: relative;
        cursor: pointer;

        &:hover {
            color: #DEB887;
        }
        a {
            text-decoration: none;
            color: white;
            font-size: 1rem;
            margin: 0 20px 0 0;
            padding: 0;
            position: relative;
            transition: margin-left .3s ease-in-out;

            &:hover {
                margin-left: 10px;
                margin-top:.5rem;
            }
    }
    }
    
`;

const Header = () => {
    return ( 
        <Contenedor>
            <Link href="/">
                <Logo src="logo.png" height="100px" />
            </Link>
            <Lista>
                <Elemento>
                    <Link href="/">
                        <Ancor>Inicio</Ancor>
                    </Link>
                    <FontAwesomeIcon 
                icon={faList}
                height="30"
                color="white"
            />
                </Elemento>
                <Elemento>
                    <Link href="/productosTodos">
                        <Ancor>Productos</Ancor>
                    </Link>
                </Elemento>
                <Elemento>
                    <Ancor>Registro</Ancor>
                    <ul>
                        <ElementoEfecto>
                            <Link href="/registro-usuario">
                                <Ancor>Usuario</Ancor>
                            </Link>
                        </ElementoEfecto>
                        <ElementoEfecto>
                            <Link href="/registro-empresa">
                                <Ancor>Empresa</Ancor>
                            </Link>
                        </ElementoEfecto>
                    </ul>
                </Elemento>
                <Elemento>                    
                    <Link href="/login">
                        <Ancor>Iniciar Sesión</Ancor>
                    </Link>
                </Elemento>
            </Lista>
        </Contenedor>
     );
}
 
export default Header;