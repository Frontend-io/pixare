import * as actions from "../actions/photo-action/photo-action"
import findFav from '../../../utilities/favoritePhotoFinder'

const initialState = {
    loading: false,
    message: "",
    photos: null,
    favPhotos: [],
    downloaded: [],
    // DROPDOWN CATEGORY
    category: '',
    // PHOTO MATCH IN VIEW
    favPreview : null, 
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
                photos: null
            }
        case actions.ADD_FAV:
            return{
                ...state,
                favPhotos: !findFav(state.favPhotos, payload) ? 
                    [ payload, ...state.favPhotos ] :
                    state.favPhotos.filter( p => payload !== p )               
            }
        case actions.EMPTY_FAV:
            return{
                ...state,
                favPhotos: []
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


        case actions.FIND_MATCH_BEGIN:
            return{
                ...state,
                loading: true,
                message: ''
            }
        case actions.FIND_MATCH_SUCCESS:
            return{
                ...state,
                loading: false,
                message: '',
                favPreview: payload
            }
        case actions.FIND_MATCH_FAILURE:
            return{
                ...state,
                loading: false,
                message: payload,
                favPreview: null
            }

        default: 
            return state
    }

}


export default photoReducer