var userinfoService = require('../services/userinfoService');

class user {

    static getByName(req,res){
        return userinfoService.getByName(req, res);
    }

}

module.exports = {
    getByName: user.getByName
  };