var bonusPointsService = require('../services/bonusPointsService');
var dal = require('../dal/dal');

class reservationService{

    static makeReservation(userInfo, roomInfo, quantity){
        return new Promise((resolve, reject) => {
            return bonusPointsService.checkForPoints(userInfo[0].Id, roomInfo[0])
                .then(() => {
                    //reserved
                    dal.updateAvailabilty(roomInfo[0].Id, roomInfo[0].AvailableAmount - quantity)
                        .then(() => {
                            let bookingId = Math.floor((Math.random()) * 0x10000).toString(16);
                            dal.updateBookingStatus(bookingId, userInfo[0].Id, roomInfo[0].Id, 'RESERVED')
                            .then(()=> {
                                //logic to trigger the email
                                resolve('RESERVED.Booking Id:' +bookingId);
                            })
                        });
                })
                .catch((e) => {
                    let bookingId = Math.floor((Math.random()) * 0x10000).toString(16);
                    //pending approval
                    dal.updateBookingStatus(bookingId, userInfo[0].Id, roomInfo[0].Id, 'PENDING_APPROVAL')
                    .then(() => {
                        //logic to trigger the email
                        resolve('PENDING_APPROVAL');
                    })
                })
        });
    }

}

module.exports = {
    makeReservation: reservationService.makeReservation
}