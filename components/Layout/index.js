import styled from 'styled-components'

const Contenedor = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const Layout = ({children}) => {
    return ( 
        <Contenedor>
            {children}
        </Contenedor>
     );
}
 
export default Layout;