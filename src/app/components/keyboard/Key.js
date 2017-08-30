import React from 'react';

export class Key extends React.Component {
	render () {
		return (
			<div className={this.props.btn.style}>
		        {this.props.btn.displayText}
		    </div>
		);
	}	
};