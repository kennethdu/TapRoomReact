import React from 'react';
import PropTypes from 'prop-types';
import getKegList from './pseudoBackendFullList';
import Buttons from './Buttons';


const KegList = () => {

  const List = getKegList();

  return (  
    <div>
      <style jsx>{`
      #green{
        color: green;
      }
      
      `}</style>
      <h1>Keg List</h1>
      {List.map((props, index) => {
        return (
          <Keg keg={props}
            key={index}
            index={index}
          />
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