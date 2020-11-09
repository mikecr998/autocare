import styled from 'styled-components'
import Link from 'next/link'
import Icono from './Icono'

const Logo = styled.img`
    width: 60px;
    cursor: pointer;

    @media(min-width: 768px) {
        width: 150px;
        margin-left: 50px;
    }
`;

const Nav = styled.nav`
    width: 100%;
    padding: 10px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
    background: white;
    border-bottom: 10px #d81428 solid;
    /* border-top: 10px #d81428 solid; */

    @media screen and (max-width: 415px) {
        position: fixed;
        top: 0;
    }
`
const Header = () => {
    return (
        <Nav>
            <Link href="/">
                <Logo src="autocare.svg"></Logo>
            </Link>
            <Icono />
        </Nav>
     );
}

export default Header;