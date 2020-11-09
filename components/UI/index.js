import styled from 'styled-components'

export const Formulario = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:80%;
    margin: 1rem auto 2rem auto;
    padding-top: 5px;
    padding-bottom: 10px;
    background-color: rgba(255,255,255,.4);
    backdrop-filter: blur(5px);
    /* -webkit-backdrop-filter: blur(5px); */

    @media (min-width:768px) {
       width:500px;
       margin: 0 auto;
    }
`;
export const FondoForm = styled.div`
    height: 100vh;
    background-image: ${props => props.cuenta ? 'url("background3.jpg")' : 'url("background2.jpg")' };
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 415px) { /* Movile */
        margin-top: -50px;
        padding-top: 10px;
        height: 120vh;
    }
`;
export const Campo = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    outline: none;

    input, textarea{
        flex:1;
        margin-top: 1.2rem;
        padding: 8px;
        border: none;
    }
    input[type="file"]{
        border: none;
    }
    input:focus{
        outline: none;
    }
    textarea:focus{
        outline: none;
    }
    progress {
        margin-top: .5rem;
    }
    @media (min-width:768px) {
        width: 60%;
    }
`;

export const Titulo = styled.h1`
    margin-top: 150px;
    text-align: center;
    font-size:  1.5rem;
    text-transform: uppercase;
    color: ${props => props.cuenta ? 'white' : '#ffd800' };

    @media(min-width:768px) { /* Desktop */
        margin-top: 30px;
    }
`;

export const BtnSubmit = styled.button`
    flex: 1;
    font-size: 1.2rem;
    font-weight: 700;
    background-color: #d81428;
    color: white;
    text-transform: uppercase;
    border: 2px #d81428 solid;
    padding: .5rem;
    margin: 20px 0px 10px 0px;
    transition: all .5s;
    cursor: pointer;

    :hover {
        background-color: #ffd800;
        color: black;
        border: 2px black solid;
    }
    :focus {
        outline: none;
    }
`;

export const Ancor = styled.a`
    text-align: center;
    margin: 0 auto;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const Error = styled.p`
    padding: 0;
    margin: .5rem 0 0 0;
    font-size: .8rem;
    color: red;
    font-weight: 700;
`;

export const Contenedor = styled.div`
    width: 300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 50%);

`;

export const CampoNumero = styled.div`
    display: grid;
    margin-top: 1.2rem;

    input {
        margin: 0 auto;
        width: 130px;
        align-self: center;
        padding: .5rem;
        border: none;
    }
    input:focus{
        outline: none;
    }
`;

export const ContenedorCuenta = styled.div`
    width: 80%;
    margin: 0 auto;
    background-color: white;
    padding: 1rem;
    display:grid;
    grid-template-rows: repeat(7, 1fr);
    margin-bottom: 2rem;
    background-color: rgba(255,255,255,.4);
    backdrop-filter: blur(5px);

    @media (min-width:768px) {
        max-width: 900px;
        grid-template-columns: repeat(2,50%);
        grid-template-rows: repeat(4, 1fr);
    }
`;

export const ContenedorCuenta2 = styled(ContenedorCuenta)`
    grid-template-rows: repeat(3, 1fr);
    background-color: rgba(255,255,255,.4);
    backdrop-filter: blur(5px);

    @media (min-width:768px) {
        max-width: 900px;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: unset;
    }
`;

export const Dato = styled.div`
    h3 {
        margin: 0;
        padding: 0;
        font-size: 1.1rem;
        font-weight: 700;
        text-align: center;
        color: #2e2e2e;
    }
    p {
        color: white;
        margin: 0 0 1rem 0;
        padding: 0;
        font-size: 1rem;
        font-weight: 700;
        text-align: center;
    }
`;

export const ImagenUser = styled.div`
    text-align: center;
    margin: 1rem auto;

    img {
        height: 100px;
    }
`;
export const ContenedorBtn = styled.div`
    display: grid;
    margin:0 auto;
    width: 100%;
    height: 50%;
    @media (min-width: 768px) {
        width: 80%;
        grid-column: 1/3;
    }
`;

export const ContenedorBtn2 = styled(ContenedorBtn)`
    @media (min-width: 768px) {
        width: 80%;
        grid-column: 1/4;
    }
`;

export const BtnActualizar = styled.button`
    margin: 0;
    padding: .7rem 1rem;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1rem;
    background-color: #d81428;
    color: white;
    cursor: pointer;
    border: 2px #d81428 solid;
    display: block;
    transition: all .5s;

    :hover {
        background-color: #ffd800;
        color: black;
        border: 2px black solid;
    }
    &:focus {
        outline: none;
    }
`;

export const ContenedorGlobal = styled.div`
    width: 90%;
    margin: 20rem auto 2rem auto;

    @media(min-width:768px) {
        width: 35%;
        margin: 10rem auto 2rem auto;
    }
`;

export const BotonPrimario = styled.a`
    text-decoration: none;
    padding: 15px 30px;
    color: white;
    background-color: #d81428;
    margin: 0;
    border: 3px #d81428 solid;
    transition: all .5s;
    cursor: pointer;
    font-weight: 700;
    font-size: 20px;
    display: inline-block;

    :hover {
        background-color: rgba(255,255,255,.3);
        color: black;
    }

    @media screen and (max-width: 415px) {
        margin: 0 auto;
        max-width:250px;
        padding: 10px 20px;
        font-size: 16px;
        font-size: 16px;
    }
`