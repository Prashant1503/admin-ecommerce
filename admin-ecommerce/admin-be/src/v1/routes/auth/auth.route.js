const router = require('express').Router();

const {
    registerUser,
    loginUser,
    resetPassword
}
    = require('../../controllers/auth/auth.controller');

/**
 * @route : /signup
 * @method : POST
 * @access : Public
 */
router.post('/signup', registerUser);

/**
 * @route : /signin
 * @method : POST
 * @access : Protected
 */
router.post('/signin', loginUser);

/**
 * @route : /forgot-password
 * @method : POST
 * @access : Protected
 */
// router.post('/forgot-password');


// export
module.exports = router;