import styled from 'styled-components'

export const ContenedorGlobal = styled.div`
    width: 100%;
`;

export const ContenedorGlobalGray = styled.div`
    width: 100%;
    background-color: #696969;
`;

export const ContenedorGlobalGrayFixed = styled.div`
    width: 100%;
    background-color: #696969;
    position: fixed;
    top: 0;
`;

export const Contenedor = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .5rem 0;

    @media(min-width:768px) {
        width: 1200px;
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const Logo = styled.img`
    height: 50px;
    border-radius: 9999px;
    cursor: pointer;
    @media(min-width: 768px) {
        height: 100px;
        margin: 10px 0 0 20px;        
        
    }
`;

export const Lista = styled.ul`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        list-style:none;
        padding: 0;
        margin: 1rem auto;        
        color: white;
        font-weight: 700;
        font-family: sans-serif; 

    @media(min-width:768px) {
        flex-direction: row;
        margin:0;
        justify-content: space-around;
    }
`;

export const Ancor = styled.a`
    font-size: 1rem;
    cursor: pointer;  
    background-color: ${props => props.logout ? '#d32f2f' : ''}; 
    border-radius: ${props => props.logout ? '10px' : ''};
    padding: ${props => props.logout ? '.6rem' : ''};  
   @media(min-width: 768px) {
    font-size: 1.4rem;
    margin: 0 20px 0 0;

    &:hover {
        color: ${props => props.logout ? '#fff' : '#DEB887'};
        background-color: ${props => props.logout ? '#e53935 ' : ''};
    }
   } 

`;

export const Elemento = styled.li`
    margin-bottom: 1rem;
    cursor: pointer;
    text-align: center;
    ul {
        margin-top: .5rem;
        padding:0;
        text-align:center;
        text-decoration: none;
        list-style:none;
    }
   @media(min-width:768px) {
    margin: 0 20px 0 0;
    padding: 0;
    position: relative;
    text-align: left;

    &:hover {
        color: #DEB887;

        ul {
             display: block;
         }
    } 

     ul {
        display: flex;
        flex-direction: column;
        display: none;
        position: absolute;
        text-align: unset;
        margin:0 0 1rem 0;
    } 
   }
`;

export const ElementoEfecto = styled.li`
    list-style: none;
    margin-bottom: .5rem;
    cursor: pointer;

    @media(min-width:768px) {
        margin: 5px 0 0 0;
        padding: 0;
        position: relative;

        &:hover {
            color: #DEB887;
        }
        a {
            text-decoration: none;
            color: white;
            font-size: .9rem;
            padding: 0;
            position: relative;
            transition: margin-left .3s ease-in-out;

            &:hover {
                margin-left: 10px;
                margin-top:.5rem;
            }
        }
    }  
`;