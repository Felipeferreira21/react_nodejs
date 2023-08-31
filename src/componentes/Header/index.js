import Logo from '../../componentes/logo'
import OpcoesHeader from '../../componentes/OpcoesHeader';
import IconesHeader from '../../componentes/IconesHeader';
import styled from 'styled-components'

const HeaderContanier = styled.header`
    background-color: #fff; 
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContanier>
            <Logo/>
            <OpcoesHeader/> 
            <IconesHeader/>
        </HeaderContanier>
    )
}

export default Header;