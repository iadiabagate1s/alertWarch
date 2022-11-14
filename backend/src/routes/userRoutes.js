const {Router}= require('express');
const {allUsers, getUserById, deleteUserById, createUser, updateUserPassword, updateUser} = require('../controllers/users.js');



const router = Router();


//user routes
router.get('/', allUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUserById);
router.post('/', createUser);
router.patch('/password', updateUserPassword);
router.put('/', updateUser);

//export router
module.exports = {router};
