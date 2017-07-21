module.exports = (app)=>{
    let loginController = app.controllers.LoginController;

    app.route("/login").get(loginController.login);

    app.route("/login").post(loginController.authenticate);
};
