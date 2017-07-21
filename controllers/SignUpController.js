let fs = require('fs');
let pg = require('pg');

module.exports = (app)=>{
    return {
        testCad,
        signUp
    }
};

function testCad(req, res){
    res.writeHead(200, {"content-type": "text/html"});
    res.end(fs.readFileSync("./views/SignUp.html"));
}

function signUp(req, res){
    let username = req.body.cadUsername;
    let email = req.body.cadEmail;
    let password_ = req.body.cadPassword;


    let sql =`SELECT * FROM users WHERE email='${email}' and password='${password_}';`;
    let sql_insert =`INSERT INTO public.users(username, email, password) VALUES ('${username}', '${email}', '${password_}');`;
    let connectpg = "postgres://thiagomoreira:1234@localhost:5432/jogodavelhasmndb";

    let results = [];

    pg.connect(connectpg, (err, client, done) => {
        // Handle connection errors
        if(err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }
        // SQL Query > Select Data
        client.query(sql_insert);
        const query = client.query(sql);
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            console.log("results: " +results.length);
            if(results.length == 0){
                console.log("Usuario invalido");
                //res.writeHead(200, {"content-type": "text/html"});
                res.end(fs.readFileSync("./views/ErroLogin.html"));
            }
            else{
                //res.writeHead(200, {"content-type": "text/html"});
                res.redirect('/login')
            }
        });
    });
}
