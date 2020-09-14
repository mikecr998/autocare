//Dependencias
import Link from 'next/link'
import {useRouter} from "next/router"
import styled from 'styled-components'
import {useContext} from "react"
//Context
import {FirebaseContext} from 'firebase/context'
//Componentes
import SubMenuRegistro from "./SubMenuRegistro"
import SubMenuEmpresa from "./SubMenuEmpresa"

const Ancor = styled.a`
    cursor: pointer; /* Movile */
    font-size: 1.5rem;
    text-decoration: none;

   @media(min-width: 768px) { /* Desktop */
    font-size: 22px;
    
    &:hover {
        color: #DEB887;
    }
   } 
`;

const BtnAncor = styled.a`
    font-size: 22px;
    cursor: pointer; 
    background-color: ${props => props.login ? "#35ab5c" : "#d32f2f"};
    border-radius: 10px;
    padding: .5rem;
`
const Ul = styled.ul`
    list-style: none; /* Desktop */
    display: flex;
    justify-content: space-around;
    margin: 0;  
    padding: 0;    
    
    li {
        color: white;
        font-family:"Roboto", sans-serif;
        font-weight: 700;   
        margin: 0 3rem 0 0;    
    }

    @media (max-width: 768px) { /* Movile */
        display: "flex";
        flex-direction: column;
        background: #696969;
        position: fixed;
        opacity: .95;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100%;
        transform: ${props => props.menu === true ? "translateX(0)" : "translateX(100%)"};
        transition: transform 0.3s ease-in-out;
        padding: 0;
        
        li {
            margin: 0 auto;
            
        }      
    }
`

const ListaMenu = ({menu}) => {
    const {metodos, usuario} = useContext(FirebaseContext) 
    const router= useRouter()

    const CerrarSesion = () => {
        metodos.cerrarSesion()
        router.push("/")
    }
    return ( 
        <Ul menu={menu}>
            <li>
                <Link href="/">
                    <Ancor>Inicio</Ancor>
                </Link>
            </li>
            {
                !usuario && (
                    <li>
                        <Link href="/productosTodos">
                            <Ancor>Productos</Ancor>
                        </Link>
                    </li>
                )
            }
            {
                usuario && (
                    usuario.tipo === "empresa" ? (
                        <SubMenuEmpresa />
                    ) : (
                    <li>
                        <Link href="/productosTodos">
                            <Ancor>Productos</Ancor>
                        </Link>
                    </li>
                    )
                )
            }
            {
                !usuario && <SubMenuRegistro /> 
            }
            {
                usuario && (
                    <li>
                        <Link href="/cuenta">
                            <Ancor>Cuenta</Ancor>
                        </Link>
                    </li>
                )
            }
            {
                usuario ? (
                    <li>
                        <BtnAncor
                            onClick={CerrarSesion}
                        >Cerrar Sesion</BtnAncor>
                    </li>
                ) : (
                    <li>
                        <Link href="/login">
                            <BtnAncor login>Iniciar Sesión</BtnAncor>
                        </Link>
                    </li>
                )
            }
        </Ul>
     );
}
 
export default ListaMenu;