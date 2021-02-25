import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

// Steps for setting up basic context
// Setup a contextType
// Then use the this.context property

class Field extends Component {
	// Adds the this.context property to the class itself
	static contextType = LanguageContext;

	render() {
		const text = this.context === 'english' ? 'Name' : 'Naam';
		return (
			<div>
				<label>{text}</label>
				<input />
			</div>
		);
	}
}

export default Field;
