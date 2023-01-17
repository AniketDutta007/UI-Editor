import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import { fabric } from 'fabric';
import CanvasComponent from './CanvasComponent';
import Control from './Control';

function App() {
	const canvasRef = useRef(null);
	const fabricRef = useRef(null);
	const [canvas, setCanvas] = useState(null);

	useEffect(() => {
		if (!canvasRef.current) return;
		if (fabricRef.current) return;
		const canvas = new fabric.Canvas('canvas', {
			width: 500,
			height: 500,
			selection: false,
			backgroundColor: '#F9F6EE',
		});
		fabricRef.current = canvas;
		setCanvas(canvas);
	}, []);

	window.addEventListener('keydown', (event) => {
		if (event.keyCode == 46 && canvas.getActiveObject() != null) {
			canvas.remove(canvas.getActiveObject());
		}
	});

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				width: '100%',
				minHeight: '100vh',
			}}
		>
			<Control
				style={{
					flex: 2,
					backgroundColor: '#041E42',
					color: '#F9F6EE',
				}}
				canvas={canvas}
			/>
			<CanvasComponent
				style={{
					flex: 8,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: '#ADD8E6',
				}}
				canvasRef={canvasRef}
			/>
		</div>
	);
}

export default App;
