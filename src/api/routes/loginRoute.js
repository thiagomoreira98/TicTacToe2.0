module.exports = (app)=>{
    let loginController = require('../../core/login/loginController.js');

    app.route("/login").get(loginController.login);

    app.route("/login").post(loginController.authenticate);
};
