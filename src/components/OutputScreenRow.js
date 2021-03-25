import React from 'react'; 


class OutputScreenRow extends React.Component{

    render(){
        return(
            <div className="screen-row">
                <input type="text" readOnly value={this.props.value}>
                
                </input>
            </div>
        )
    }
}




export default OutputScreenRow; 
