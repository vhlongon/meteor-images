// Any js in here is automatically ran for us

//import the React library
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ImageList from './components/ImageList';

//Create a component
const App = (props) => {
  return (
    <div>
      <ImageList />
    </div>
  );
}


//Render this component to the screen
// this says " wait until meteor is done with its stuff to run our code"
Meteor.startup(() => {
  ReactDOM.render(
    <App />,
    document.querySelector('.container')
  );
});
