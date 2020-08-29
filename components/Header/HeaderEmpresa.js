//Dependencias
import Link from 'next/link'
import {useContext} from 'react'
import {useRouter} from 'next/router'
//Context
import {FirebaseContext} from 'firebase/context'
//Componentes
import {ContenedorGlobal, ContenedorGlobalGray, ContenedorGlobalGrayFixed, Contenedor, Lista, Elemento, ElementoEfecto, Logo, Ancor} from './styles'

const HeaderGlobal = ({sinFondo, fixed}) => {
    const {metodos} = useContext(FirebaseContext)
    const router = useRouter()

    const CerrarSesion = () => {
        metodos.cerrarSesion()
        router.push("/")
    }

    const componente = (
        <Contenedor>
            <Link href="/">
                <Logo src="logo.png" height="100px" />
            </Link>
            <Lista>
                <Elemento>
                    <Link href="/">
                        <Ancor>Inicio</Ancor>
                    </Link>
                </Elemento>
                <Elemento><Ancor>Productos</Ancor>
                    <ul>
                        <ElementoEfecto>
                            <Link href="/ver-productos">
                                <Ancor>Ver Productos</Ancor>
                            </Link>
                        </ElementoEfecto>
                        <ElementoEfecto>
                            <Link href="/nuevo-producto">
                                <Ancor>Añadir producto</Ancor>
                            </Link>
                        </ElementoEfecto>
                    </ul>
                </Elemento>
                <Elemento>
                    <Link href="/cuenta">
                        <Ancor>Cuenta</Ancor>
                    </Link>
                </Elemento>
                <Elemento>                    
                    <Link href="/">
                        <Ancor 
                            logout
                            onClick={CerrarSesion}
                        >Cerrar Sesión</Ancor>
                    </Link>
                </Elemento>
            </Lista>
        </Contenedor>
    );
    return ( 
        <>
        { sinFondo ? (
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