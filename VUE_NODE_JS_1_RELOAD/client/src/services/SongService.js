import Api from '@/services/Api'

export default {
    getAllSongs(search){
        return Api().get('songs',{
            params:{
                search: search
            }
        })
    },
    addSong(song){
        return Api().post('songs', song)
    },
    getSong(songID){
        return Api().get(`songs/${songID}`)
    },
    updateSong(song){
        return Api().put(`songs/update/${song.id}`, song)
    }
}