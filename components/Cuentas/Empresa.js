import {ContenedorCuenta, Dato, ContenedorBtn, BtnActualizar} from 'components/UI'

const Empresa = ({user, setModal}) => {
    return (
        <>
        <ContenedorCuenta>
            <Dato>
                <h3>Email</h3>
                <p>{user.email}</p>
            </Dato>
            <Dato>
                <h3>Nombre</h3>
                <p>{user.nombre}</p>
            </Dato>
            <Dato>
                <h3>Telefono</h3>
                <p>{user.telefono}</p>
            </Dato>
            <Dato>
                <h3>Dirección</h3>
                <p>{user.direccion}</p>
            </Dato>
            <Dato>
                <h3>RFC</h3>
                <p>{user.rfc}</p>
            </Dato>
            <Dato>
                <h3>URL</h3>
                <p>{user.url}</p>
            </Dato>
            <ContenedorBtn>
                <BtnActualizar onClick={setModal}>
                    Actualizar
                </BtnActualizar>
            </ContenedorBtn>
        </ContenedorCuenta>
        </>
     );
}

export default Empresa;