import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; 

export default function Button({ label, onClick }) {
    return (
      <div className="button-container">
        <button className="custom-button" onClick={onClick}>
          {label}
        </button>
      </div>
    );
  }


Button.defaultProps = {
  style: {},
  className: '',
  disabled: false,
};

// Define prop types
Button.propTypes = {
  label: PropTypes.string.isRequired, 
  onClick: PropTypes.func.isRequired, 
  style: PropTypes.object,            
  className: PropTypes.string,        
  disabled: PropTypes.bool,           
};
