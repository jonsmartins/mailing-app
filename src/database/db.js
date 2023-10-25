import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  database: 'mailing',
  user: 'mailing',
  password: 'dtfilmes'
});

export default db;

// export default function getConnection(){
//     const mysql = require('mysql2');
//     const db = mysql.createConnection({
//         host: 'localhost',
//         user: 'mailing',
//         password: 'dtfilmes',
//         database: 'mailing'
//     });
//     return db;
// }
// //const mysql = require('serverless-mysql')(`mysql://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.ENDPOINT}:${process.env.PORT}/${process.env.DATABASE}`)
// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     //Insert a record in the "customers" table:
//     var sql = "SELECT * FROM exibidores";
//     db.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });