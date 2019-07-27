var jwt = require('jsonwebtoken');

class auth {
    static getToken(data){
        var token = jwt.sign(data, 'shhhhh');
        return token;
    }

    static decodeToken(token){
        return jwt.verify(token, 'shhhhh');
    }
}

module.exports = {
    getToken: auth.getToken,
    decodeToken: auth.decodeToken
}