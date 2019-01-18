const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'db4free.net',
    user:'jamesfikrii',
    password:'5259415089',
    database:'kakapedia',
    port: 3306
});

module.exports = conn