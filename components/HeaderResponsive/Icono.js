import {useState} from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import ListaMenu from "./ListaMenu"

const Icono = styled.div`
    z-index: 9999;
    display: "block";

    @media (min-width:768px) {
        display: none;
    }
`
const IconoBurguer = () => {
    const [menu, SetMenu]= useState(false)
    function ToggleMenu () {
        SetMenu(value => !value)
    }
    return (
        <>
            <Icono>
                <FontAwesomeIcon
                    icon={ menu ? faTimes : faBars }
                    height="30"
                    color="#d81428"
                    onClick={()=> ToggleMenu()}
                />
            </Icono>
            {typeof window !== 'undefined' ? <ListaMenu menu={menu} ToggleMenu={ToggleMenu}/> : null}
        </>
    );
}

export default IconoBurguer;
