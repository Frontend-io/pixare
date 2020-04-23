import * as actions from "./action"
import axios from "axios";


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
        payload: payload
    }
}


export const fetchPhotoFailure = (payload)=>{
    return{
        type: actions.FETCH_PHOTO_FAILURE,
        payload: payload
    }
}


export const fetchPhoto = (query)=>{
   return(dispatch)=>{
        dispatch(fetchPhotoBegin())
        // AXIOS
        const KEY = "563492ad6f9170000100000160f67cb297a84d5b8cd4cab93fbb713f"
        const QUERY = query ? query : "nature"
        const URL = `https://api.pexels.com/v1/search?query=${QUERY}&per_page=70&page=1`
        axios
        .get(URL, {
            headers: {
                'Authorization': `${KEY}`
            }
        })
        .then(res => {
            const data = res.data
            dispatch(fetchPhotoSuccess(data))
        })
        .catch(err =>{
            const error = err.message
            dispatch(fetchPhotoFailure(error))
        })
   }
}
