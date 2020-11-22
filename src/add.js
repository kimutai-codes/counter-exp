// import React, { Component } from 'react';
// import ReactDom from 'react-dom';

// export default class Add extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {};
// 	}

// 	render() {
// 		return <button onClick={()=>this.props.add}> + </button>;
// 	}
// }

// const Add = (props) => {
// 	return <button onClick={props.addBtn}>+</button>
// };

function Add(props) {
	return <button onClick={props.addBtn}>+</button>;
}

export default Add;
