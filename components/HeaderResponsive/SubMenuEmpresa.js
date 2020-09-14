import Link from 'next/link'
import styled from 'styled-components'
import {useMediaQuery} from "react-responsive"
import {useContext} from "react"
//Context
import {FirebaseContext} from 'firebase/context'

const Ancor = styled.a`
    cursor: pointer;
    font-size: 18px;
    margin: 0 20px 0 0;

    &:hover {
        color: #DEB887;
    } 
`;

const Li = styled.li`
    font-family: "Roboto", sans-serif;
    font-size: 22px;
    list-style: none;
    position: relative;
    margin: 0 3rem 0 0;
    cursor: pointer;

   ul {
       display: none;
       position: absolute;
       left: 0;
       padding: 0;
       margin: 0;
   }

    &:hover {
        ul {
            display: block;
        }
    }
`;

const ElementoEfecto = styled.li`
    list-style: none;    
    margin-top: -5px;
    
    a {
        transition: margin-left .3s ease-in-out;
    }

    &:hover a {        
        margin-left: 10px;
    }
`;

const LiMovile = styled.li`
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    cursor: pointer;

    a {
        text-decoration: none;
        color: white
    }
`;

const SubMenuEmpresa = () => {
    const desktop= useMediaQuery({query: '(min-width:768px)'})
    const { usuario} = useContext(FirebaseContext)
    return ( 
        <>
        { desktop  ? (
            <Li>Productos
                <ul>
                    <ElementoEfecto>
                        <Link href="/ver-productos">
                            <Ancor>Ver</Ancor>
                        </Link>
                    </ElementoEfecto>
                    <ElementoEfecto>
                        <Link href="/nuevo-producto">
                            <Ancor>Añadir</Ancor>
                        </Link>
                    </ElementoEfecto>
                </ul>
            </Li>
        ) : (
            <>
                <LiMovile>
                    <Link href="/ver-productos">
                        <a>Ver Productos</a>
                    </Link>
                </LiMovile>
                <LiMovile>
                    <Link href="/nuevo-producto">
                        <a>Añadir producto</a>
                    </Link>
                </LiMovile>
            </>
        )}
        </>
     );
}
 
export default SubMenuEmpresa;