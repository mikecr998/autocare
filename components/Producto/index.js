//Dependencias
import { useContext } from "react";
import {useRouter} from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
//Context
import { FirebaseContext } from "firebase/context";
//Componentes
import {
  Contenedor,
  Titulo,
  ContenedorImagen,
  Imagen,
  ContenedorInfo,
  ContenedorFotter,
  IconoLike,
  Piezas,
  ContenedorAbajo,
  ContenedorArriba,
  BtnComprar,
} from "./styles";

const Prodcuto = ({ producto, toggleLike, setModal}) => {
  const { usuario } = useContext(FirebaseContext);

  const router = useRouter()

  const {
    nombre,
    marca,
    piezas,
    descripcion,
    precio,
    usuarioNombre,
    fotoURL,
    likes,
  } = producto;

  const Comprar = () => {
    if(!usuario) {
      router.push("/login")
      return
    }
    setModal(value => !value)
  }
  return (
    <>
      <Titulo>{nombre}</Titulo>
      <Contenedor>
        <ContenedorImagen>
          <Imagen src={fotoURL} />
          <ContenedorFotter>
            <IconoLike onClick={toggleLike}>
              {usuario &&
                (
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    height="20"
                    color={producto.likes.includes(usuario.id) ? "#2d88ff" : "gray" }
                  />
                )}
              <p>{likes.length} Likes</p>
            </IconoLike>
            <Piezas>{piezas} piezas</Piezas>
          </ContenedorFotter>
        </ContenedorImagen>

        <ContenedorInfo>
          
          <ContenedorArriba>
            <p>Marca: <span>{marca}</span></p>            
            <p className="precio">$ {precio}</p>
          </ContenedorArriba>
          <ContenedorAbajo>
            <p>Descripción:</p>
            <span>{descripcion}</span>
          </ContenedorAbajo>          
          <ContenedorAbajo>
            <p>Ofrecido por:</p>
            <span>{usuarioNombre}</span>
          </ContenedorAbajo>
          <BtnComprar
            onClick={Comprar}
          >Comprar</BtnComprar>
        </ContenedorInfo>
      </Contenedor>
    </>
  );
};

export default Prodcuto;
