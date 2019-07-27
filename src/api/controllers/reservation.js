var reservationService = require('../services/reservationService');
var reservationRequestValidator = require('../validations/reservationRequestValidator');

class reservation {
    
    static makeReservation(req, res){
        let userInfo;
        let roomInfo;
        return reservationRequestValidator.validateRequest(req)
        .then(() => { 
            //check for valid user
            return reservationRequestValidator.isValidUser(req.body.userId)
                .then((userinfo)=> {
                    userInfo = userinfo;
                    //check for hotel validity
                    return reservationRequestValidator.isValidRoom(req.body.roomId, req.body.quantity)
                        .then((roominfo) => {
                            roomInfo = roominfo;
                            return reservationService.makeReservation(userInfo, roomInfo, req.body.quantity)
                            .then((status) => {
                                res.status(200).send(status);
                            })
                        })
                })
        })
        .catch((e) => {
            res.status(400).send(e)
        });
    }
}

module.exports = {
    makeReservation: reservation.makeReservation
}