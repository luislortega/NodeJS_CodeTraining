module.exports = (sequelize, DataTypes) => {
  // title, artist, genre, album, albumImageURL, youtubeId, lyrics, tab
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImageURL: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    lyrics: DataTypes.STRING,
    tab: DataTypes.STRING
  })

  return Song
}
