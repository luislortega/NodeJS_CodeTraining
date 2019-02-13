import Api from '@/services/Api'

export default {
    //we need {songId, userId}
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
        console.log(`Dentro del api delete ${bookmarkId}`)
        return Api().delete(`bookmarks/${bookmarkId}`)
    }
}