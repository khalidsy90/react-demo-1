import React, { Component } from 'react'
// import { Modal } from "react-bootstrap";
export class SelectedBeast  extends Component {
    render() {
       console.log(this.props);
        return (
            <div>
        {/* <Modal show={this.props.show} onHide={this.props.handleClose} style={{textAlign:'center'}}>
          <Modal.Header closeButton>
          <img  variant="top" src={this.props.image_url} alt={this.props.keyword} width="100%" height="60%" onClick={this.props.handleShow}/>         
          </Modal.Header>
          <Modal.Body>
          <Modal.Title>{this.props.title}</Modal.Title>
          <p style={{ height: "75px" }}>{this.props.description}</p>
          </Modal.Body>
          <Modal.Footer>Number of votes  : </Modal.Footer>
        </Modal> */}
            </div>
        )
    }
}

export default SelectedBeast 
