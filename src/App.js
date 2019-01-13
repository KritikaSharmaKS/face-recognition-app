import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


 // Instantiate a new Clarifai app by passing in your API key.
const app = new Clarifai.App({apiKey: 'f25a16fb782a48a397cdca16d0574832'});

const particlesOptions = {
  particles: {
   number:{
     value: 100,
     density: {
      enable: true,
      value_area: 700
     }
   }
  }            
}

class App extends Component {
  constructor(){
		super();
		this.state = {
			input: ''
		}
  }
  
  onInputChange = (event) => {
    console.log(event.target.value);
  }

  OnButtonSubmit = () => {
    console.log("click");
    // Predict the contents of an image by passing in a URL.
    app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg')
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
          />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} OnButtonSubmit={this.OnButtonSubmit}/>
        {/*<FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
