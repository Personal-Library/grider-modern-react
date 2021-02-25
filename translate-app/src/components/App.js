import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
	state = { language: 'english' };

	onLanguageChange(language) {
		this.setState({ language });
	}

	render() {
		return (
			<div className='ui container'>
				<div>
					Select a language: &nbsp;
					<i className='flag us' onClick={() => this.onLanguageChange('english')} />
					<i className='flag nl' onClick={() => this.onLanguageChange('dutch')} />
				</div>
				{/* The prop provided MUST BE value */}
				<LanguageContext.Provider value={this.state.language}>
					<ColorContext.Provider value="red">
						<UserCreate />
					</ColorContext.Provider>
				</LanguageContext.Provider>
				{/* <LanguageContext.Provider value="dutch">
					<UserCreate />
				</LanguageContext.Provider>
				<UserCreate /> */}
			</div>
		);
	}
}

export default App;
