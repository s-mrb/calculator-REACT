import React from 'react';

class CalculatorTitle extends React.Component {
    render() {
      return <div className="calculator_title">{this.props.calculator_title}</div>;
    }
  }


  CalculatorTitle.defaultProps = {
    calculator_title: "Calculator Default",
  };


export default CalculatorTitle;