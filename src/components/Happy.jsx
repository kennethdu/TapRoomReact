import React from 'react';
import PropTypes from 'prop-types';
import getHappyList from './pseudoBackendHappy';
import Buttons from './Buttons';

const Happy = () => {

  const List = getHappyList();

  return (
    <div>
      <style jsx>{`
      
      #red{
        color: red;
      }
      
      `}
      </style>
      <h1>Happy Hour List 50% Off Certain Beers!</h1>
      <h3><b>Between 5PM and 7PM</b></h3>
      {List.map((props, index) => {
        return (
          <div key={index}>
            <h2>Name: {props.name}</h2> 
            <h2><em>Brewer: {props.brewer}</em></h2>
            <h6>Description: {props.description}</h6>
            <h6>Alcohol by volume(ABV): {props.abv}%</h6>
            <h6 id="red">${props.price}</h6>
            <h6>{props.remaining}fl. oz remaining</h6>
            <Buttons />
          </div>
        );
      })}
    </div>
  );
};

Happy.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
  remaining: PropTypes.number
};

 
export default Happy;