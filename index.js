function onTelegramAuth(user) {
    let id_telegram = user.id;
    insertData(id_telegram);
    alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user. id + (user.username ? ', @' + user.username : '') + ')');
}

function insertData(id_telegram){
    const mysql = require("mysql");

    const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "ragesh_sub"
    })

    db.query(`INSERT INTO abbonati (id_twitch,${id_telegram},sub) VALUES(2,3,'hello')`, (err,res) => {
        return console.log(err + res);
    });
}