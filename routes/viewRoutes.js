const express = require('express');
const viewControllter = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', authController.isLoggedIn, viewControllter.getOverview);
router.get('/tour/:slug', authController.isLoggedIn, viewControllter.getTour);
router.get('/login', authController.isLoggedIn, viewControllter.getLoginForm);
router.get('/me', authController.protect, viewControllter.getAccount);

router.post(
  '/submit-user-data',
  authController.protect,
  viewControllter.updateUserData
);

module.exports = router;
