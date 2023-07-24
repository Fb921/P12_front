// Style
import '../styles/style-accueil.css'

// Custom component
import HorizontalNav from "../components/HorizontalNav.js"
import VerticalNav from "../components/VerticalNav.js"


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
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}

export default Accueil;