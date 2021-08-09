import React, { Component } from 'react'



export class HornedBeast extends Component {
    render() {
        return (
         <div>
             {this.props.details.map(item => (
                 <div key={item.keyword}>
                    <h2>{item.title}</h2>
                    <image src={item.image_url} alt={item.keyword}/>
                    <p>{item.description}</p>
                 </div>
             ))}
         </div>
        )
    }
}

export default HornedBeast
