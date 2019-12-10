import React from 'react';


export default class CardFront extends React.Component{
    render(){
        //console.log(this.props.poster+" This poster")
        return(
            <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}></div> 
        )


    }


}

