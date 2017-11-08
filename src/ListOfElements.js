/*

DEPENDANCES:
Atoms

*/

/*

But:
Afficher et gérer les éléments à classifier

*/


function ListOfElements() {
	this.elements = [];
	this.scrollbar = false;
	this.offset = 0;

	this.render = function (x,y,w,h) {
		var i = 0;
		if (this.offset > (this.elements.length*64)-(y+w)) this.offset = (this.elements.length*64)-(y+w);
		if (this.offset < 0) this.offset = 0;

		if (this.elements.length*64 > w)
			{
				
				this.scrollbar = true;
				ctx.fillStyle = '#00FF00';
				ctx.fillRect(x+w-32, y, 32, 32);
				ctx.fillRect(x+w-32, y+h-32, 32, 32);
				ctx.drawImage(But_up, x+w-32, y);
				ctx.drawImage(But_down, x+w-32, y+h-32);
				var pct = this.offset/((this.elements.length*64)-(y+w));
			    ctx.drawImage(But_bit, x+w-16-8, y+40+pct*(w-64)-8);


				w-=32;
				
				// Scrollbar rendering
			}
		for (elem of this.elements)
		{
			elem.render(x, -this.offset+y+i*64, w, 64);
			i++;
		}

		ctx.drawImage(ird1, x-1, y);
		ctx.drawImage(ird2, x-1, y+h-16);
	};

	this.addElement = function(elem) {
		this.elements.push(elem);
	};

	this.happy = function() {
		var c = 0;
		for (elem of this.elements)
		{
			if (elem.note >= 7) c++;
		}
		return c;
	};

	this.unhappy = function() {
		var c = 0;
		for (elem of this.elements)
		{
			if (elem.note <= 3) c++;
		}
		return c;
	};


	this.delElement = function(id) {
		this.elements.splice(id,1);
	};

	this.checked = function() {
		var b = true;
		for (elem of this.elements)
		{
			if (!elem.assigned) b=false;
		}
		return b;
	}


	this.target = function() {
		return this.elements;
	};

}