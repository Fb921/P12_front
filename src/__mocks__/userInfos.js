const datas = {
    12:{"id":12,"userInfos":{"firstName":"Karl","lastName":"Dovineau","age":31},"todayScore":0.12,"keyData":{"calorieCount":1930,"proteinCount":155,"carbohydrateCount":290,"lipidCount":50}},
    18:{"id":18,"userInfos":{"firstName":"Cecilia","lastName":"Ratorez","age":34},"score":0.3,"keyData":{"calorieCount":2500,"proteinCount":90,"carbohydrateCount":150,"lipidCount":120}}
}

const activity = {
    12:{"userId":12,"sessions":[{"day":"2020-07-01","kilogram":80,"calories":240},{"day":"2020-07-02","kilogram":80,"calories":220},{"day":"2020-07-03","kilogram":81,"calories":280},{"day":"2020-07-04","kilogram":81,"calories":290},{"day":"2020-07-05","kilogram":80,"calories":160},{"day":"2020-07-06","kilogram":78,"calories":162},{"day":"2020-07-07","kilogram":76,"calories":390}]},
    18:{"userId":18,"sessions":[{"day":"2020-07-01","kilogram":70,"calories":240},{"day":"2020-07-02","kilogram":69,"calories":220},{"day":"2020-07-03","kilogram":70,"calories":280},{"day":"2020-07-04","kilogram":70,"calories":500},{"day":"2020-07-05","kilogram":69,"calories":160},{"day":"2020-07-06","kilogram":69,"calories":162},{"day":"2020-07-07","kilogram":69,"calories":390}]}
}

const performance = {
    12:{"userId":12,"kind":{"1":"cardio","2":"energy","3":"endurance","4":"strength","5":"speed","6":"intensity"},"data":[{"value":80,"kind":1},{"value":120,"kind":2},{"value":140,"kind":3},{"value":50,"kind":4},{"value":200,"kind":5},{"value":90,"kind":6}]},
    18:{"userId":18,"kind":{"1":"cardio","2":"energy","3":"endurance","4":"strength","5":"speed","6":"intensity"},"data":[{"value":200,"kind":1},{"value":240,"kind":2},{"value":80,"kind":3},{"value":80,"kind":4},{"value":220,"kind":5},{"value":110,"kind":6}]}
}

const averageSession = {
    12:{"userId":12,"sessions":[{"day":1,"sessionLength":30},{"day":2,"sessionLength":23},{"day":3,"sessionLength":45},{"day":4,"sessionLength":50},{"day":5,"sessionLength":0},{"day":6,"sessionLength":0},{"day":7,"sessionLength":60}]},
    18:{"userId":18,"sessions":[{"day":1,"sessionLength":30},{"day":2,"sessionLength":40},{"day":3,"sessionLength":50},{"day":4,"sessionLength":30},{"day":5,"sessionLength":30},{"day":6,"sessionLength":50},{"day":7,"sessionLength":50}]}
}


async function getUserData(id){
    let r = await Promise.resolve(datas[id]);
    return r;
}
async function getUserActivityData(id){
    let r = await Promise.resolve(activity[id]);
    return r;
}
async function getUserAvgSessions(id){
    let r = await Promise.resolve(averageSession[id]);
    return r;
}
async function getUserPerformances(id){
    let r = await Promise.resolve(performance[id]);
    return r;
}
async function getUserObjectifs(id){
    let r = await Promise.resolve(datas[id]);
    return r;
}

export default class mockedUserInfos {
    constructor(id){
        this.userId = id;
    }
    async getUserName(){
        let r = await getUserData(this.userId);
        return r.userInfos.firstName;
    }
    async getUserCalorieCount() {
        let r = await getUserData(this.userId);
        return r.keyData.calorieCount;
    }
    
    async getUserProteinCount() {
        let r = await getUserData(this.userId);
        return r.keyData.proteinCount;
    }
    
    async getUserCarbohydrateCount() {
        let r = await getUserData(this.userId);
        return r.keyData.carbohydrateCount;
    }
    
    async getUserLipidCount() {
        let r = await getUserData(this.userId);
        return r.keyData.lipidCount;
        
    }
    
    async getUserSession() {
        let r = await getUserActivityData(this.userId);
        return r.sessions;
    }
    
    async getUserAvgSession() {
        let r = await getUserAvgSessions(this.userId);
        let days = {"1":"L","2":"M","3":"M","4":"J","5":"V","6":"S","7":"D"};
        return r.sessions.map(e => {return {"dL":days[e.day],"day":e.day,"sessionLength":e.sessionLength}});
    }

    async getUserPerformances() {
        function sort_by_value(d1,d2){
            if(kind_classment.indexOf(d1.kind) > kind_classment.indexOf(d2.kind)){
                return 1;
            }else if(d1.value == d2.value){
                return 0;
            }else{
                return -1;
            }
        }
        let kind_classment = ["Intensité","Vitesse","Force","Endurance","Énergie","Cardio"];
        const data  = await getUserPerformances(this.userId);
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
    }
    async getUserObjectif() {
        const data = await getUserObjectifs(this.userId);
        let score = data.todayScore;
        if(!score){
            score = data.score;
        }
        return [
            {"name":"score","value":score * 100},
            {"name":"reste","value":(100 - (score * 100))}
        ];
    }
}