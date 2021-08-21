import React, { Component } from 'react'
import { Modal } from "react-bootstrap";
export class SelectedBeast  extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose} style={{textAlign:'center'}}>
            <Modal.Header closeButton>
            <img  variant="top" src={this.props.selected.image_url} alt={this.props.selected.keyword} width="100%" height="60%" />         
            </Modal.Header>
            <Modal.Body>
            <Modal.Title>{this.props.selected.title}</Modal.Title>
            <p style={{ height: "75px" }}>{this.props.selected.description}</p>
            </Modal.Body>
          </Modal>
        )
    }
}

export default SelectedBeast 
