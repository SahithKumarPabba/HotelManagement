var userInfoService = require('../services/userinfoService');
var availabilityService = require('../services/availabilityService');

class reservationRequestValidator {

    static validateRequest(req){
        return Promise.resolve((resolve, reject) => {

            if(req.body)
            {
                if(!req.body.userId){
                    reject('UserId must be provided');
                } else if(!req.body.roomId){
                    reject('RoomId must be provided');
                } else if(!req.body.quantity){
                    reject('Number of rooms required must be specified');
                }
            }else if(!req.body){
                reject('Bad Request');
            }
        });
    }

    static isValidUser(id){
        return new Promise((resolve, reject) => {
            return userInfoService.getById(id)
                .then((result) => {
                    if(!result || result.length === 0){
                        reject('user with id: '+id + ' is not found.');
                    }else{
                        resolve(result);
                    }
                })
        });
    }

    static isValidRoom(roomId, quantity){
        return new Promise((resolve, reject) => {
            return availabilityService.getById(roomId)
                .then((result) => {
                    if(!result || result.length === 0){
                        reject('Room with id: '+roomId + ' is not found.');
                    }else if(result[0].AvailableAmount < quantity){
                        reject('Room with the given Id:' +roomId + ' has only ' + result[0].AvailableAmount + ' rooms left.');
                    }else{
                        resolve(result);
                    }
                })
        });
    }
}

module.exports ={
    validateRequest: reservationRequestValidator.validateRequest,
    isValidUser: reservationRequestValidator.isValidUser,
    isValidRoom: reservationRequestValidator.isValidRoom
}
