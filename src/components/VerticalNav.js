import '../styles/VerticalNav.css'
import yog from '../assets/yoga.png'
import vel from '../assets/velo.png'
import mus from '../assets/muscle.png'
import nat from '../assets/nat.png'
import {Link} from "react-router-dom"

function VerticalNav(){
    return (
    <nav className="vertical_nav_parent">
        <ul className="vertical_nav">
            <Link to="/"><li><img src={yog}/></li></Link>
            <Link to="#"><li><img src={nat}/></li></Link>
            <Link to="#"><li><img src={vel}/></li></Link>
            <Link to="#"><li><img src={mus}/></li></Link>
        </ul>
        <div className="copyright_txt">Copiryght, SportSee 2020</div>
    </nav>)
}

export default VerticalNav;