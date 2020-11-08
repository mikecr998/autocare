import styled from 'styled-components'

export const Contenedor = styled.div`
    text-align: center;
    color: white;
    background: #313536;
    width: 100%;
    padding: 40px 0px;

    h2 {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 415px) {
        h2 {
        font-size: 1.2rem;
    }
    }
`