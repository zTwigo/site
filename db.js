const {createPool} = require("mysql");

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "prova12",
    connectionLimit: 10
})

pool.query("select * from user", (err,res) =>{
    return console.log(err);
})