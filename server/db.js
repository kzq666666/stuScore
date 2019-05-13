const mysql = require('mysql')
const DB = {
    host:'localhost',
    user:'root',
    password:'kzq',
    database:'demo'
}
const DBConnection = mysql.createConnection({
    host:DB.host,
    user:DB.user,
    password:DB.password,
    database:DB.database
})
DBConnection.connect()
module.exports.DBConnection = DBConnection