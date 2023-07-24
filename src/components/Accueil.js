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

// Infos API
import getUserInfos  from  '../services/userInfos.js'

// Basic react
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

// Charts 
import MyBarChart from "../components/BarChart.js"

function Accueil(){
    const [userName, setUserName] = useState(null);
    const [userProtein, setUserProtein] = useState(null);
    const [userCalorie, setUserCalorie] = useState(null);
    const [userCarbohydrate, setUserCarbohydrate] = useState(null);
    const [userLipid, setUserLipid] = useState(null);
    const [userSession, setUserSession] = useState(null);

    const [isNameLoading, setNameLoading] = useState(true);
    const [isProteinLoading, setProteinLoading] = useState(true);
    const [isCalorieLoading, setCalorieLoading] = useState(true);
    const [isLipidLoading, setLipidLoading] = useState(true);
    const [isCarbohydrateLoading, setCarbohydrateLoading] = useState(true);
    const [isSessionLoading, setSessionLoading] = useState(true);

    let { id } = useParams();

    if(!id){
        id = 18;
    }

    let userInfos = new getUserInfos(id);

    const handleUserName = async () => {
        let name = await userInfos.getUserName();
        setUserName(name);
        setNameLoading(false);
        return;
    };

    const handleUserProtein = async () => {
        let protein = await userInfos.getUserProteinCount();
        setUserProtein(protein);
        setProteinLoading(false);
        return;
    };
    const handleUserCalorie = async () => {
        let calorie = await userInfos.getUserCalorieCount();
        setUserCalorie(calorie);
        setCalorieLoading(false);
        return;
    };
    const handleUserLipid = async () => {
        let lipid = await userInfos.getUserLipidCount();
        setUserLipid(lipid);
        setLipidLoading(false);
        return;
    };
    const handleUserCarbohydrate = async () => {
        let carbohydrate = await userInfos.getUserCarbohydrateCount();
        setUserCarbohydrate(carbohydrate);
        setCarbohydrateLoading(false);
        return;
    };
    const handleUserSession = async () => {
        let session = await userInfos.getUserSession();
        setUserSession(session);
        setSessionLoading(false);
        return;
    };

    useEffect(() => {
        setNameLoading(true);
        handleUserName();

        setProteinLoading(true);
        handleUserProtein();

        setCarbohydrateLoading(true);
        handleUserCarbohydrate();

        setLipidLoading(true);
        handleUserLipid();

        setCalorieLoading(true);
        handleUserCalorie();

        setSessionLoading(true);
        handleUserSession();

        return;
    }, []);

    return (
        <div>
            <HorizontalNav/>
            <main>
                <VerticalNav/>
                <section id="main_content">
                    {
                        isNameLoading ? <h1>Loading ... </h1> : <h1>Bonjour <span id="name_element">{userName}</span></h1>
                    }
                    <div id="infos_container">
                        <div id="graphs_container">
                            <div className="barchart_title">Activité quotidienne</div>
                            <div className='barchart_container'>
                                {
                                    isSessionLoading ? <div>Session Loading ...</div> :  <MyBarChart data={ userSession }></MyBarChart>
                                }
                            </div>
                            <div className="charts_container">
                            </div>
                        </div>
                        <div id="perfs_container">
                            {
                                isCalorieLoading ? <div>Calorie Loading ...</div> : <InfosBloc value={userCalorie}  img={ calorie_img } type="Calories" unit='kCal'/>
                            }

                            {
                                isProteinLoading ? <div>Protein Loading ...</div> : <InfosBloc value={userProtein}  img={ protein_img } type="Protéines" unit='g'/>
                            }


                            {
                                isCarbohydrateLoading ? <div>Carbohydrate Loading ...</div> : <InfosBloc value={userCarbohydrate}  img={ carbs_img } type="Glucides" unit='g'/>
                            }

                            {
                                isLipidLoading ? <div>Lipid Loading ...</div> : <InfosBloc value={userLipid}  img={ fat_img } type="Lipides" unit='g'/>
                            }
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}

export default Accueil;