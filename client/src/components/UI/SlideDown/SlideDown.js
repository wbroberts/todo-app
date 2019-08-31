import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './SlideDown.css';

const slideDown = props => {
  return (
    <CSSTransition
      in
      appear
      mountOnEnter
      unmountOnExit
      timeout={300}
      classNames="slide"
    >
      {props.children}
    </CSSTransition>
  );
};

export default slideDown;
