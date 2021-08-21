import React, { Component } from 'react'
import {Form, FloatingLabel} from 'react-bootstrap'

export class SelectedForm extends Component {
constructor(props){
    super(props)
    this.state={

    }
}
passSelectForm=(event)=>{
    let numberForm= parseInt(event.target.value)
    this.props.getSelectedForm(numberForm)
}
    render() {
        return (
            <div>
                <FloatingLabel controlId="floatingSelect" label="Works with selects" onChange={this.passSelectForm}>
                    <Form.Select aria-label="Floating label select example">
                        <option value="0">All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FloatingLabel>
            </div>
        )
    }
}

export default SelectedForm
