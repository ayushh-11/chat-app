const userModel = require("../model/userModel")
const bcrypt = require("bcrypt")

signup = async(req, res) => {
    console.log(req.body);
    const { fullName, userName, password, gender, profilePic } = req.body;
    maleAvatar = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    femaleAvatar = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
    await userModel.findOne({userName})
        .then(result => {
            if (result)
                res.send("User Exist : "+result);
            else {
                bcrypt.hash(password, 10, (err, hash) => {
                    if(err) throw err;
                    userModel.create({
                        fullName: fullName,
                        userName: userName,
                        password: hash,
                        gender: gender,
                        profilePic : profilePic || (gender == "male" ? maleAvatar : femaleAvatar)
                    })
                        .then(result => {
                        res.send("Signin Complete"+result)
                         })
                        .catch(err => console.log(err))
                })
            }
        })
        .catch(error => console.log(error));
}

module.exports = signup;