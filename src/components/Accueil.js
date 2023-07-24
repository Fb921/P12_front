// Style
import '../styles/style-accueil.css'

// Custom component
import HorizontalNav from "../components/HorizontalNav.js"
import VerticalNav from "../components/VerticalNav.js"
import InfosBloc from "../components/infosBloc.js"

// Images
import protein_img from "../assets/protein-icon.png"
import carbs_img from "../assets/carbs-icon.png"
import calorie_img from "../assets/calories-icon.png"
import fat_img from "../assets/fat-icon.png"


function Accueil(){
    return (
        <div>
            <HorizontalNav/>
            <main>
                <VerticalNav/>
                <section id="main_content">
                    <h1>Bonjour <span id="name_element">Name</span></h1>
                    <div id="infos_container">
                        <div id="graphs_container">
                        </div>
                        <div id="perfs_container">
                            <InfosBloc value={100}  img={ calorie_img } type="Calories" unit='kCal'/>
                            <InfosBloc value={100}  img={ protein_img } type="Protéines" unit='g'/>

                            <InfosBloc value={100}  img={ carbs_img } type="Glucides" unit='g'/>

                            <InfosBloc value={100}  img={ fat_img } type="Lipides" unit='g'/>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}

export default Accueil;