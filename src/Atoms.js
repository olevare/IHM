/* 

DEPENDANCES:
Aucune

*/

/*

But:
Représent les sujets et étudiants

*/

function Atoms(name) {

	this.name = name;
	this.note = 5;
	this.assigned = false;
	this.selected = false;
	this.ox = 0;
	this.oy = 0;
	this.ow = 0;
	this.oh = 0;

	this.render = function(x,y,w,h) {

		this.ox = x;
		this.oy = y;
		this.ow = w;
		this.oh = h;
		if (!this.selected)
			{
				// Apply color corresponding to notation to the box
			if (this.note >=1 && this.note <=3)
				ctx.fillStyle = '#AA6666';
			if (this.note >=4 && this.note <=6)
				ctx.fillStyle = '#888888';
			if (this.note >=7 && this.note <=9)
				ctx.fillStyle = '#66AA66';
			}

		if (!this.assigned) { ctx.fillStyle = '#6666AA';}
		if (this.selected == true) { ctx.fillStyle = '#4444FF';}
		ctx.fillRect(x, y, w, 64);
		// Modify text properties
		ctx.fillStyle = '#000000';
		ctx.textAlign="center";
		ctx.textBaseline="middle"; 
		if (this.selected == false) ctx.fillText(this.name+":"+this.note,x+w/2,y+h/2);
		else ctx.fillText(this.name,x+w/2,y+h/4);
		
		ctx.lineWidth = 2;
		ctx.strokeStyle = '#222222';
		ctx.strokeRect(x,y,w,h);
		if(this.selected)
			for(i=0;i<9;i++)
			{
			//
			
			// Draw background of note
			if (this.note == i+1)
			{
			if (this.note >=1 && this.note <=3)
				ctx.fillStyle = '#FF4444';
			if (this.note >=4 && this.note <=6)
				ctx.fillStyle = '#666666';
			if (this.note >=7 && this.note <=9)
				ctx.fillStyle = '#44FF44';
				ctx.fillRect(x+i*w/9,y+h/2,w/9,h/2);
			}
			else
			{
				ctx.fillStyle = '#AAAAAA';
				ctx.fillRect(x+i*w/9,y+h/2,w/9,h/2);
			}

			// Draw surrounding box
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#222222';
			ctx.strokeRect(x+i*w/9,y+h/2,w/9,h/2);
			// Draw corresponding note
			ctx.fillStyle = '#000000';
			ctx.fillText(i+1,(x+i*w/9)+w/18,(y+h/2)+h/4);
			}
		
		// Reset text properties
		ctx.textAlign="left";
		ctx.textBaseline="alphabetic"; 

	};


	this.clicked = function() {
		FSM.switchState(this.state);
	};


}