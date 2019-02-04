//Models of the default
const {
    sequelize,
    Song,
    User
} = require('../src/models')

//Manage our promises with bluebird
const Promise = require('bluebird')
//Default JSON 
const songs = require('./songs.json')
const users = require('./users.json')

sequelize.sync({force: true})
    .then(async function () {

        await Promise.all(
            users.map(user => {
                User.create(user)
            })
        )

        await Promise.all(
            songs.map(song => {
                Song.create(song)
            })
        )

    })