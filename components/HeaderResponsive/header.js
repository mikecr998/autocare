import styled from 'styled-components'
import Link from 'next/link'
import Icono from './Icono'

const Logo = styled.img`
    height: 60px;
    border-radius: 9999px;
    cursor: pointer;

    @media(min-width: 768px) {
        margin: 10px 0 0 20px;        
        height: 100px;
    }
`;

const Nav = styled.nav`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #696969;
    position: fixed;
    top: 0;
`
const Header = () => {    
    return ( 
        <Nav>
            <Link href="/">
                <Logo src="logo.png"/>
            </Link>
            <Icono />
        </Nav>
     );
}
 
export default Header;