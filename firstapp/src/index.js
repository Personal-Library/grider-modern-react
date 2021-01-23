import React from 'react';
import ReactDOM from 'react-dom';
// Import the React and ReactDOM libraries





const App = () => {
  return (
    <div>
      <label className="label" for="name">Enter name:</label>
      <input id="name" />
      <button style={ {backgroundColor: 'peru', color: 'white', border: 'none', borderRadius: '5px', marginLeft: '10px', fontSize: '12px', padding: '5px'} }>Submit</button>
    </div>
  );
}
// Create a react component





ReactDOM.render( <App />, document.querySelector("#root") );
// Take the react component and show it on the screen 