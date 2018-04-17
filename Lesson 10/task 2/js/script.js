class options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createDiv () {
		let newDiv = document.createElement('div');
		newDiv.innerHTML = '<strong> Новый DIV </strong>';
		document.body.appendChild(newDiv);
		newDiv.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
	}
}

const creatNewDiv = new options('100px', '200px', 'red', '20px', 'center');

creatNewDiv.createDiv();