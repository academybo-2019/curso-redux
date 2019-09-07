import React from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';
import BookStore from './components/BookStore';

function mapStateToProps (state) {
    return {
      count: state.reducer.count
    };
}

function App(props) {
  console.log(props.count);
  return (
    <div>
    <div className="App">
        <p>{props.count}</p>
        <button onClick={()=>props.dispatch({type:'increment', value:1})}>Increment</button>
    </div>

    <BookStore></BookStore>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
    return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
