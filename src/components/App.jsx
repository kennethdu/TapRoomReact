import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import KegList from './Keglist';

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function App(){
  var styles = {
  };
  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      
      <Home/>
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/keglist' component={KegList} />
      </Switch>
    
    </div>
  );
}

//App.propTypes = {
//};

export default App;
