const BASE_URL = 'http://localhost:3000'

async function getUserData(userId) {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}`);
        return await response.json();
    }
    catch (error) {
        console.log('===> error', error);
    }
}
async function getUserActivityData(userId) {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
        return await response.json();
    }
    catch (error) {
        console.log('===> error', error);
    }
}
async function getUserAvgSessions(userId) {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
        return await response.json();
    }
    catch (error) {
        console.log('===> error', error);
    }
}
async function getUserPerformances(userId) {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
        return await response.json();
    }
    catch (error) {
        console.log('===> error', error);
    }
}
async function getUserObjectifs(userId) {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}`);
        return await response.json();
    }
    catch (error) {
        console.log('===> error', error);
    }
}

class getUserInfos{

    constructor(userId){
        this.userId  = userId;
    }

    
    async getUserName() {
        try {
            const { data } = await getUserData(this.userId);
            return data.userInfos.firstName;
        } catch(error) {
            console.log('===> error', error);
        }
    }

    async getUserCalorieCount() {
        try {
            const { data } = await getUserData(this.userId);
            return data.keyData.calorieCount;
        } catch(error) {
            console.log('===> error', error);
        }
    }

    async getUserProteinCount() {
        try {
            const { data } = await getUserData(this.userId);
            return data.keyData.proteinCount;
        } catch(error) {
            console.log('===> error', error);
        }
    }

    async getUserCarbohydrateCount() {
        try {
            const { data } = await getUserData(this.userId);
            return data.keyData.carbohydrateCount;
        } catch(error) {
            console.log('===> error', error);
        }
    }

    async getUserLipidCount() {
        try {
            const { data } = await getUserData(this.userId);
            return data.keyData.lipidCount;
        } catch(error) {
            console.log('===> error', error);
        }
    }

    async getUserSession() {
        try {
            const { data } = await getUserActivityData(this.userId);
            return data.sessions;
        } catch(error) {
            console.log('Session ===> error', error);
        }
    }

    async getUserAvgSession() {
        try {
            const { data } = await getUserAvgSessions(this.userId);
            let days = {"1":"L","2":"M","3":"M","4":"J","5":"V","6":"S","7":"D"};
            return data.sessions.map(e => {return {"dL":days[e.day],"day":e.day,"sessionLength":e.sessionLength}});
    
        } catch(error) {
            console.log('Session ===> error', error);
        }
    }
    async getUserPerformances() {
        try {
            const { data } = await getUserPerformances(this.userId);
            let kind_classment = ["Intensité","Vitesse","Force","Endurance","Énergie","Cardio"];
            function sort_by_value(d1,d2){
                if(kind_classment.indexOf(d1.kind) > kind_classment.indexOf(d2.kind)){
                    return 1;
                }else if(d1.value == d2.value){
                    return 0;
                }else{
                    return -1;
                }
            }
            return data.data.map(e => {
                let kind = data.kind[e.kind];
                if(data.kind[e.kind] == "intensity"){
                    kind = "Intensité";
                }else if(data.kind[e.kind] == "cardio"){
                    kind = "Cardio";
                }else if(data.kind[e.kind] == "strength"){
                    kind = "Force";
                }else if(data.kind[e.kind] == "speed"){
                    kind = "Vitesse";
                }else if(data.kind[e.kind] == "energy"){
                    kind = "Énergie";
                }else if(data.kind[e.kind] == "endurance"){
                    kind = "Endurance";
                }
                return {"kind":kind,"value":e.value}}).sort(sort_by_value);
        } catch(error) {
            console.log('Session ===> error', error);
        }
    }
    async getUserObjectif() {
        try {
            const { data } = await getUserObjectifs(this.userId);
            let score = data.todayScore;
            if(!score){
                score = data.score;
            }
            return [
                {"name":"score","value":score * 100},
                {"name":"reste","value":(100 - (score * 100))}
            ];
        } catch(error) {
            console.log('Session ===> error', error);
        }
    }
}

export default getUserInfos;