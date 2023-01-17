function addShape(shape) {
	switch (shape) {
		case 'rectangle':
			const rect = new fabric.Rect({
				top: 10,
				left: 10,
				width: 100,
				height: 50,
				fill: 'white',
			});
			fabricRef.current.add(rect);
			break;
		case 'square':
			const square = new fabric.Rect({
				top: 10,
				left: 10,
				width: 100,
				height: 100,
				fill: 'white',
			});
			fabricRef.current.add(square);
			break;
		case 'circle':
			var circle = new fabric.Circle({
				top: 10,
				left: 100,
				radius: 50,
				fill: 'white',
			});
			fabricRef.current.add(circle);
			break;
		case 'triangle':
			var triangle = new fabric.Triangle({
				top: 10,
				left: 200,
				width: 100,
				height: 86.6,
				fill: 'white',
			});
			fabricRef.current.add(triangle);
			break;
		case 'elipse':
			var elipse = new fabric.Ellipse({
				top: 150,
				left: 10,
				rx: 100,
				ry: 50,
				fill: 'white',
			});
			fabricRef.current.add(elipse);
			break;
	}
}

function addH1(content) {
	const text = new fabric.Text(content, {
		left: 10,
		top: 10,
		fill: 'black',
		fontSize: 50,
		fontWeight: 800,
		fontFamily: 'Rubik',
	});
	fabricRef.current.add(text);
}

function addH2(content) {
	const text = new fabric.Text(content, {
		left: 10,
		top: 10,
		fill: 'black',
		fontSize: 40,
		fontWeight: 600,
		fontFamily: 'Rubik',
	});
	fabricRef.current.add(text);
}

function addText(content) {
	const text = new fabric.Text(content, {
		left: 10,
		top: 10,
		fill: 'black',
		fontSize: 20,
		fontFamily: 'Rubik',
	});
	fabricRef.current.add(text);
}

function addImage(url) {
	new fabric.Image.fromURL(url, (img) => {
		img.scale(0.75);
		fabricRef.current.add(img);
		fabricRef.current.renderAll();
	});
}
