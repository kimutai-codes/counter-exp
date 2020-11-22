import React from 'react';
import Add from './add';
import Sub from './sub';
// learning how to use state

export default class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	add = () => {
		this.setState({ count: this.state.count + 1 });
	};

	decrement = () => {
		this.setState({ count: this.state.count - 1 });
	};

	render() {
		return (
			<div>
				<div>The count is now: {this.state.count} </div>
				<Add addBtn={this.add} />
				<Sub sub={this.decrement} />
				{/* <button style={myStyle} onClick={this.add} >+</button>
				<button style={myStyle} onClick={this.decrement}>-</button> */}
			</div>
		);
	}
}
