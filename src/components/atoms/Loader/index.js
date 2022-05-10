import React from 'react';

import { Container } from './styles';

const Loader = () => {
  return (
    <Container>
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </Container>
  );
};

export default Loader;
