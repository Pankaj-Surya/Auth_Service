const express = require('express')

const UserController = require("../../controllers/user-controller")
//const {AuthRequestValidators} = require('../../middlewares/index');
const {validateUserAuth,validateAdminRequest} = require('../../middlewares/auth-request-validators');

console.log(validateAdminRequest)
const router = express.Router();

router.post('/signup',validateUserAuth, UserController.create)
router.post('/signin',validateUserAuth, UserController.signIn);

router.get('/isAuthenticated',UserController.isAuthenticated)
router.get('/isAdmin',validateAdminRequest,UserController.isAdmin);

module.exports = router