//Dependencias
//Context
import { FirebaseContext } from "firebase/context";
import { useContext, useEffect, useState } from "react";
//Componentes
import Header from "components/HeaderResponsive";
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

  //Cuando carga el componente
  useEffect(()=> {
    if (usuario) {
      metodos.getProductosEmpresa(usuario.email).then((productos) => {
        setProductos(productos), setProductosFiltrados(productos); 
      });
    }
  }, [usuario])

  //Cuando se ejecuta la busqueda
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

  //Cuando se actualiza algun producto
  useEffect(() => {
    if (productos) {
      setProductosFiltrados(productos);
    }
  }, [productos]);

  return (
    <>
      <Header />
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
            <Producto key={producto.id} producto={producto} productos={productos} setProductos={setProductos}/>
          ))
        )}
      </ContenedorCuadricula>
    </>
  );
};

export default ProductosEmpresa;
