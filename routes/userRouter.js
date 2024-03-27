const router = require('express').Router();
const {getUser , getUsers, addUser, editUser} = require('../controllers/userController');




router.get('/:userId',getUser);
router.get('/',getUsers);
router.post('/',addUser);
router.put('/',getUsers);





module.exports = router;