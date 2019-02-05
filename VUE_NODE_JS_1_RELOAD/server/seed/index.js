//Models of the default || The Seed work for default values at the database 
const {
    sequelize, 
    Song,
    User,
    Bookmark
} = require('../src/models')

//Manage our promises with bluebird
const Promise = require('bluebird')
//Default JSON 
const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')

//Init the seed with command node seed 
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
        
        await Promise.all(
            bookmarks.map(bookmark => {
                Bookmark.create(bookmark)
            })
        )

    })