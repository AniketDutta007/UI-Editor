function CanvasComponent(props) {
	return (
		<div className='canvas-component' style={props.style}>
			<canvas
				id='canvas'
				ref={props.canvasRef}
				style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
			/>
		</div>
	);
}

export default CanvasComponent;
