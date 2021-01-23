import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.jsx';
import Spinner from './Spinner.jsx';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     lat: null,
  //     errorMessage: ''
  //   }
  // }
  // // Alternate method of defining state without constructor! 

  state = {
    lat: null,
    errorMessage: ''
  }

  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude.toFixed(3) }),
      err => this.setState({ errorMessage: err.message })
    )
  }


  componentDidUpdate() {
    console.log('My component was just updated - it rerendered!')
  }


  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return (
      <Spinner message='Please accept location request to display scene!' />
    );
  }


  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))