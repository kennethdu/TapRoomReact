import React from 'react';
import PropTypes from 'prop-types';
import getKegList from './pseduoBackend';

const KegList = () => {

  const List = getKegList();

  return (  
    <div>
      {List.map((props, index) => {
        return (
          <div key={index}>
            <h1>Name: {props.name}</h1>
            <h2><em>Brewer: {props.brewer}</em></h2>
            <h4>Description: {props.description}</h4>
            <h4>Alcohol by volume(ABV): {props.abv}%</h4>
            <h4>${props.price}</h4>
            <h4>{props.remaining}fl. oz remaining</h4>
          </div>
        );
      })}
    </div>
  );
};

KegList.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
  remaining: PropTypes.number
};
 
export default KegList;