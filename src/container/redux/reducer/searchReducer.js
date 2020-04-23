import * as actions from "../actions/search-action"

const initialState = {
    isSearching: false,
    message: '',
    result: [],
    pageNum: ''
}

const SearchReducer = ( state = initialState, action )=>{
    const { type, payload } = action

    switch(type){
        case actions.IS_SEARCHING:
            return{
                ...state,
                isSearching: true,
                message: ''
            }
        case actions.DONE_SEARCHING:
            return{
                ...state,
                isSearching: false,
                message: ''
            }
        case actions.SEARCH_SUCCESS:
                return{
                    ...state,
                    isSearching: false,
                    message: '',
                    result: payload,
                }
        case actions.SEARCH_FAILURE:
                return{
                    ...state,
                    isSearching: false,
                    message: payload,
                    result: [],
                }
        case actions.NEXT_PAGE:
            return{
                ...state,
                pageNum: state.pageNum + 1
            }
        case actions.PREV_PAGE:
            return{
                ...state,
                pageNum: state.pageNum - 1
            }
        default: 
            return state
    }

}


export default SearchReducer