# NodeJS_CodeTraining
A hub of my progress with Node.JS

#FrontEnd dependencies
- Vue | Vuetify | Vuex
- Webpack
- Youtube Viewer

#BackEnd dependencies
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

# Basic configuration
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