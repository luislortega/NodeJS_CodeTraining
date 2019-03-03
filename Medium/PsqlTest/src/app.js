import express from 'express';
import models from './models';

const app = express();

require('./config/routes')(app) //routes

models.sequelize.sync({ force: true }).then(() => {
  app.listen(8081, () => {
    console.log('👽 Backend running');
  });
});
