import Api from '@/services/Api'

export default {
    //we need {songId, userId}
    getBookmark(bookmark){
        return Api().get('bookmarks',{
            params: bookmark
        })
    },
    setBookmark(bookmark){
        console.log(bookmark)
        return Api().post('bookmarks',{
            params: bookmark
        })
    },
    deleteBookmark(bookmarkId){
        return Api().delete(`bookmarks/${bookmarkId}`)
    }
}