//Dependencias
import Link from 'next/link'
import styled from 'styled-components'
import {useEffect, useState, useContext} from "react"
//Context
import {FirebaseContext} from 'firebase/context'
//Componentes
import SubMenu from "./SubMenu"

const Ancor = styled.a`
    cursor: pointer; /* Movile */
    font-size: 1.5rem;

   @media(min-width: 768px) { /* Desktop */
    font-size: 22px;
    
    &:hover {
        color: #DEB887;
    }
   } 
`;

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
    return ( 
        <Ul menu={menu}>
            <li>
                <Link href="/">
                    <Ancor>Inicio</Ancor>
                </Link>
            </li>
            <li>
                <Link href="/productosTodos">
                    <Ancor>Productos</Ancor>
                </Link>
            </li>
            <SubMenu />
            <li>
                <Link href="/login">
                    <Ancor>Iniciar Sesión</Ancor>
                </Link>
            </li>
        </Ul>
     );
}
 
export default ListaMenu;