import React,{useEffect} from 'react';
import Smurf from './Smurf';
// importing fetch smurfs via actions:
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions/index';

// [x] 1. Connect the smurfs and loading state values to the SmurfList component.
 const SmurfList = (props)=> {
    const{smurfs, isLoading, fetchSmurfs} = props;
    useEffect(()=>{
        fetchSmurfs();
    }, [])
        console.log(smurfs);

// replacing this isLoading var with state loading var
    // const isLoading = false; 
    // const testSmurf = {
    //     id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    //     name:'Poppa Smurf',
    //     position:'Village Leader',
    //     nickname: 'Pops',
    //     description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    // }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
// [x] 2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
    return(<div className="listContainer">
        {/* <Smurf smurf={testSmurf}/> */}

        {smurfs.map((smurf)=>{
            return <Smurf key= {smurf.id} smurf= {smurf} />
        })}

    </div>);
}
// [x] 3. Replace the static isLoading variable with the state loading variable.
const mapStateToProps = state =>({
    smurfs: state.smurfs,
    isLoading: state.isLoading
})

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);
