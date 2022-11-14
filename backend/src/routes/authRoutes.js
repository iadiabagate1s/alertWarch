const {Router}= require('express');
const {login,sendResetPasswordEmail} = require('../controllers/auth.js');



const router = Router();

//auth site routes
router.post('/login', login);
router.post('/forgotpassword', sendResetPasswordEmail);


//export default router;
module.exports = {router};