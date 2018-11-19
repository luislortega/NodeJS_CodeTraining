import path from 'path'

module.exports = {
    __dirname: "C:/Users/Luis Gerardo/Documents/_JAVASCRIPT/VUE_NODE_JS_1/",
    port: process.env.PORT || 8081,
    db: {
      database: process.env.DB_NAME || 'tabtracker',
      user: process.env.DB_USER || 'tabtracker',
      password: process.env.DB_PASS || 'tabtracker',
      options: {
        dialect: process.env.DIALECT || 'sqlite',
        host: process.env.HOST || 'localhost',
        storage: path.resolve("C:/Users/Luis Gerardo/Documents/_JAVASCRIPT/VUE_NODE_JS_1/", '../../tabtracker.sqlite')
      }
    },
    authentication: {
      jwtSecret: process.env.JWT_SECRET || 'secret'
    }
  }