import React from 'react';
import { useState } from 'react';
import { fabric } from 'fabric';
import { Accordion, Button, Col, Form, Row, Image } from 'react-bootstrap';

function Control(props) {
	const [shape, setShape] = useState('rectangle');
	const [color, setColor] = useState('#000000');
	const [text, setText] = useState('');
	const [fontFamily, setFontFamily] = useState('Rubik');
	const [fontSize, setFontSize] = useState('20');
	const [isBold, setIsBold] = useState(false);
	const [isItalic, setIsItalic] = useState(false);
	const [isUnderline, setIsUnderline] = useState(false);
	const canvas = props.canvas;
	const imageURLS = [
		'img1.jpg',
		'img2.jpg',
		'img3.jpg',
		'img4.jpg',
		'img5.jpeg',
		'img6.jpg',
	];

	return (
		<div className='control' style={props.style}>
			<h2 style={{ padding: '0.5rem 1rem' }}>Controls</h2>
			<Accordion defaultActiveKey='0'>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>Shapes</Accordion.Header>
					<Accordion.Body>
						<Form>
							<Form.Group className='mb-3'>
								<Form.Label>Shape</Form.Label>
								<Form.Select
									aria-label='Default select example'
									onChange={(e) => {
										console.log(e.target.value);
										setShape(e.target.value);
									}}
								>
									<option value='rectangle'>Rectangle</option>
									<option value='square'>Square</option>
									<option value='circle'>Circle</option>
									<option value='triangle'>Triangle</option>
									<option value='elipse'>Elipse</option>
								</Form.Select>
								<Form.Label>Color</Form.Label>
								<Form.Control
									type='color'
									value={color}
									onChange={(e) => setColor(e.target.value)}
								/>
							</Form.Group>
							<Button
								variant='primary'
								type='submit'
								onClick={(e) => {
									e.preventDefault();
									addShape(shape, color, canvas);
								}}
							>
								Add
							</Button>
						</Form>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='1'>
					<Accordion.Header>Text</Accordion.Header>
					<Accordion.Body>
						<Form>
							<Form.Group className='mb-3'>
								<Row>
									<Col>
										<Form.Label>Text</Form.Label>
										<Form.Control
											type='text'
											placeholder='Enter text here'
											onChange={(e) =>
												setText(e.target.value)
											}
										/>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form.Label>Font Size</Form.Label>
									</Col>
									<Col>
										<Form.Label>Color</Form.Label>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form.Control
											type='number'
											value={fontSize}
											min={0}
											onChange={(e) =>
												setFontSize(e.target.value)
											}
										/>
									</Col>
									<Col>
										<Form.Control
											type='color'
											value={color}
											onChange={(e) =>
												setColor(e.target.value)
											}
										/>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form.Label>Font Style</Form.Label>
									</Col>
								</Row>
								<Row>
									<Col>
										<Button
											style={{
												width: 50,
												margin: '0px 0.5rem',
												backgroundColor: isBold
													? 'grey'
													: '#EDEADE',
												color: isBold
													? 'white'
													: 'black',
												border: 'none',
											}}
											onClick={() => setIsBold(!isBold)}
										>
											<i className='fa-sharp fa-solid fa-bold'></i>
										</Button>
										<Button
											style={{
												width: 50,
												margin: '0px 0.5rem',
												backgroundColor: isItalic
													? 'grey'
													: '#EDEADE',
												color: isItalic
													? 'white'
													: 'black',
												border: 'none',
											}}
											onClick={() =>
												setIsItalic(!isItalic)
											}
										>
											<i className='fa-sharp fa-solid fa-italic'></i>
										</Button>
										<Button
											style={{
												width: 50,
												margin: '0px 0.5rem',
												backgroundColor: isUnderline
													? 'grey'
													: '#EDEADE',
												color: isUnderline
													? 'white'
													: 'black',
												border: 'none',
											}}
											onClick={() =>
												setIsUnderline(!isUnderline)
											}
										>
											<i className='fa-solid fa-underline'></i>
										</Button>
									</Col>
								</Row>
							</Form.Group>
							<Button
								variant='primary'
								type='submit'
								onClick={(e) => {
									e.preventDefault();
									if (!text) return;
									addText(
										text,
										fontFamily,
										fontSize,
										isBold,
										isItalic,
										isUnderline,
										color,
										canvas
									);
								}}
							>
								Add
							</Button>
						</Form>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='2'>
					<Accordion.Header>Image</Accordion.Header>
					<Accordion.Body>
						<div
							className='d-flex-col justify-content-center align-items-center'
							style={{ overflowX: 'hidden', overflowY: 'auto' }}
						>
							{imageURLS.map((url) => {
								return (
									<Image
										src={`images\\${url}`}
										fluid={true}
										style={{
											width: '45%',
											margin: '2%',
										}}
										onClick={() => addImage(url, canvas)}
									/>
								);
							})}
						</div>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
}
function addShape(shape, color, canvas) {
	switch (shape) {
		case 'rectangle':
			const rect = new fabric.Rect({
				top: 10,
				left: 10,
				width: 100,
				height: 50,
				fill: `${color}`,
			});
			canvas.add(rect);
			break;
		case 'square':
			const square = new fabric.Rect({
				top: 10,
				left: 10,
				width: 100,
				height: 100,
				fill: `${color}`,
			});
			canvas.add(square);
			break;
		case 'circle':
			var circle = new fabric.Circle({
				top: 10,
				left: 100,
				radius: 50,
				fill: `${color}`,
			});
			canvas.add(circle);
			break;
		case 'triangle':
			var triangle = new fabric.Triangle({
				top: 10,
				left: 200,
				width: 100,
				height: 86.6,
				fill: `${color}`,
			});
			canvas.add(triangle);
			break;
		case 'elipse':
			var elipse = new fabric.Ellipse({
				top: 150,
				left: 10,
				rx: 100,
				ry: 50,
				fill: `${color}`,
			});
			canvas.add(elipse);
			break;
	}
}

function addText(
	content,
	fontFamily,
	fontSize,
	isBold,
	isItalic,
	isUnderline,
	color,
	canvas
) {
	const text = new fabric.Text(content, {
		left: 10,
		top: 10,
		fill: `${color}`,
		fontSize: fontSize,
		fontFamily: fontFamily,
		fontWeight: isBold ? 'bold' : '',
		fontStyle: isItalic ? 'italic' : '',
		underline: isUnderline,
	});
	canvas.add(text);
}

function addImage(url, canvas) {
	new fabric.Image.fromURL(`images\\${url}`, (img) => {
		let i = 1;
		while (img.getScaledWidth() > 300) {
			img.scale(1 / i);
			i++;
		}
		canvas.add(img);
		canvas.renderAll();
	});
}
export default Control;
