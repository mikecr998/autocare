import styled from 'styled-components'

export const Titulo = styled.h2`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;

    @media (min-width:768px) {
        font-size: 28px;
        margin-bottom: 20px;
    }
`

export const Contenedor = styled.section`
    max-width: 1200px;
    margin: 40px auto;
    text-align: left;
    padding: 0px;

    @media (max-width:415px) {
        text-align: center;
        width: 95%;
    }
`;

export const ContenedorArticles = styled.div`
    width: 100%;

    @media (min-width:768px) {
        display: flex;
        justify-content: space-between;
        width: 1200px;
    }
`

export const Banner = styled.div`
    height: 300px;
    position: relative;

    figure {
        background-image: url("background1.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
        filter: blur(3px);
    }
    h2 {
        font-size: 36px;
        text-transform: uppercase;
        position:absolute;
        top: 50%;
        left: 30%;
        color: #ffd800;
        transform: translate(-20%,-50%);
    }

    @media (max-width:415px) {
        h2 {
        font-size: 26px;
        line-height: 30px;
        text-align: center;
    }
    }
`;