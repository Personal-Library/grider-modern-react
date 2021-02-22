// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
	const buttonText = 'Click me';
	const style = {
		backgroundColor: 'peru',
		color: 'white',
		border: 'none',
		borderRadius: '5px',
		marginLeft: '10px',
		fontSize: '12px',
		padding: '5px',
	};
	const labelText = 'Enter name:';

	return (
		<div>
			<label className="label" htmlFor="name">
				{labelText}
			</label>
			<input id="name" />
			<button style={style}>{buttonText}</button>
		</div>
	);
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
