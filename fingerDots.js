function fingerDots(canvas) {
	this.canvas = canvas;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	this.context = canvas.getContext("2d")
	this.context.lineCap = "round";
	this.context.radius = 75;

	this.fingers = {};

	canvas.addEventListener("mousedown", (function (ev) {
		window.alert("Please use a phone with multitouch support");
	}).bind(this));

	canvas.addEventListener('touchstart', (function(ev) {
		ev.preventDefault();
		for (var i = 0; i < ev.changedTouches.length; i++) {
			this.fingerStart(ev.changedTouches[i]);
		}
	}).bind(this));

	canvas.addEventListener("touchmove", (function (ev) {
		ev.preventDefault();
		for (var i = 0; i < ev.changedTouches.length; i++) {
			this.fingerMove(ev.changedTouches[i]);
		}
	}).bind(this));

	canvas.addEventListener("touchend", (function (ev) {
		ev.preventDefault();
		for (var i = 0; i < e.changedTouches.length; i++) {
			this.fingerEnd(ev.changedTouches[i]);
		}
	}).bind(this));
}

fingerDots.prototype = {
	fingerStart: function (ev) {
		var finger = {
			x: ev.pageX - this.canvas.offsetLeft,
			y: ev.pageY - this.canvas.offsetTop,
			color: randomColor()
		};
		this.fingers[ev.identifier] = finger;
		this.drawCircle(finger);
	},

	fingerMove: function (ev) {

	},

	fingerEnd: function (ev) {

	},

	drawCircle: function (finger) {
		this.context.beginPath();
		this.context.arc(finger.x, finger.y, this.context.radius, 0, 2* Math.PI, false);
		this.context.fillStyle = finger.color;
		this.context.fill();
		this.context.lineWidth = 3;
		this.context.strokeStyle = 'black';
		this.context.stroke();
	},

	moveCircle: function (finger) {

	}
}

function randomColor() {
	var r = Math.floor(Math.random() * 4 + 1) * 64,
		g = Math.floor(Math.random() * 4 + 1) * 64,
		b = Math.floor(Math.random() * 4 + 1) * 64;
	return "rgb(" + r + ", " + g + ", " + b + ")";
}