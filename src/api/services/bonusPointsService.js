var dal = require('../dal/dal');
var auth = require('../middleware/auth');

class bonusPointsService {

    getById(id){
        return dal.getByParam('bonuspoints', 'id', id);
    }

    static updateBonusPoints(token, pointsAccumulated, pointsConsumed, pointsLeft){
        return new Promise((resolve,reject) => {
            //token to make this api internal
            return dal.updateBonusPoints(auth.decodeToken(token), pointsAccumulated, pointsConsumed, pointsLeft)
                .then(()=> { 
                    resolve(); 
                })
                .catch((e) => reject(e));
        })
    }

    static checkForPoints(id, roominfo){
        let bonusPointsInfo;
            return new Promise((resolve, reject) => {
                 return dal.getByParam('bonuspoints', 'id', id)
                    .then((result) => {
                        if(result && result.length > 0){
                            bonusPointsInfo = result;
                            if(roominfo.RequiredPoints < bonusPointsInfo[0].PointsLeft){
                                //generate the token for the internal api
                                return bonusPointsService.updateBonusPoints(auth.getToken(id), bonusPointsInfo[0].PointsAccumulated,
                                    bonusPointsInfo[0].PointsConsumed + roominfo.RequiredPoints, bonusPointsInfo[0].PointsLeft - roominfo.RequiredPoints)
                                    .then(() => { 
                                        resolve();
                                    })
                            }else{
                                reject(e);
                            }
                            resolve();
                        }
                    })
                    .catch((e) => {
                        reject(e);
                    })
        })
    }
}

module.exports ={
    checkForPoints: bonusPointsService.checkForPoints
}