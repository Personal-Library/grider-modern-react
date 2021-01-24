import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text" 
              value={this.state.term} 
              onChange={this.onInputChange}
              placeholder="Search for an image here"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;