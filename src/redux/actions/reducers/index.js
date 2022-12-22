import { combineReducers } from "redux"



const initialState = {
    movies : [],
    selectedMovie : {}
}

export const movieReducer = (state=initialState,action) => {
    switch(action.type) {
        case 'FETCH_MOVIES' : return {...state,movies:action.payload}

        case 'SELECT_MOVIE' : return {state,selectedMovie : action.payload}

        case 'REMOVE_MOVIE' : return {...state,selectedMovie : {}}

        default : return state
    }
}

export const reducers = combineReducers({
    Movie : movieReducer
})
