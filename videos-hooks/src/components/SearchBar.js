import React, { useState } from 'react';

const SearchBar = (props) => {
	const [term, setTerm] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		props.search(term);
		setTerm('');
	};

	return (
		<div className="search-bar ui segment" style={{ marginTop: '20px' }}>
			<form className="ui form" onSubmit={handleSubmit}>
				<div className="field">
					<label>Video Search</label>
					<input
						type="text"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
