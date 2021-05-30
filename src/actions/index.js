import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const ADD_SMURFS = 'ADD_SMURFS';
export const SMURFS_ERROR = 'SMURFS_ERROR';

// [x] 1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
// [ ] 2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
// [ ] 3. Add a standard action that allows us to set the value of the error message slice of state.

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({type: FETCH_SMURFS})
        console.log('is this thing on?');
    }
}