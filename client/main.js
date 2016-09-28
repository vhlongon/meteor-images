// Any js in here is automatically ran for us

//import the React library
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ImageList from './components/ImageList';

//Create the root component
class App extends Component {

  constructor(props) {
    super(props);

    this.state = { images: [] }
  }

  // will only be called once when the comp is first rendered/loaded
  componentWillMount = () => {
    // Make a request for a user with a given ID
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
    // never initialize state like this.state.image = [ {}, {}] because of performance issues
    // only do that on the constructor, otherwise use setState as below
      .then(response => this.setState({ images: response.data.data }))
      .catch(error => this.setState({ error: error.message }));
  }

  render = () => {
    if (this.state.error) {
      return (
        <div>{this.state.error}</div>
      );
    } else if (!this.state.images.length) {
      return (
        <div>
          Loading
        </div>
      );
    } else {
      return (
        <div>
          <ImageList images={this.state.images}/>
        </div>
      );
    }
  }
}


//Render this component to the screen
// this says " wait until meteor is done with its stuff to run our code"
Meteor.startup(() => {
  ReactDOM.render(
    <App />,
    document.querySelector('.container')
  );

});
