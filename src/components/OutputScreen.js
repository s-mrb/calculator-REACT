import React from 'react';
import OutputScreenRow from './OutputScreenRow';


class OutputScreen extends React.Component{

    render(){
        return(
            <div className="screen">
            <OutputScreenRow value={this.props.question}/>
            <OutputScreenRow value={this.props.answer}/>
            </div>
        )
    }

}


export default OutputScreen;