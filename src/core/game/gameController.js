let fs = require('fs');

module.exports = {
    showGame
};

function showGame(req, res){
    res.writeHead(200, {"content-type": "text/html"});
    res.end(fs.readFileSync("./views/game.html"));
}