//Componentes
import {Contenedor, Input} from './styles'

const Buscador = ({setFiltro}) => {
    return (
        <Contenedor>
            <Input
                placeholder="Buscar por nombre o marca"
                onChange={e => setFiltro(e.target.value)}
            />
        </Contenedor>
     );
}

export default Buscador;