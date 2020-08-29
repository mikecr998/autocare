import styled from 'styled-components'

export const Titulo = styled.h2`
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    margin-left: 2.5rem;

    @media (min-width:768px) {
        margin-left: 11rem;
        font-size: 2rem;
    }
`

export const Contenedor = styled.div`
    width: 300px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto;
    justify-content: center;

    @media (min-width:768px) {
        grid-template-columns: repeat(3, 1fr);
        width: 1200px;
    }
`