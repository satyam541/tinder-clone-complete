const express = require('express');
const { getAllUsers,createUser,updateUser,deleteUser,getUserDetails,getUser }
 = require('../controllers/UserController');

const router = express.Router();

router.route('/users').get(getAllUsers);
router.route("/signup").post(createUser);
router.route("/login").post(getUser);
router.route("/update/user").put(updateUser);
router.route("/user/:id").put(updateUser).delete(deleteUser).get(getUserDetails);

module.exports = router
                       









