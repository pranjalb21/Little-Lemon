import { Nav } from "./Nav";
import Logo from "../assets/LittleLemonLogo.svg"

export const Header = () => (
    <header>
        <img src={Logo} alt="Little Lemon"/>
        <Nav />
    </header>
)