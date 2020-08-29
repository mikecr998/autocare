import Link from 'next/link'
import {useRouter} from 'next/router'
import {ContenedorGlobal, ContenedorGlobalGray, ContenedorGlobalGrayFixed, Contenedor, Lista, Elemento, ElementoEfecto, Logo, Ancor} from './styles'

const HeaderGlobal = ({sinFonfo, fixed}) => {
    const router = useRouter()

    const componente = (
        <Contenedor>
            <Logo src="logo.png" height="100px" onClick={()=> router.push("/")}/>            
            <Lista>
                <Elemento>
                    <Link href="/">
                        <Ancor>Inicio</Ancor>
                    </Link>
                </Elemento>
                <Elemento>
                    <Link href="/productosTodos">
                        <Ancor>Productos</Ancor>
                    </Link>
                </Elemento>
                <Elemento><Ancor>Registro</Ancor>
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
    )
    return ( 
        <>
            {sinFonfo ? (
                <ContenedorGlobal>
                    {componente}
                </ContenedorGlobal>
            ) : (
                fixed ? (
                    <ContenedorGlobalGrayFixed>
                    {componente}
                    </ContenedorGlobalGrayFixed>
                ) : (
                    <ContenedorGlobalGray>
                    {componente}
                    </ContenedorGlobalGray>
                )
            )}
        </>
     );
}
 
export default HeaderGlobal;