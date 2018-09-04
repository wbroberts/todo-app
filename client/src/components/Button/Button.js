import React from 'react';

import './Button.css';

const button = props => {
  const innerBtn = props.icon ? <i className={props.icon} /> : props.text;

  return (
    <button className="btn" onClick={props.clicked} disabled={props.disabled}>
      {innerBtn}
    </button>
  );
};

export default button;
