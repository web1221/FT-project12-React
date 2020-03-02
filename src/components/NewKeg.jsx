import React from 'react';
import { connect } from 'react-redux';

function NewKeg(props) {
  let _names = null;
  let _brewery = null;
  let _AlcContent = null;
  let _image = null;

  function handleNewKegSubmission(event) {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_KEG',
      names: _names.value,
      brewery: _brewery.value,
      AlcContent: _AlcContent.value,
      image: _image.value,
    });
    _names.value = '';
    _brewery.value = '';
    _AlcContent.value = '';
    _image.value = '';
  }
  return (
    <div>
      <form onSubmit={handleNewKegSubmission}>
        <input
          type="text"
          placeholder="Keg Name..."
          ref={input => {
            _names = input;
          }}
        />
        <input
          type="text"
          placeholder="Brewery Name..."
          ref={input => {
            _brewery = input;
          }}
        />
        <input
          type="text"
          placeholder="Alchol Content..."
          ref={input => {
            _AlcContent = input;
          }}
        />
        <input
          type="text"
          placeholder="Image URL..."
          ref={input => {
            _image = input;
          }}
        />
        <button type="submit">Add Keg!</button>
      </form>
    </div>
  );
}

export default connect()(NewKeg);
