import React from 'react';
import PropTypes from 'prop-types';


function NewKegForm(props) {
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;

  function handleNewKegSubmission(event) {
    event.preventDefault();

    props.onNewKegCreation({
      name: _name.value,
      brewer: _brewer.value,
      description: _description.value,
      abv: _abv.value,
      price: _price.value,
      remaining: _remaining.value
    });
    
    _name.value = '';
    _brewer.value = '';
    _description.value = '';
    _abv = '';
    _price = '';
    _remaining = '';
  }

  return (
    <div>
      <form onSubmit={handleNewKegSubmission}>
        <input
          type='text'
          id='name'
          placeholder='name'
          ref={(input) => { _name = input; }} />
        <input
          type='text'
          id='brewer'
          placeholder='brewer'
          ref={(input) => { _brewer = input; }} />
        <input
          type='text'
          id='description'
          placeholder='postText'
          ref={(input) => { _description = input; }} />
        <input
          type='number'
          id='abv'
          placeholder='abv'
          ref={(input) => { _abv = input; }} />
        <input
          type='number'
          id='price'
          placeholder='price'
          ref={(input) => { _price = input; }} />
        <input
          type='number'
          id='remaining'
          placeholder='remaining'
          ref={(input) => { _remaining = input; }} />
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;