import styled from 'styled-components'

export const Contenedor = styled.div`
    width: 300px;
    margin: -4rem auto;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 1000px;
        flex-direction: row;
        justify-content: space-between;
        margin: -6rem auto;
    }
`
export const Titulo = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: black;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    margin: 7rem;

    @media (min-width:768px) {
        font-size: 1.5rem;
        margin: 10rem;
    }
`
export const ContenedorImagen = styled.div`
    width: 100%;

    @media (min-width:768px) {
        width: 50%;
    }
`
export const Imagen = styled.img`
    width: 100%;
    margin:auto;
    display: block;

    @media (min-width: 768px) {
        width: 80%;
    }
`

export const ContenedorInfo = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width:768px) {
        flex: 1;
    }
`

export const ContenedorFotter = styled.div`
    margin : 1rem 0 1.5rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const IconoLike = styled.div`
    color: ${props => props.like ? "#2d88ff" : "gray" };
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: .8rem;
        color: black;
        font-family: 'Roboto', sans-serif;
        padding: 0;
        margin: .3rem 0 0 0;
        font-weight: 700;
    }
`
export const Piezas = styled.p`
    font-size: 1rem;
    color: black;
    font-weight: 700;
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
`
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
        color: #17c121;
        font-size: 2rem;
    }

    @media (min-width:768px) {
        font-size: 1.2rem;

        p{        
            margin: 1rem 0 .5rem 0;       
        }
    }
`
export const BtnComprar = styled.button`
    text-transform: uppercase;
    border:none;
    color: white;
    padding: .5rem 1rem;
    margin: 1rem 0;
    border-radius: 10px;
    width: 100%;
    background-color: #c11f4e;
    font-weight: 700;
    -webkit-box-shadow: 0px 0px 22px -7px rgba(0,0,0,0.67);
    -moz-box-shadow: 0px 0px 22px -7px rgba(0,0,0,0.67);
    box-shadow: 0px 0px 22px -7px rgba(0,0,0,0.67);
    cursor: pointer;

    &:hover {
        background-color: #C70039;
    }

    @media (min-width:768px) {
        width: 70%;
        margin: 2rem auto 0 auto;
    }
`


