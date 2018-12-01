import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

const Home = (props) => {

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
      {props.kegList.map((keg, index) => {
        return(
          <Keg
            keg={keg}
            index={index}
            key={index}
            onSellKeg={props.onSellKeg}
            onSellGrowler={props.onSellGrowler}
            onSellLargeGrowler={props.onSellLargeGrowler}
          />
        );
      })}
    </div>
  );
};

Home.propTypes = {
  onSellKeg: PropTypes.func,
  onSellGrowler: PropTypes.func,
  onSellLargeGrowler: PropTypes.func,
  sellGrowler: PropTypes.func,
  sellKeg: PropTypes.func,
  kegList: PropTypes.array,
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
  remaining: PropTypes.number
};

export default Home;