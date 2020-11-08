import styled from 'styled-components'

const Contenedor = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    height: 100vh;
    background-image: url("background2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Layout = ({children}) => {
    return (
        <Contenedor>
            {children}
        </Contenedor>
     );
}

export default Layout;