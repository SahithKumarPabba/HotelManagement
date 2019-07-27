var dal = require('../dal/dal');

class userinfoService{

    static getByName(req, res){
        return dal.getByParam('userinfo', 'name', req.params.name)
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((e) => {
                res.status(400).send('Bad Request');
            })
    }

    static getById(id){
        return dal.getByParam('userinfo', 'id', id);
    }
}

module.exports = {
    getByName: userinfoService.getByName,
    getById:userinfoService.getById
};