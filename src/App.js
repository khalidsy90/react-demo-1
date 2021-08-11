import './App.css';
import Footer from './componetns/Footer';
import Header from './componetns/Header';
import Main from './componetns/Main';
// import SelectedBeast from './componetns/SelectedBeast ';
import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App
