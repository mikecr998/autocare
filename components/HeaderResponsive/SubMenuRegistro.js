//Dependencias
import Link from 'next/link'
import styled from 'styled-components'
import {useMediaQuery} from "react-responsive"

const Ancor = styled.a`
    cursor: pointer;
    font-size: 18px;
    margin: 0 20px 0 0;
    text-decoration: none;
    color: #d81428;
    transition: all .5s;

    &:hover {
        color: #d81428;
    }
`;

const Lista = styled.li`
    font-size: 22px;
    list-style: none;
    position: relative;
    margin: 0px;
    cursor: pointer;
    color: #d81428;

   ul {
       display: none;
       position: absolute;
       left: 0;
       padding: 0;
       margin: 0px;
       background-color: white;
   }

    :hover {
        ul {
            display: block;
        }
    }
`;

const Elemento = styled.li`
    list-style: none;
    margin-top: -5px;
    width: 100%;
`;

const LiMovile = styled.li`
    font-size: 24px;
    cursor: pointer;

    a {
        text-decoration: none;
        color: #d81428;
    }
`;

const SubMenuRegistro = () => {
    const desktop= useMediaQuery({query: '(min-width:768px)'})

    return (
        <>
        { desktop ? (
                <Lista className="registro">Registro
                    <ul>
                        <Elemento>
                            <Link href="/registro-usuario" passHref>
                                <Ancor>Usuario</Ancor>
                            </Link>
                        </Elemento>
                        <Elemento>
                            <Link href="/registro-empresa" passHref>
                                <Ancor>Empresa</Ancor>
                            </Link>
                        </Elemento>
                    </ul>
                </Lista>
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
            )
        }
        </>
     );
}
 
export default SubMenuRegistro;