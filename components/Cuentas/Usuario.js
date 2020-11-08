import {ContenedorCuenta2, Dato, ContenedorBtn2, BtnActualizar} from 'components/UI'

const Usuario = ({user, setModal}) => {
    return (
        <ContenedorCuenta2>
            <Dato>
                <h3>Email</h3>
                <p>{user.email}</p>
            </Dato>
            <Dato>
                <h3>Nombres</h3>
                <p>{user.nombres}</p>
            </Dato>
            <Dato>
                <h3>Apellidos</h3>
                <p>{user.apellidos}</p>
            </Dato>
            <ContenedorBtn2>
                <BtnActualizar onClick={()=> setModal(true)}>
                    Actualizar
                </BtnActualizar>
            </ContenedorBtn2>
        </ContenedorCuenta2>
     );
}

export default Usuario;