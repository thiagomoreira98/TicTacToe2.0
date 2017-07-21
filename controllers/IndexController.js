let fs = require('fs');

module.exports = (app)=>{
    return {
        showGame
    }
};

function showGame(req, res){
    res.writeHead(200, {"content-type": "text/html"});
    res.end(fs.readFileSync("./views/index.html"));
}