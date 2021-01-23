import React from 'react';

const Spinner = (props) => {

  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{props.message}</div>
    </div>
  );
}


// Can create defaultProps or create an or statement after the props.message variable
Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner;