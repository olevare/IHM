/* 

DEPENDANCES:
FSM

*/

/*

But:
Transiter entre les différentes states de la FSM

*/

function MenuBubble(name,state) {

	this.name = name;
	this.state = state;
	this.ox = 0;
	this.oy = 0;
	this.activated = true;

	this.render = function(x,y) {

		this.ox = x;
		this.oy = y;
        if (this.activated) ctx.drawImage(green, x-64, y-56);
        else ctx.drawImage(red, x-64, y-56);


        ctx.fillStyle = '#000000';
        ctx.textAlign="center";
		ctx.textBaseline="middle"; 
		ctx.fillText(this.name,x,y);
		ctx.textAlign="left";
		ctx.textBaseline="alphabetic"; 


	};

	this.toggle = function() {
		this.activated = !this.activated;
	};

	this.clicked = function() {
		FSM.switchState(this.state);
	};


}