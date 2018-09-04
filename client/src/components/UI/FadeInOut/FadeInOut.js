import React from 'react';
import { CSSTransition } from 'react-transition-group';

const fadeInOut = props => {
  return (
    <CSSTransition
      transitionName="fade-in-out"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      {props.children}
    </CSSTransition>
  );
};

export default fadeInOut;
