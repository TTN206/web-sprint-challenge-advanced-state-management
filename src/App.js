import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// import fetchSmurfs from actions to connect
import {connect} from 'react-redux';
import {fetchSmurfs} from './actions/index';

class App extends Component {
// [x] 2. Call the fetchSmurfs action when the component first loads.
  componentDidMount(){
    this.props.fetchSmurfs();
  };

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}
// [x] 1. Connect the fetchSmurfs actions to the App component.
export default connect(null, {fetchSmurfs})(App);
