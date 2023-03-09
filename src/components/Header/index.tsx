import { HeaderContainer } from "./styles";
import Logo from '../../../public/images/logos/LogoPage.png'
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <nav>
                <NavLink to='/'>
                    <img src={Logo} alt="Vecteezy.com" />
                </NavLink>
                <div>
                    <p>Sobre</p>
                    <p>Contato</p>
                </div>
            </nav>

        </HeaderContainer>
    )
}