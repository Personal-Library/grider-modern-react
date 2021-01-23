import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: ''
    }
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        let latitude = position.coords.latitude.toFixed(2)
        this.setState({
          lat: latitude
        });
        console.log(latitude)
      },
      (err) => {
        this.setState({
          errorMessage: err.message
        });
        console.log(err.message)
      }
    )
  }




  render() {
    let content;
    if (this.state.lat) {
      content = `Latitude: ${this.state.lat}`
    } else if (this.state.errorMessage) {
      content = `Error: ${this.state.errorMessage}`
    } else {
      content = `Currently loading!`
    }



    return (
      <>
        <div>
          {content}
        </div>
        <SeasonDisplay />
      </>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))