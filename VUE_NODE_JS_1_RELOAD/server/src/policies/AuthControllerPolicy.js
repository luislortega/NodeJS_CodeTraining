const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string(),
      password: Joi.string().regex(
        /**
                 *
                * ^ = la coincidencia debe comenzar al principio
                * [] = coincide con
                *  a-zA-Z0-9 de a hasta z, a hasta z mayuscula y de 0 a 9
                * {8,32} = una logitud de 8 hasta 32
                * $ = De forma predeterminada, la coincidencia se debe producir al final de la cadena o antes de
                */
        new RegExp('^[a-zA-z0-9]{8,32}$')
      )
    }

    /**
         * npm i joi
         * this validate the account.
         *
         * API REFERENCE: https://github.com/hapijs/joi
         */
    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email addres'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'You must provide a valid password'
          })
          break
        default:
          res.status(400).send({
            error: 'Default error...'
          })
          break
      }
    } else {
      next()
    }
  }
}
