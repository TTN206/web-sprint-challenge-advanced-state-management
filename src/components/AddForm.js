import React, { useState } from 'react';
// connecting addNewSmurf & smurfErr from actions
import {connect} from 'react-redux';
import {addNewSmurf, setError} from '../actions/index';

const AddForm = (props) => {
// [x] 1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
    const {addNewSmurf, setError, smurfs, error} = props;

    const [state, setState] = useState({
        name:"",
        position:"",
        nickname:"",
        description:""
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }

// [x] 3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
// [x] 4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.
    const handleSubmit = e => {
        e.preventDefault();
        if (state.name === "" || state.position === "" || state.nickname === "") {
            setError = "Name, position and nickname fields are required.";
        }
        const newSmurf = {
            name: state.name,
            position: state.position,
            nickname: state.nickname,
            description: state.description
        }
        addNewSmurf(newSmurf);
    }
    
// [x] 2. Replace all instances of the errorMessage static variable with your error message state value. 
    // const error = "";

    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={state.name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input onChange={handleChange} value={state.position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input onChange={handleChange} value={state.nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea onChange={handleChange} value={state.description} name="description" id="description" />
            </div>
            {
                error && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {error}</div>
            }
            <button>Submit Smurf</button>
        </form>
    </section>);
}

const mapPropsToState = state => ({
    smurfs: state.smurfs,
    error: state.error
})

export default connect(mapPropsToState, {addNewSmurf, setError})(AddForm);
