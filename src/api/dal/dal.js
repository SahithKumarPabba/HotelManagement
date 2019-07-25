var sql = require("mssql");

// config for your database
var config = {
    user: 'sa',
    password: 'admin@123',
    server: 'localhost', 
    database: 'hotelManagementSystem' 
};


class dal {

    static getAll(tableName, res) {

        // connect to your database
        sql.connect(config, function (err) {

            if (err) console.log(err);

            // create Request object
            var request = new sql.Request();
            
            // query to the database and get the records
            request.query('select * from ' + tableName, function (err, recordset) {
                
                if (err) console.log(err);
                sql.close();

                // send records as a response
                res.send(recordset);
                
            });
        });
    }

    static getByParam(tableName, paramname, res) {

        // connect to your database
        sql.connect(config, function (err) {

            if (err) console.log(err);

            // create Request object
            var request = new sql.Request();
            
            // query to the database and get the records
            request.query('select * from ' + tableName + ' where name = ' +paramname, function (err, recordset) {
                
                if (err) console.log(err);
                sql.close();

                // send records as a response
                res.send(recordset);
                
            });
        });
    }

}

module.exports = {
    getAll: dal.getAll,
    getByParam: dal.getByParam
}
