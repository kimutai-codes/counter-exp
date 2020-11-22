import React from 'react'
// import ReactDom from 'react-dom'
import Counter from './counter'
import Lesson from './lesson'
const app = () =>{
    return (
		<div style={{ textAlign: 'center' }}>
			<h1>Counter Component</h1>
			<Counter />
            <Lesson/>
		</div>
	);
}

export default app