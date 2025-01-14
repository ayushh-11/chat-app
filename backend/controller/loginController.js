const userModel = require("../model/userModel")
const bcrypt = require("bcrypt")

login = async(req, res) => {
    const { userName, password } = req.body;
    await userModel.findOne({ userName })
        .then(result => {
            if (result) {
                bcrypt.compare(password, result.password, (err, bcryptResult) => {
                    if (err) throw err;
                    if (bcryptResult) {
                        req.session.sid = result._id;
                        
                        res.send("Login Success")
                    }
                    else
                        res.send("Incorrect Password")
                })
            }
            else{
                res.send("Incorrect Username")
            }
        })

}

module.exports = login;
