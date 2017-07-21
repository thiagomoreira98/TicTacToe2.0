module.exports = (app)=>{
    let signUp = app.controllers.SignUpController;

    app.route("/signup").get(signUp.testCad);

    app.route("/signup").post(signUp.signUp);

};

