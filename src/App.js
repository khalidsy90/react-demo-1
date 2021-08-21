import './App.css';
import Footer from './componetns/Footer';
import Header from './componetns/Header';
import Main from './componetns/Main';
import SelectedBeast from './componetns/SelectedBeast ';
import React, { Component } from 'react'
import info from "./componetns/hornesData.json";

export class App extends Component {
  constructor(props){
    super(props)
    this.state={
        show:false,
        selected:{},
        hornsNumber:0,
      }
}
handleClose = () => {
  this.setState({show:false})
   
};
handleShow = () => {
  this.setState({show:true})
  console.log('good')
};
getSelectedObj=(title) => {
  let sp= info.find(item => {
   return item.title === title  
  })
  this.setState({
  show:true,
  selected:sp
})
}


  render() {
    return (
      <div className="App">
        <Header/>
        <Main showModal={this.handleShow} handleClose={this.handleClose} getSelectedObj={this.getSelectedObj}/>
        <SelectedBeast show={this.state.show} selected={this.state.selected} handleClose={this.handleClose}/>
        <Footer/>
      </div>
    )
  }
}

export default App
