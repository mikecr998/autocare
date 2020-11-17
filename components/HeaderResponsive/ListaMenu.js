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
    color: #d81428;
    transition: all .5s;

   @media(min-width: 768px) { /* Desktop */
    font-size: 22px;
    margin: 0;
    padding: 10px 20px;
   }
`;

const BtnAncor = styled.a`
    font-size: 22px;
    cursor: pointer;
    /* background-color: ${props => props.login ? "black" : "#d5152a"}; */
    background-color: #d5152a;
    padding: .5rem;
    text-decoration: none;
    color: white;
    transition: all .5s;
    border: 2px #d5152a solid;

    :hover {
        background-color: #ffd800;
        color: black;
        border: 2px black solid;
    }
`
const Ul = styled.ul`
    list-style: none; /* Desktop */
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    z-index: 999;

    li {
        color: #d81428;
        font-weight: 700;
        margin: 0 3rem 0 0;
        border: 3px transparent solid;
        transition: all .5s;
        /* padding: 10px 0px; */
    }
    li:hover {
        border-bottom: 3px #d81428 solid;
    }

    .cerrar-sesion:hover {
        border-bottom: transparent;
    }
    .registro:hover {
        border-bottom: transparent;
    }
    .productos-empresa:hover {
        border-bottom: transparent;
    }

    @media (max-width: 768px) { /* Movile and Tablet*/
        flex-direction: column;
        background: #2e2e2e;
        position: fixed;
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

const ListaMenu = ({menu, ToggleMenu}) => {
    const {metodos, usuario} = useContext(FirebaseContext)
    const router= useRouter()

    const CerrarSesion = () => {
        ToggleMenu()
        metodos.cerrarSesion()
        router.push("/")
    }
    return (
        <Ul menu={menu}>
            <li>
                <Link href="/" passHref>
                    <Ancor>Inicio</Ancor>
                </Link>
            </li>
            {
                !usuario && (
                    <li>
                        <Link href="/productosTodos"  passHref>
                            <Ancor>Productos</Ancor>
                        </Link>
                    </li>
                )
            }
            {
                typeof window !== "undefined" ? (
                    usuario && (
                        usuario.tipo === "empresa" ? (
                            <SubMenuEmpresa />
                        ) : (
                        <li>
                            <Link href="/productosTodos" passHref>
                                <Ancor>Productos</Ancor>
                            </Link>
                        </li>
                        )
                    )
                ) : null

            }
            {
                typeof window !== "undefined" ? ( !usuario && <SubMenuRegistro /> ) : null
            }
            {
                usuario && (
                    <li>
                        <Link href="/cuenta" passHref>
                            <Ancor>Cuenta</Ancor>
                        </Link>
                    </li>
                )
            }
            {
                usuario ? (
                    <li className="cerrar-sesion">
                        <BtnAncor
                            onClick={CerrarSesion}
                        >Cerrar Sesion</BtnAncor>
                    </li>
                ) : null
            }
        </Ul>
     );
}

export default ListaMenu;