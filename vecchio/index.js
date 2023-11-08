const verifyButton = document.getElementById("#verify-twitch-btn");

function onTelegramAuth(user){
    
}

verifyButton.onclick  = function () {
    insertData();
    alert("Ho fatto");
};

function insertData(){
    const mysql = require("mysql");

    const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "ragesh_sub"
    })

    var id_telegram = localStorage.getItem("telegram_id");

    db.query(`INSERT INTO abbonati (id_twitch,${id_telegram},sub) VALUES(2,3,'hello')`, (err,res) => {
        return console.log(err + res);
    });
}