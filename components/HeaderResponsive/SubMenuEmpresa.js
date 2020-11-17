import Link from 'next/link'
import styled from 'styled-components'
import {useMediaQuery} from "react-responsive"

const Ancor = styled.a`
    cursor: pointer;
    font-size: 18px;
    margin: 0 20px 0 0;
    text-decoration: none;
    color: #d81428;
    display: inline-block;
    width: 100%;
    padding: 10px 0px;

    &:hover {
        color: #d81428;
    }
`;
const Li = styled.li`
    font-size: 22px;
    list-style: none;
    position: relative;
    margin: 0;
    cursor: pointer;

   ul {
       display: none;
       position: absolute;
       left: 0;
       padding: 0;
       margin: 0;
       background-color: white;
   }

    &:hover {
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
const SubMenuEmpresa = () => {
    const desktop= useMediaQuery({query: '(min-width:768px)'})
    return (
        <>
        { desktop  ? (
            <Li className="productos-empresa">Productos
                <ul>
                    <Elemento>
                        <Link href="/ver-productos" passHref>
                            <Ancor>Ver</Ancor>
                        </Link>
                    </Elemento>
                    <Elemento>
                        <Link href="/nuevo-producto" passHref>
                            <Ancor>Añadir</Ancor>
                        </Link>
                    </Elemento>
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