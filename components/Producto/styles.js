import styled from 'styled-components'

export const Contenedor = styled.div`
    width: 95%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 1000px;
        flex-direction: row;
        justify-content: space-between;
        margin: 0px auto 50px auto;
    }
`;
export const Titulo = styled.h2`
    font-size: 1rem;
    color: black;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    margin-top: 100px;
    /* margin: 7rem; */

    @media (min-width:768px) {
        font-size: 1.5rem;
        margin-top: 20px;
        margin-bottom: 40px;
    }
`;
export const ContenedorImagen = styled.figure`
    width: 100%;
    border-right: 4px #ffd800 solid;
    border-top: 4px #ffd800 solid;
    border-left: 4px #ffd800 solid;
    padding: 10px;

    @media (min-width:768px) {
        width: 50%;
        background-color: #666;
        padding: 20px;
        border-bottom: 4px #ffd800 solid;
        border-top: 4px #ffd800 solid;
        border-left: 4px #ffd800 solid;
        border-right: 0px;
    }
`;
export const Imagen = styled.img`
    width: 100%;
    margin:auto;
    display: block;

    @media (min-width: 768px) {
        width: 80%;
    }
`;
export const ContenedorInfo = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ccc;
    padding: 20px;
    border-bottom: 4px #ffd800 solid;
    border-left: 4px #ffd800 solid;
    border-right: 4px #ffd800 solid;

    @media (min-width:768px) {
        flex: 1;
        padding: 20px;
        border-bottom: 4px #ffd800 solid;
        border-top: 4px #ffd800 solid;
        border-right: 4px #ffd800 solid;
        border-left: 0px;
    }
`;
export const ContenedorFotter = styled.div`
    margin : 1rem 0 1.5rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    p {
        font-size: 14px;
        color: black;
        padding: 0;
        margin: .3rem 0 0 0;
        font-weight: 700;
    }
`;
export const IconoLike = styled.div`
    color: ${props => props.like ? "#2d88ff" : "gray" };
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContenedorAbajo = styled.div`
    color: black;
    font-size: 1rem;
    margin-bottom: 1rem;
    p{
        padding: 0;
        margin: 0 0 .5rem 0;
        font-weight: 700;
    }
    span {
        color: #46494a;
    }
    @media (min-width:768px) {
        font-size: 1.2rem;

        p{
            margin: 1rem 0 .5rem 0;
        }
    }
`;
export const ContenedorArriba = styled.div`
    color: black;
    font-size: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        padding: 0;
        margin: 0 0 .5rem 0;
        font-weight: 700;
    }
    span {
        font-weight: 400;
        color: #46494a;
    }
    .precio {
        color: #d81428;
        font-size: 2rem;
    }

    @media (min-width:768px) {
        font-size: 1.2rem;

        p{
            margin: 1rem 0 .5rem 0;
        }
    }
`;
export const BtnComprar = styled.button`
    text-transform: uppercase;
    border:none;
    color: white;
    padding: 10px 10px;
    margin: 1rem 0;
    background-color: #d81428;
    font-weight: 700;
    cursor: pointer;
    border: 2px #d81428 solid;
    transition: all .5s;

    :hover {
        background-color: #ffd800;
        color: black;
        border: 2px black solid;
    }

    @media (min-width:768px) {
        width: 70%;
        margin: 2rem auto 0 auto;
        padding: 15px 10px;
    }
`;


