import * as actions from "./action"


export const addFav = (payload)=>{
    return{
        type: actions.ADD_FAV,
        payload
    }
}


export const download = (payload)=>{
    return{
        type: actions.DOWNLOAD,
        payload
    }
}


export const removeFav = (payload)=>{
    return{
        type: actions.REMOVE_FAV,
        payload
    }
}

export const fetchPhotoBegin = ()=>{
    return{
        type: actions.FETCH_PHOTO_BEGIN
    }
}

export const fetchPhotoSuccess = (payload)=>{
    return{
        type: actions.FETCH_PHOTO_SUCCESS,
        payload
    }
}


export const fetchPhotoFailure = (payload)=>{
    return{
        type: actions.FETCH_PHOTO_FAILURE,
        payload
    }
}


export const fetchPhoto = (dispatch)=>{
    dispatch(fetchPhotoBegin())
    // AXIOS
    
}
