const express = require('express');
const {getGenderedUsers, getAllUsers,createUser,updateUser,deleteUser,getUserDetails,getUser,addSwipedMatches }
 = require('../controllers/UserController');

const {getChats,sendMessage}    =   require('../controllers/ChatController');
const router = express.Router();
let multer = require('multer');
// let upload = multer();

router.route('/get/chats').get(getChats);
router.route('/send/message').post(sendMessage);
router.route('/users').get(getAllUsers);
router.route("/signup").post(createUser);
router.route("/login").post(getUser);
router.route("/get/gendered/users/:user_id").get(getGenderedUsers);
router.route("/add/matches").put(addSwipedMatches);
router.route("/update/user").post(updateUser,multer().single('file'));
router.route("/user/:id").delete(deleteUser).get(getUserDetails);

module.exports = router
                       









