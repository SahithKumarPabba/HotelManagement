var dal = require('../dal/dal');

class userinfoService{

    static getByName(req, res){
        return dal.getByParam('userinfo', req.params.name, res);
    }
}

module.exports = {
    getByName: userinfoService.getByName
};