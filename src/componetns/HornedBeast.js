import React, { Component } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import SelectedBeast from "./SelectedBeast ";
export class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: 0,
      show:false
    };
  }

  render() {
    const increaseVotes = () => {
      this.setState({
        vote: this.state.vote + 1,
      });
    };;
    const handleClose = () => this.setState({show:false});
    const handleShow = () => this.setState({show:true});
    return (
<Card style={{ width: "18rem" }} className="m-3 col-3">
        <Card.Img variant="top" src={this.props.image_url} alt={this.props.keyword} width="100%" height="60%" onClick={handleShow}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text style={{ height: "100px" }}>
            {this.props.description}
          </Card.Text>
          <Card.Text>{this.state.vote}</Card.Text>
          <Button variant="success" className="w-50 position-relative bottom-5" onClick={increaseVotes}>Vote</Button>
          {/* <SelectedBeast imageurl={this.props.image_url} key_word={this.props.keyword} title_={this.props.title} description_={this.props.description} vote_={this.state.vote}/> */}
        </Card.Body>

        <Modal show={this.state.show} onHide={handleClose} style={{textAlign:'center'}}>
          <Modal.Header closeButton>
          <img  variant="top" src={this.props.image_url} alt={this.props.keyword} width="100%" height="60%"/>         
          </Modal.Header>
          <Modal.Body>
          <Modal.Title>{this.props.title}</Modal.Title>
          <p style={{ height: "75px" }}>{this.props.description}</p>
          </Modal.Body>
          <Modal.Footer>Number of votes  :  {this.state.vote}</Modal.Footer>
        </Modal>
</Card>
    );
  }
}

export default HornedBeast;
