import React, { Component } from "react";
import { Container, Row,  } from "react-bootstrap";
import HornedBeast from "./HornedBeast";
import SelectedForm from "./SelectedForm";
import info from "./hornesData.json";
 
export class Main extends Component {
  constructor(props){
    super(props)
    this.state={
      value:0,
      form:info
    }
  }
  selectedObject=(title) =>{
    this.props.getSelectedObj(title)
   }
   getSelectedForm=async(num)=>{
    if(num === 0){
   await this.setState({
        form:info
      })
    }
    else{
      await this.setState({
        form:info.filter(item => item.horns === num)
      })
    }
    console.log(this.state.form);
   }
  render() {
    return (
      <Container>
       <SelectedForm getSelectedForm={this.getSelectedForm}/>
       <Row className="text-center justify-content-center">
        {this.state.form.map((item,idx) => (         
            <HornedBeast image_url={item.image_url} title={item.title} description={item.description} keyword={item.keyword} horns={item.horns} key={idx} selcObj={this.selectedObject}/>          
        ))}   
        </Row>
      </Container>
    );
  }
}

export default Main;
