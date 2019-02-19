import Api from '@/services/Api'

export default {
    //we need {songId, userId}
    getAll(userId){
        console.log(`Estoy enviando el ${userId}`)
    },
    getBookmark(bookmark){
        return Api().get('bookmarks',{
            params: bookmark
        })
    },
    setBookmark(bookmark){
        return Api().post('bookmarks',{
            params: bookmark
        })
    },
    deleteBookmark(bookmarkId){
        return Api().delete(`bookmarks/${bookmarkId}`)
    }
}