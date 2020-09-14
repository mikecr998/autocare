import styled from 'styled-components'

export const Contenedor = styled.div`
    margin: .5rem 1rem;
    font-family: 'Roboto', sans-serif;
    background-color: #C0B5A8;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    align-items: center;
    padding: 1rem 0rem;
`;

export const Nombre = styled.h2`
    font-size: 1rem;
    text-align: center;

    @media(min-width:768px) {
        font-size: 1.5rem;
    }
`;

export const ContenedorImagen = styled.div`
    width: 100%;
    margin:0 auto;
`;

export const ContenedorCuadricula = styled.div`
    width: 95%;
    margin: 6rem auto 0;
    display: grid;
    grid-template-rows: auto;
    
    @media (min-width:768px) {
        margin: 10rem auto;
        grid-template-columns: repeat(3, 1fr);
        gap: .5rem;     

        .centrado {
            grid-column: 1/4;
        }  
    }
`
export const Imagen = styled.img`
    width: 200px;
    height:200px;
    margin:auto;
    display: block;
`;

export const FotterProducto = styled.div`
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        color: black;
    }
    span {
        font-weight: 700;
    }

    @media(min-width:768px) {
        font-size: 1.3rem;
    }
`;

export const ContendorBotones = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Boton = styled.button`
    text-transform: uppercase;
    border: none;
    padding: 0;
    margin:0;
    color: white;
    background-color:   #e75293 ;
    padding: .5rem 1rem;
    font-weight: 700;
    width: 300px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 22px -7px rgba(0,0,0,0.67);
    -moz-box-shadow: 0px 0px 22px -7px rgba(0,0,0,0.67);
    box-shadow: 0px 0px 22px -7px rgba(0,0,0,0.67);
    cursor: pointer;

    &:hover {
        background-color: #e86aa2;
    }
`;

export const BotonEditar = styled(Boton)`
    background-color: #18abda;
    width: 45%;

    &:hover {
        background-color: #1797c1;
    }
`

export const BotonEliminar = styled(Boton)`
    background-color: #e30707;
    width: 45%;

    &:hover {
        background-color: #da0606;
    }
`


//Estilos de "ver-productos"