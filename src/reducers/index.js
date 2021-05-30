import {FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURFS, SMURFS_ERROR, START_FETCH_SMURFS} from '../actions/index';

const initialState = {
    // [x] 1. Adds the following state values into the initialState:
    //  - an array of smurfs
    //  - a boolean indicating if the app is loading
    //  - a string indicating a possible error message
    smurfs: [],
    isLoading: false,
    error: 'possible error for smurfs',
}
// [x] 2. Add in the arguments needed to complete a standard reducer function.
const reducer = (state = initialState, action)=>{
    switch(action.type){
    // [x] 3. Add in a reducer case to accomidate the start of a smurf fetch.    
        case (START_FETCH_SMURFS):
            return({
                ...state,
                isLoading: false,
                error: ''
            })
    // [x] 4. Add in a reducer case to accomidate the successful smurf api fetch.
        case (FETCH_SMURFS_SUCCESS):
            return({
                ...state,
                isLoading: false,
                error: ''
            })
    // [x] 5. Add in a reducer cases to accomidate the failed smurf api fetch.
        case (FETCH_SMURFS_FAILURE):
            return({
                ...state,
                isLoading: false,
                error: ''
            })
    // [x] 6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
    case (ADD_SMURFS):
        return({
            ...state,
        })
    // [x] 7. Add in a reducer case that adds in a value to the error message.    
    case (SMURFS_ERROR):
        return({
            ...state
        })

        default:
            return state;
    }
}

export default reducer;
