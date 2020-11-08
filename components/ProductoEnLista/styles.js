import styled from 'styled-components'

export const Contenedor = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 5px;
    transition: all .3s;
    border: 3px #d81428 solid;
    width: 370px;

    &:hover {
        transform: scale(1.02);
        border: 3px black solid;
    }

    @media (max-width:415px) {
        width: 100%;
        margin-bottom: 20px;
    }
`;

export const Nombre = styled.h2`
    font-size: 16px;
    text-align: center;

    @media(min-width:768px) {
        font-size: 18px;
        margin-bottom: 15px;
    }
`;

export const ContenedorImagen = styled.figure`
    width: 100%;
    margin:0 auto;
`;

export const ContenedorCuadricula = styled.div`
    max-width: 1200px;
    width:95%;
    margin: 6rem auto;
    display: grid;
    grid-template-rows: auto;

    @media (min-width:768px) {
        margin: 20px auto 20px auto;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 30px;

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
    margin-bottom: 20px;

    p{
        color: black;
        font-size: 16px;
    }
    span {
        font-weight: 700;
    }

    @media screen and (min-width:768px) {
        p{
            margin-bottom: 15px;
        }
    }
`;

export const ContendorBotones = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Boton = styled.a`
    text-transform: uppercase;
    display: inline-block;
    margin:0;
    color: white;
    background-color: #d81428;
    padding: 10px 60px;
    font-weight: 700;
    cursor: pointer;
    transition: all .5s;
    border: 2px #d81428 solid;

    :hover {
        background-color: #ffd800;
        color: black;
        border: 2px black solid;
    }

`;

export const BotonEditar = styled.button`
    background-color: #d81428;
    border: 2px #d81428 solid;
    width: 45%;
    color: white;
    font-weight: 700;
    transition: all .5s ease;
    padding: 15px 10px;
    cursor: pointer;

    &:hover {
        background-color: white;
        border: 2px black solid;
        color: #d81428;
    }
`

export const BotonEliminar = styled.button`
    background-color: #ffd800;
    width: 45%;
    font-weight: 700;
    transition: all .5s ease;
    padding: 15px 10px;
    cursor: pointer;
    color: black;
        border: 2px black solid;

    &:hover {
        background-color: white;
        color: #d81428;
    }
`