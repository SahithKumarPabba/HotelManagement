var dal = require('../dal/dal');

class availabilityService{

    static getAll(req, res){
        return dal.getAll('hotelroominfo', res);
    }

    static getById(roomId){
        return dal.getByParam('hotelroominfo', 'id', roomId);
    }
}

module.exports = {
    getAll: availabilityService.getAll,
    getById: availabilityService.getById
};