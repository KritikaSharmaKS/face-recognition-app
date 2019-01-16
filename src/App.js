import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import SignIn from './components/SignIn/SignIn';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
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
      input: '',
      imageUrl: '',
      box: {},
		}
  }
  
  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  calculateFaceLocation = (response) => {
    const clarifaiFaceBox = response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol: clarifaiFaceBox.left_col * width,
      topRow: clarifaiFaceBox.top_row * height,
      rightCol: width - (clarifaiFaceBox.right_col * width),
      bottomRow : height - (clarifaiFaceBox.bottom_row * height)
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  OnButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    // Predict the contents of an image by passing in a URL.
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <SignIn />
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} OnButtonSubmit={this.OnButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/> 
      </div>
    );
  }
}

export default App;
