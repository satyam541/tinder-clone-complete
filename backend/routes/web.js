const express = require('express');
const { getAllUsers,createUser,updateUser,deleteUser,getUserDetails }
 = require('../controllers/UserController');

const router = express.Router();

router.route('/users').get(getAllUsers);
router.route("/user/create").post(createUser);
router.route("/user/:id").put(updateUser).delete(deleteUser).get(getUserDetails);

module.exports = router