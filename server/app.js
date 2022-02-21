const express = require('express');
const App = express();
const cors = require('cors');
App.use(express.json());
App.use(cors())
App.options("*", cors());
const UserController = require('./UserController');

App.patch('/create-user', UserController.createUser);

App.get('/', UserController.getUsers);

App.delete('/:id' , UserController.deleteUser);


module.exports = App;