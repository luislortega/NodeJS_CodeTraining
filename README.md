# NodeJS_CodeTraining
A hub of my progress with Node.JS

**FrontEnd dependencies**
- Vue | Vuetify | Vuex
- Webpack
- Youtube Viewer

**BackEnd dependencies**
- Sequelize | SQLite3
- Eslint
- Babel.JS
- Nodemon
- jsonwebtoken
- express
- body-parser
- bluebird
- bcrypt-nodejs
- morgan
- joi
- cor
- passport passport-jwt

# API construction
1. Create the path of server
2. init the package.json with command *npm init*
3. install the basic dependencies:
    - body-parser
    - cross-env
    - express
    - nodemon
4. Configure the file .babelrc
~~~~
{
    "presets": [
      [
        "env",
        {
          "targets": {
            "node": "8.12.0"
          }
        }
      ]
    ],
    "plugins": [
      [
        "transform-object-rest-spread",
        {
          "useBuiltIns": true
        }
      ]
    ]
  }
~~~~
4. Install EsLint dependencies:
    - eslint
    - eslint-config-equimper
    - prettier
    - eslint-config-prettier
5. Configure the file .eslintrc 
~~~~
{
 "extends":[
    "equimper",
    "prettier"
 ]
}
~~~~
6. Add the scripts
  - "dev": "cross-env NODE_ENV=dev nodemon --exec babel-node src/index.js"
  - "prettier": "prettier --single-quote --print-width 80 --trailing-comma all --write src/**/*.js"
7. Create main file index.js (Code example)
~~~~
import express from 'express';
import bodyParser from 'body-parser';

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
~~~~
8. Create your database in postgres
  - Go to local disk c
  - Program files\Postgres\:version\bin
  - execute the command psql -U postgres -h localhost 
  - Create your database
  - Create your tables
9. Install your database with NPM
~~~~
// Using NPM
$ npm install --save sequelize

And one of the following:
$ npm install --save pg pg-hstore
$ npm install --save mysql2
$ npm install --save sqlite3
~~~~
10. Test the connection:
~~~~
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
~~~~