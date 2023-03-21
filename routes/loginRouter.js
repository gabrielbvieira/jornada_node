const Router = require('express');
const loginRouter = Router();
const LoginController = require('../controllers/loginController');

const controllerObject = new LoginController();

loginRouter.get('/login', controllerObject.handle);

module.exports = loginRouter;