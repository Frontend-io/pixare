import * as actions from "../actions/action"

const initialState = {
    loading: false,
    message: "",
    photos: null,
    favPhotos: [],
    downloaded: [],
    favPreview : null,
    category: ''
}

const photoReducer = ( state = initialState, action )=>{
    const { type, payload } = action

    switch(type){
        case actions.FETCH_PHOTO_BEGIN:
            return{
                ...state,
                loading: true,
                message: "",
                category: payload

            }
        case actions.FETCH_PHOTO_SUCCESS:
            return{
                ...state,
                loading: false,
                message: '',
                photos: payload.photos,
            }
        case actions.FETCH_PHOTO_FAILURE:
            return{
                ...state,
                loading: false,
                message: payload,
                photos: []
            }
        case actions.ADD_FAV:
            return{
                ...state,
                favPhotos: [payload, ...state.favPhotos]
            }
        case actions.REMOVE_FAV:
            return{
                ...state,
                favPhotos: 
                    state.favPhotos.filter( p => payload !== p )
            }
        case actions.DOWNLOAD:
            return{
                ...state,
                downloaded: [ payload, ...state.downloaded ]
            }
        case actions.FAV_PREVIEW:
            return{
                ...state,
                favPreview: payload
            }
        default: 
            return state
    }

}


export default photoReducer