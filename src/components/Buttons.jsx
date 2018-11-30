import React from 'react';
import propType from 'prop-types';

const Buttons = () => {
  return (
    <div>
      <style jsx>{`
      .btn{
         margin: 10px; 
      }
    `}
      </style>
      <button onClick={this.sellKeg} className="btn btn-info">Sell Keg </button>
      <button onClick={this.sellGrowler} className="btn btn-primary">Sell Growler </button>
      <button onClick={this.sellLargeGrowler} className="btn btn-warning">Sell Large Growler</button>
    </div>
  );
};

Buttons.propType ={
  sellKeg: propType.func,
  sellGrowler: propType.func,
  sellLargeGrowler: propType.func
};

export default Buttons;