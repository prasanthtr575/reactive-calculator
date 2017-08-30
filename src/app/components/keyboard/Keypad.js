import React from 'react';
import { KeyRow } from "./KeyRow";
import { KeyList } from "./KeyList";

export class Keypad extends React.Component {
	render() {	
		var rows = KeyList.map((rows, i) => {
	        return <KeyRow keys={rows.keys} key={i}/>;
      	});

		return (
			<div>
				{rows}
			</div>
		);
	}
}