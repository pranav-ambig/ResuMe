import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Draggable from "react-draggable";

function TextEditable(props) {
	let [text, setText] = useState("Text")
	let [textFontSize, settextFontSize] = useState(30);
	let [color, setColor] = useState("");
	const nodeRef = useRef(null)

	useEffect(()=>{props.sS({
		textcon: text,
		tfs: textFontSize,
		// key: props.key,
		st: setText,
		stfs: settextFontSize,
		setcol: setColor,
		col: color
	})})

	return (
		<Draggable 
		nodeRef={nodeRef} defaultPosition={{x:200, y:500}} 
		defaultClassName="absolute"
		
		onMouseDown={()=>{props.sS({
			textcon: text,
			tfs: textFontSize,
			// key: props.key,
			st: setText,
			stfs: settextFontSize,
			setcol: setColor,
			col: color
		})}}
		>
			<div 
			style={{width: 2*textFontSize}} 
			ref={nodeRef}>
				<p style={{fontSize: parseInt(textFontSize), cursor:"pointer", color: `${color}`}} ref={nodeRef}>{text}</p>
			</div>
		</Draggable>
	)

}

export default TextEditable;
