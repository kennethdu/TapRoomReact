import React from 'react';
import PropTypes from 'prop-types';
import getTapList from './pseudoBackendOnTap';
import Buttons from './Buttons';


const List = getTapList();

const Home = () => {
  return (
    <div className="container">
      <style jsx>{`
      #tap{
        color: DarkBlue;
      }

      #vol{
        color: red;
      }
      `}
      </style>
      <h1><u>Welcome to Epicodus' Tap Room: The Greatest in the West</u></h1>
      <h2 id="tap">On Tap</h2>
      {List.map((props, index) => {
        return (
          <div key={index}>
            <h3><b>Name: {props.name}</b></h3>
            <h4><em>Brewer: {props.brewer}</em></h4>
            <h6>Description: {props.description}</h6>
            <h6 id="vol">Alcohol by volume(ABV): {props.abv}%</h6>
            <h6>${props.price}</h6>
            <h6>{props.remaining}fl. oz remaining</h6>
            <Buttons />
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