import Link from 'next/link'
import styled from 'styled-components'
import {useMediaQuery} from "react-responsive"

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
        margin-left: 20px;
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

const SubMenu = () => {
    const desktop= useMediaQuery({query: '(min-width:768px)'})

    return ( 
        <>
        { desktop ? (
            <Li>Registro
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
            </Li>
        ) : (
            <>
                <LiMovile>
                    <Link href="/registro-empresa">
                        <a>Registrar Empresa</a>
                    </Link>
                </LiMovile>
                <LiMovile>
                    <Link href="/registro-usuario">
                        <a>Registrar Usuario</a>
                    </Link>
                </LiMovile>
            </>
        )}
        </>
     );
}
 
export default SubMenu;