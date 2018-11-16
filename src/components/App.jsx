import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import KegList from './Keglist';
import NavBar from './Navbar';

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function App(){
  return (
    <div>
      <style global jsx>{`
        * {
          // font-family: 'Cinzel', serif;
          border-radius: 10px;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: center;  
          background-size: cover;
          text-align: center;
        }
        body{
          background-image: url(https://static1.squarespace.com/static/54ea3cc6e4b08d8eee454d05/t/56b7570b20c64713aa431759/1454855947975/page-banner-template.jpg?format=1500w);
        }
        div.container {
          margin-top: 5%;
          background-color: #ccc;
          opacity: .8;
        }
      `}
      </style>
      <NavBar/>
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/keglist' component={KegList} />
        </Switch>
      </div>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
