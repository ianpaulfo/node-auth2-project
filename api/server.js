//set up express objects 
const express = require('express');

//set up security and control objects with helmet, cor, dotenv
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');

//set up router objects
// const usersRouter = require('../users/user-router');
// const authRouter = require('../auth/auth-router');
// const authenticator = require('../auth/authenticator');

//set up server object using express
const server = express();

//set up server object middleware use
server.use(helmet());
server.use(express.json());
server.use(cors());

//set up api routes
// server.use('/api/users', authenticator, usersRouter);
// server.use('/api/auth', authRouter);

//sanity test
server.get('/', (req, res) => {
    res.json({api: 'All set!'});
});

//export
module.exports = server; 