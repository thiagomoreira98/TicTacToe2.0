module.exports = (app) => {
    let gameController = require('../../core/game/gameController.js');

    app.route("/").get(gameController.showGame);
};