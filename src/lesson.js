import React from 'react';

const lesson = (props) => {
	const myStyle = {
		textDecoration: 'underline',
	};

	return (
		<div>
			<p>
				In this lesson I've learnt to
				<span style={myStyle}> manipilate state.</span>
				I used a <span style={myStyle}>counter function</span> .Currently
				I'm just doing experiments with react so I'm not sytling this.
			</p>
		</div>
	);
};

export default lesson;
