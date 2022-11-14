const {getUserQuery} = require('../../db/config.js');
const {comparePassword, sendEmail} = require("../service/auth.js");


//User log aut
async function login (request, response) {
    const {username, password} = request.body;
    console.log('in login user ,', [username, password])
    res = await getUserQuery(username);
    console.log('in controller-get User',res);
    if (res.length > 0){
        let pwd = res[0].password;
        let compare = await comparePassword(password, pwd);
        console.log('compare', compare)
        if (compare){
            response.status(200).send({message: 'login success', data : res[0]});
        }else{
            response.status(401).send({message:'Invalid password', data: null});
        }
    }else{
        response.status(401).send({message: 'Invalid username', data: null});
    } 
}


// send the email for password resit
async function sendResetPasswordEmail (request, response) {
    const {email} = request.body;
    console.log('in sendResetPasswordEmail', email)
    try {
        let user = await getUserQuery(email);
        console.log('user', user)
        if (user.length > 0){
        res = await sendEmail(email);
        response.status(200).send({message: 'email sent', data: null})
    }     
    else {
        response.status(401).send({message: 'Invalid email', data: null});   
      
    }
 
}
catch (err){
    response.status(500).send({message: 'Internal server error', data: null});
}
}

module.exports = { login,sendResetPasswordEmail };
