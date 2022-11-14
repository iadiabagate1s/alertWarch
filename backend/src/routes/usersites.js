const {Router} = require('express');
const {getClientSitesByUsername,getAllUserAndSites,getAllSitesAndUsers, createUserSite,deleteUserSite} = require('../controllers/usersites.js');


const router = Router();


router.get ('/sites', getAllSitesAndUsers);
router.get ('/user', getAllUserAndSites);
router.post('/link', createUserSite);
router.post('/unlink', deleteUserSite);
router.get('/:username', getClientSitesByUsername);



module.exports = {router};