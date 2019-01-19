const { Song } = require('../models')

module.exports = {
    async getAllSongs(req, res){
        try {
            
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    }
}
