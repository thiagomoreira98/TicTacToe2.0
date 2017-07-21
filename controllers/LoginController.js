let fs = require('fs');
let pg = require('pg');
const pool = require('../lib/database.js');


module.exports = (app)=>{
    return {
        login,
        authenticate
    }
};

function login(req, res){
    res.writeHead(200, {"content-type": "text/html"});
    res.end(fs.readFileSync("./views/login.html"));

}

function authenticate(req, res){
    let email = req.body.email;
    let password_ = req.body.password_field;
    localizarUsuario(email, password_, res);
}

function localizarUsuario(email, senha, res){
    const results = [];
    let sql =`SELECT * FROM users WHERE email='${email}' and password='${senha}';`;
    //let connectpg = "postgres://thiagomoreira:1234@localhost:5432/jogodavelhasmndb";


    pool.connect(function(err, client, done) {
        if(err) {
            return console.error('error running query', err);
        }

        client.query(sql);

        client.on('row', (row) => {
            results.push(row);
        });

        client.on('end', (res) => {
            done();
            console.log("results: " +results.length);
            if(results.length == 0){
                console.log("Usuario invalido");
                res.writeHead(200, {"content-type": "text/html"});
                res.end(fs.readFileSync("./views/ErroLogin.html"));
            }
            else{
                console.log("OK");
                res.redirect('/');
            }
        });
    });
}