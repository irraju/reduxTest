import React from 'react';


class NumberWithLabel extends React.Component {

  render(){
    return (
        <div className="numberWithLabel">
        	<span className="number">{this.props.bigNumber}</span>
        	<div className="label">{this.props.label}</div>
        </div>
    );
  }
}

NumberWithLabel.propTypes = {
  bigNumber: React.PropTypes.number,
  label: React.PropTypes.string,
};

export default NumberWithLabel;
