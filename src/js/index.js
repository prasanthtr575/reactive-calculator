import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Reactive Calculator</h1>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("reactCalApp"));