import React from 'react';

export class Key extends React.Component {
	render () {
		return (
			<div className={this.props.btn.style} onClick={() => this.props.keyFunc[this.props.btn.action](this.props.btn.displayText)}>
		        {this.props.btn.displayText}
		    </div>
		)
	}	
};