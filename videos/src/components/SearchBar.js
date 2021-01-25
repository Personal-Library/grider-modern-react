import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};
	}

	handleChange = (event) => {
		this.setState({
			term: event.target.value,
		});
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.initSearch(this.state.term)
    this.setState({ term: '' })
  }

	render() {
		return (
			<div className="search-bar ui segment" style={{ marginTop: '20px' }}>
				<form className="ui form" onSubmit={this.handleSubmit}>
					<div className="field">
						<label>Video Search</label>
						<input
							type="text"
							value={this.state.term}
              onChange={this.handleChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
