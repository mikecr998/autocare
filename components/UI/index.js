import styled from 'styled-components'

//Login y Registro
export const Formulario = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:80%;
    margin: 1rem auto 2rem auto;
    padding: .5rem;
    background-color: white;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 24px -3px rgba(0,0,0,0.43);
    -moz-box-shadow: 0px 0px 24px -3px rgba(0,0,0,0.43);
    box-shadow: 0px 0px 24px -3px rgba(0,0,0,0.43);
    
    @media (min-width:768px) {
       width:500px;
       margin: 0 auto 0 auto;
    }
`;

export const Campo = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;

    input, textarea{
        flex:1;
        margin-top: 1.2rem;
        padding: .5rem;
        border: 1px solid black;
        border-radius: 3px;
        font-family: 'Roboto', sans-serif;
    }  
    progress {
        margin-top: .5rem;
    } 
    @media (min-width:768px) {
        width: 60%;
    }
`;

export const Titulo = styled.h1`
    margin-top: 7rem;
    text-align: center;
    font-size:  1.5rem;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;

    @media(min-width:768px) {
        margin-top: 10rem;
    }
`;

export const BtnSubmit = styled.button`
    flex: 1;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    background-color: #e31d36;
    color: white;
    text-transform: uppercase;
    border: none;
    padding: .5rem;
    margin: 2rem 0;

    &:hover {
        cursor: pointer;
        background-color: #d63045;
    }
`;

export const Ancor = styled.a`
    font-family: 'Roboto', sans-serif;
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
    font-family: 'Roboto', sans-serif;
    color: red;
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
        border: 1px solid black;
        border-radius: 3px;
        font-family: 'Roboto', sans-serif;
    } 
`;

export const ContenedorCuenta = styled.div`
    width: 80%;
    margin: 0 auto;
    background-color: white;
    border-radius: 10px;
    padding: 1rem;
    display:grid;
    grid-template-rows: repeat(7, 1fr);
    margin-bottom: 2rem;

    @media (min-width:768px) {
        max-width: 900px;   
        grid-template-columns: repeat(2,50%);  
        grid-template-rows: repeat(4, 1fr);  
    }
`;

export const ContenedorCuenta2 = styled(ContenedorCuenta)`
    grid-template-rows: repeat(3, 1fr);

    @media (min-width:768px) {
        max-width: 900px;   
        grid-template-columns: repeat(3,1fr);  
        grid-template-rows: unset;  
    }
`;

export const Dato = styled.div`
    font-family: "Roboto", sans-serif;
    
    h3 {
        margin: 0;
        padding: 0;
        font-size: 1.1rem;
        font-weight: 700;
        text-align: center;
        color: gray;
    }
    p {
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
    border: none;
    border-radius: 10px;
    margin: 0;
    padding: .7rem 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1rem;
    background-color: #00bcd4;
    cursor: pointer;
    color: white;
    display: block;

    &:hover {
        background-color: #26c6da;
    }
    &:focus {
        outline: none;
    }
`;

//Productos

export const ContenedorGlobal = styled.div`
    width: 90%;
    margin: 20rem auto 2rem auto;    

    @media(min-width:768px) {
        width: 35%;
        margin: 10rem auto 2rem auto;
    }
`;
