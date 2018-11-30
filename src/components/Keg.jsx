import React from 'react';
import PropTypes from 'prop-types';

const Keg = (props) => {

  function handleSellKeg() {
    props.onSellKeg(props.keg);
  }


  return (
    <div>
      <h3><b>Name: {props.keg.name}</b></h3>
      <h4><em>Brewer: {props.keg.brewer}</em></h4>
      <h6>Description: {props.keg.description}</h6>
      <h6 id="vol">Alcohol by volume(ABV): {props.keg.abv}%</h6>
      <h6>${props.keg.price}</h6>
      <h6>{props.keg.remaining}fl. oz remaining</h6>
      <button onClick={handleSellKeg} className="btn btn-info">Sell Keg </button>
    </div>
  );
}

Keg.propTypes = {
  keg: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}
 
export default Keg;

