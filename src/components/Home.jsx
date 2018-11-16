import React from 'react';
import PropTypes from 'prop-types';
import getTapList from './pseudoBackendOnTap';

const List = getTapList();

const Home = () => {
  return (
     

    <div className="container">
      <style jsx>{`
      #tap{
        color: red;
      }
      
      `}</style>
      <h1>Welcome to Epicodus' Tap Room: The Greatest in the West</h1>
      <h2 id="tap">On Tap</h2>
      {List.map((props, index) => {
        return (
          <div key={index}>
            <h2>Name: {props.name}</h2>
            <h2><em>Brewer: {props.brewer}</em></h2>
            <h6>Description: {props.description}</h6>
            <h6>Alcohol by volume(ABV): {props.abv}%</h6>
            <h6>${props.price}</h6>
            <h6>{props.remaining}fl. oz remaining</h6>
          </div>
        );
      })}
    </div>    
  );
};

Home.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
  remaining: PropTypes.number
};
 
export default Home;