var availabilityService = require('../services/availabilityService');

class availability {

    static getAll(req,res){
        return availabilityService.getAll(req, res);
    }

}

module.exports = {
    getAll: availability.getAll
  };