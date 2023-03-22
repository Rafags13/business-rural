import './Header.module.css';
import "../../assets/header-logo.png";
import logo from '../../assets/header-logo.png';

export default function Header() {
    return (
        <nav>
            <img className="logo-image" src={logo} />
        </nav>
    )
}