var dal = require('../dal/dal');

class availabilityService{

    static getAll(req, res){
        return dal.getAll('hotelroominfo', res);
    }
}

module.exports = {
    getAll: availabilityService.getAll
};