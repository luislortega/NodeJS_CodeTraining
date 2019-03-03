/* eslint-disable no-console */

import express from 'express';
import bodyParser from 'body-parser';

//import './config/db'

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.listen(PORT, err => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(`🚀 BACKEND RUNNING AT PORT ${PORT}`);
  }
});
