import React from 'react';
import PropTypes from 'prop-types';

const Keg = (props) => {

  function handleSellKeg() {
    props.onSellKeg(props.keg);
  }

  function handleSellGrowler() {
    props.onSellGrowler(props.keg);
  }

  function handleSellLargeGrowler() {
    props.onSellLargeGrowler(props.keg);
  }


  return (
    <div>
      <style jsx>{`
      .btn{
        margin: 10px;
      }
      `}</style>
      <h3><b>Name: {props.keg.name}</b></h3>
      <h4><em>Brewer: {props.keg.brewer}</em></h4>
      <h6>Description: {props.keg.description}</h6>
      <h6 id="vol">Alcohol by volume(ABV): {props.keg.abv}%</h6>
      <h6>${props.keg.price}</h6>
      <h6>{props.keg.remaining}fl. oz remaining</h6>
      <button onClick={handleSellKeg} className="btn btn-info">Sell Keg </button>
      <button onClick={handleSellGrowler} className="btn btn-info">Sell Growler </button>
      <button onClick={handleSellLargeGrowler} className="btn btn-info">Sell Large Growler </button>

    </div>
  );
};

Keg.propTypes = {
  onSellKeg: PropTypes.func,
  onSellGrowler: PropTypes.func,
  onSellLargGrowler: PropTypes.func,
  keg: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};
 
export default Keg;

