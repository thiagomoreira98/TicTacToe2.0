let express = require("express");
let app = express();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let load = require("express-load");
let bodyParser = require("body-parser");

app.use(express.static(__dirname + "/"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

(function loadRoutes() {
        require('./src/api/routes/gameRoute.js')(app);
        require('./src/api/routes/loginRoute.js')(app);
        require('./src/api/routes/signupRoute.js')(app);
})();

io.on('connection', function(client){
    console.log("a user connected");

    let userid = client.id;

    client.broadcast.emit('userid', {userid: userid});

    client.on('send', function(message){
        console.log(message);
        io.emit('receive', message);
    });

    client.on("disconnect", function(){
        console.log("a user disconnect");
    });
});

http.listen(3000, function(){
    console.log("SERVIDOR INICIADO COM SUCESSO");
});