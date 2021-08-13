import React from 'react';
import PropTypes from 'prop-types';

interface Data {
    mensaje: string
  }

const Error = ({mensaje}: Data)=> {
    return ( 
        <p className="red darken-4 error">{mensaje}</p>
     );
}

export default Error;