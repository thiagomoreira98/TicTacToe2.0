module.exports = (app)=>{
    let signUp = require('../../core/signup/signupController.js');

    app.route("/signup").get(signUp.testCad);

    app.route("/signup").post(signUp.signUp);

};

