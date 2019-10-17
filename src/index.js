require('dotenv').config({ path: '.env' });
const createServer = require('../createServer');
const db = require('./db');

const server = createServer();

// express middleware cookies (JWT)
// express middleware populate current user

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  }
}, deets => {
  console.log(`Server is now running on port http://localhost:${deets.port}`)
});