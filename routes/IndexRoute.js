module.exports = (app)=>{
    let indexController = app.controllers.IndexController;

    app.route("/").get(indexController.showGame);
};