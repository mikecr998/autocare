//Dependencias
import { useContext, useState, useEffect } from "react";
//Context
import { FirebaseContext } from "firebase/context";
//Componentes
import HeaderGlobal from "components/Header/HeaderGlobal";
import HeaderUsuario from "components/Header/HeaderUsuario";
import { ContenedorCuadricula } from "components/ProductoEnLista/styles";
import { Titulo } from "components/UI";
import Producto from "components/ProductoEnLista";
import Spinner from "components/Spinner";
import Buscador from "components/Buscador";

import Firebase from 'firebase/metodos'

const ProductosTodos = ({products}) => {
  const { usuario } = useContext(FirebaseContext);

  const [productos, ] = useState(products);
  const [filtro, setFiltro] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  // useEffect(() => {
  //   metodos.getProductos().then((res) => {
  //     setProductos(res), setProductosFiltrados(res);
  //   });
  // }, []);

  useEffect(() => {
    if(productos) {
      const products = productos.filter(
        (producto) =>
          producto.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
          producto.marca.toLowerCase().includes(filtro.toLowerCase())
      );
      setProductosFiltrados(products);
    }
  }, [filtro]);

  return (
    <>
      {usuario ? <HeaderUsuario fixed /> : <HeaderGlobal fixed />}
      
      <ContenedorCuadricula>
      <div className="centrado">
        <Buscador setFiltro={setFiltro} />  
      </div>
        {productos === null ? (
          <div className="centrado">
            <Spinner />
          </div>
        ) : productosFiltrados.length === 0 ? (
          <div className="centrado">
            <Titulo>No hay resultados</Titulo>
          </div>
        ) : (
          productosFiltrados.map((producto) => (
            <Producto key={producto.id} producto={producto}/>
          ))
        )}
      </ContenedorCuadricula>
    </>
  );
};

export default ProductosTodos;

export async function getServerSideProps(context) {
  const products = await Firebase.getProductos()
  return {
    props: {products}
  }
}