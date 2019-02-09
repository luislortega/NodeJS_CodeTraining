import Api from '@/services/Api'

export default {
    //we need {songId, userId}
    getAllBookmarks(param){
        return Api().get('bookmarks',{
            params: param
        })
    }
}