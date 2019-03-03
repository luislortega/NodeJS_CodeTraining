import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 8085;
app.use(bodyParser.json());

const Sequelize = require('sequelize');

// Or you can simply use a connection uri
const sequelize = new Sequelize('db', 'postgres', '1298Luis', {
  dialect: 'postgres',
});
//Testing the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('👽 Database running');
  })
  .catch(err => {
    console.error('😒 The connection isnt workin, ERROR: ', err);
  });

app.listen(PORT, err => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(`🚀 BACKEND RUNNING AT PORT ${PORT}`);
  }
});
