import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('Programming');
	const [debouncedTerm, setDebouncedTerm] = useState(term)
	const [results, setResults] = useState([]);

	useEffect(() => {
		const timerID = setTimeout(() => {
			setDebouncedTerm(term);
		}, 1000);
		return () => clearTimeout(timerID)
	}, [term])

	useEffect(() => {
		const search = async() => {
			const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: debouncedTerm
				},
			});
			setResults(data.query.search)
		};

		debouncedTerm ? search() : console.log('No search term')

	}, [debouncedTerm])

	const renderedResults = results.map((result) => {
		return (
			<div className="item" key={result.pageid}>
				<div className="right floated content">
					<a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank" rel="noreferrer">Go</a>
				</div>
				<div className="content">
					<div className="header">
						{result.title}
					</div>
					<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
				</div>
			</div>
		);
	})

	return (
		<div className="ui container">
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input
						value={term}
						onChange={(e) => setTerm(e.target.value)}
						className="input"
					/>
				</div>
			</div>
			<div className="ui celled list">
				{renderedResults}
			</div>
		</div>
	);
};

export default Search;
