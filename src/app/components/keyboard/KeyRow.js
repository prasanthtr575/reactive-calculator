import React from 'react';
import { Key } from './Key';

export class KeyRow extends React.Component {
	render() {
		var keys = this.props.keys.map((item, i) => {
			return <Key btn={item} key={i}/>
		});
		return (
			<div className="row">
				{keys}
			</div>
		);
	}
	
}