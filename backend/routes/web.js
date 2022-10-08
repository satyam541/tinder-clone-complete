const express = require('express');
const {getGenderedUsers, getAllUsers,createUser,updateUser,deleteUser,getUserDetails,getUser,addSwipedMatches }
 = require('../controllers/UserController');

const {getChats,sendMessage}    =   require('../controllers/ChatController');
const router = express.Router();


router.route('/get/chats').get(getChats);
router.route('/send/message').post(sendMessage);
router.route('/users').get(getAllUsers);
router.route("/signup").post(createUser);
router.route("/login").post(getUser);
router.route("/get/gendered/users/:user_id").get(getGenderedUsers);
router.route("/add/matches").put(addSwipedMatches);
router.route("/update/user").put(updateUser);
router.route("/user/:id").put(updateUser).delete(deleteUser).get(getUserDetails);

module.exports = router
                       









