import {useState} from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTimes } from "@fortawesome/free-solid-svg-icons";
import ListaMenu from "./ListaMenu"

const Icono = styled.div` 
    z-index: 20; 
    display: "block";

    @media (min-width:768px) {
        display: none;
    }
`
const Icon = () => {
    const [menu, SetMenu]= useState(false)
    return ( 
        <>
            <Icono>
                <FontAwesomeIcon 
                    icon={ menu ? faTimes : faList }
                    height="40"
                    color="white"
                    onClick={()=> SetMenu(value => !value)}
                />
            </Icono>
            <ListaMenu menu={menu}/>
        </>
    );
}
 
export default Icon;
