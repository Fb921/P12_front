import '../styles/HorizontalNav.css'
import logo from '../assets/logo.png'
import {Link} from "react-router-dom"

function HorizontalNav(){
    return (
    <nav>
        <ul className="horizontal_nav">
            <Link to="/"><li><img id="logo" src={logo}/></li></Link>
            <Link to="/"><li>Accueil</li></Link>
            <Link to="#"><li>Profil</li></Link>
            <Link to="#"><li>Réglages</li></Link>
            <Link to="#"><li>Communauté</li></Link>
        </ul>
    </nav>)
}

export default HorizontalNav;