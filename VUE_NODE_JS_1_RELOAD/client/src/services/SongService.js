import Api from '@/services/Api'

export default {
    getAllSongs(){
        return Api().get('songs')
    },
    addSong(song){
        return Api().post('songs', song)
    }
}