var sql = require("mssql");

// config for your database
var config = {
    user: 'sa',
    password: 'admin@123',
    server: 'db', 
    database: 'hotelManagementSystem' 
};


class dal {

    static getAll(tableName, res) {

        // connect to your database
        sql.connect(config, function (err) {

            if (err) {
                console.log(err);
                sql.close();
                res.status(500).send(err)
            }

            // create Request object
            var request = new sql.Request();
            
            // query to the database and get the records
            request.query('select * from ' + tableName, function (err, recordset) {
                
                if (err) {
                    console.log(err);
                    sql.close();
                    res.status(500).send(err)
                }
                sql.close();

                // send records as a response
                res.send(recordset.recordset);
                
            });
        });
    }

    static getByParam(tableName, columnname, paramname) {

        return new Promise((resolve, reject) => {

        // connect to your database
            sql.connect(config, function (err) {

                if (err) {
                    console.log(err);
                    sql.close();
                    res.status(500).send(err)
                }

                // create Request object
                var request = new sql.Request();
                
                // query to the database and get the records
                request.query("select * from " + tableName + " where  " + columnname + "=" + "'" + paramname + "'" , function (err, recordset) {
                    
                    if (err) {
                        console.log(err);
                        sql.close();
                        res.status(500).send(err)
                    }
                    sql.close();

                    // send records as a response
                    resolve(recordset.recordset);
                    
                });
            });
    });

    }

    static updateBonusPoints(id, pointsAccumulated, pointsConsumed, pointsLeft){
        return new Promise((resolve, reject) => {

            // connect to your database
                sql.connect(config, function (err) {
    
                    if (err) {
                        sql.close();
                        reject(err);
                    }
    
                    // create Request object
                    var request = new sql.Request();
                    
                    let query = "update Bonuspoints set PointsAccumulated = " +pointsAccumulated+ ", PointsLeft =" +pointsLeft+", PointsConsumed =" +pointsConsumed+ ", LastUpdatedTs = "+dal.getDateTime() +" where Id = " + "'" + id + "'";
                    // query to the database and get the records
                    request.query(query  , function (err, recordset) {
                        
                        if (err) {
                            sql.close();
                            reject(err);
                        }
                        sql.close();
    
                        // send records as a response
                        resolve();
                        
                    });
                });
        });
    }

    static updateAvailabilty(id, availableAmount){
        return new Promise((resolve, reject) => {

            // connect to your database
                sql.connect(config, function (err) {
    
                    if (err) {
                        sql.close();
                        reject(err);
                    }
    
                    // create Request object
                    var request = new sql.Request();
                    
                    let query = "update hotelroominfo set availableAmount = " +availableAmount+ ", LastUpdateTs = "+new Date().getUTCDate() +" where Id = " + "'" + id + "'";
                    // query to the database and get the records
                    request.query(query  , function (err, recordset) {
                        
                        if (err) {
                            sql.close();
                            reject(err);
                        }
                        sql.close();
    
                        // send records as a response
                        resolve();
                        
                    });
                });
        });
    }

    static updateBookingStatus(bookingId, userId, roomId, status){

        return new Promise((resolve, reject) => {

            // connect to your database
                sql.connect(config, function (err) {
    
                    if (err) {
                        sql.close();
                        reject(err);
                    }
    
                    // create Request object
                    var request = new sql.Request();

                    let query = "insert into bookinginfo(BookingId, UserId, RoomId, Status, BookingDate) values('" +bookingId+"','" +userId+"','"+roomId+"','"+status+"','"+dal.getDateTime()+"')"
                    
                    // query to the database and get the records
                    request.query(query , function (err, recordset) {
                        
                        if (err) {
                            sql.close();
                            reject(err);
                        }
                        sql.close();
    
                        // send records as a response
                        resolve();
                        
                    });
                });
        });
    }

    static getDateTime() {
        var now     = new Date(); 
        var year    = now.getFullYear();
        var month   = now.getMonth()+1; 
        var day     = now.getDate();
        var hour    = now.getHours();
        var minute  = now.getMinutes();
        var second  = now.getSeconds(); 
        if(month.toString().length == 1) {
             month = '0'+month;
        }
        if(day.toString().length == 1) {
             day = '0'+day;
        }   
        if(hour.toString().length == 1) {
             hour = '0'+hour;
        }
        if(minute.toString().length == 1) {
             minute = '0'+minute;
        }
        if(second.toString().length == 1) {
             second = '0'+second;
        }   
        var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
         return dateTime;
    }

}

module.exports = {
    getAll: dal.getAll,
    getByParam: dal.getByParam,
    updateBookingStatus: dal.updateBookingStatus,
    updateBonusPoints: dal.updateBonusPoints,
    updateAvailabilty: dal.updateAvailabilty
}
