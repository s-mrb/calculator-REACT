import React from 'react';


class Button extends React.Component{

    render(){
        return(
            <input
            type="button"
            value={this.props.label}
            onClick = {this.props.handleClick}
            />
            
            
        )
    }
}



// Export our button component. 
export default Button; 
