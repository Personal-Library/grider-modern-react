import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class LanguageSelector extends Component {
	static contextType = LanguageContext;
	render() {
		const { onLanguageChange } = this.context;
		return (
			<div>
				Select a language: &nbsp;
				<i className='flag us' onClick={() => onLanguageChange('english')} />
				<i className='flag nl' onClick={() => onLanguageChange('dutch')} />
			</div>
		);
	}
}
