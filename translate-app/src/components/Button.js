import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export default class Button extends Component {
	renderButton(color) {
		return (
			<button className={`ui button ${color}`} style={{ marginTop: '10px' }}>
				<LanguageContext.Consumer>
					{(contextObject) => (contextObject.language === 'english' ? 'Submit' : 'Voorleggen')}
				</LanguageContext.Consumer>
			</button>
		);
	}

	// We are providing a function as a child to a React Component
	// That component is going to take that child function and automatically invoke it for us
	render() {
		// As indiciated by the ColorContext.Consumer, the only child MUST be a function
		// This example shows how you can use multiple contexts at the same time
		return <ColorContext.Consumer>{(value) => this.renderButton(value)}</ColorContext.Consumer>;
	}
}
