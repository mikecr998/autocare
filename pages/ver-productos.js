//Dependencias
//Context
import { FirebaseContext } from "firebase/context";
import { useContext, useEffect, useState } from "react";
//Componentes
import Header from "components/Header/HeaderEmpresa";
import { Titulo } from "components/UI";
import { ContenedorCuadricula } from "components/ProductoEnLista/styles";
import Producto from "components/ProductosEmpresa";
import Spinner from "components/Spinner";
import Buscador from "components/Buscador";

const ProductosEmpresa = () => {
  const { metodos, usuario } = useContext(FirebaseContext);

  const [productos, setProductos] = useState(null);
  const [filtro, setFiltro] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [cambio, setCambio] = useState(false)

  useEffect(() => {
    if (productos) {
      const products = productos.filter(
        (producto) =>
          producto.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
          producto.marca.toLowerCase().includes(filtro.toLowerCase())
      );
      setProductosFiltrados(products);
    }
  }, [filtro]);

  useEffect(()=> {
    if (usuario) {
      metodos.getProductosEmpresa(usuario.email).then((productos) => {
        setProductos(productos), setProductosFiltrados(productos);
      });
    }
  }, [cambio])

  useEffect(()=> {
    if (usuario) {
      metodos.getProductosEmpresa(usuario.email).then((productos) => {
        setProductos(productos), setProductosFiltrados(productos); 
      });
    }
  }, [usuario])

  return (
    <>
      <Header fixed />
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
            <Producto key={producto.id} producto={producto} setCambio={setCambio}/>
          ))
        )}
      </ContenedorCuadricula>
    </>
  );
};

export default ProductosEmpresa;
