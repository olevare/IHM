/*

DEPENDANCES:
ListOfAtoms

*/

/*

But:
Permet et encadre la transition entre la phase de notation et la phase d'affectation

*/


function Validator(e,s) {

	this.e = e;
	this.s = s;
	this.render = function(x,y,w,h) {

		// Render un gros carré qui indique les proportions pour valider le tri

		ctx.fillStyle = '#006633';
		//ctx.fillRect(x, y, w, h);
		this.ox = x;
		this.oy = y;
		this.ow = w;
		this.oh = h;
		ctx.fillStyle = '#000000';
		var ok = true;
		var i = 64;
		if (this.e.happy() >= Math.ceil(((this.e.elements.length)/4))) ctx.drawImage(tgreen, x+48, y+i-24);
		else {ctx.drawImage(tred, x+48, y+i-24);ok=false}
		i+=40
		ctx.fillText("Etudiants 7+: "+this.e.happy()+" . Minimum : "+Math.ceil(((this.e.elements.length)/4)),x+64,y+64);

		if (this.e.unhappy() <= Math.floor(((this.e.elements.length)/4))) ctx.drawImage(tgreen, x+48, y+i-24);
		else {ctx.drawImage(tred, x+48, y+i-24);ok=false}
		i+=40
		ctx.fillText("Etudiants 3-: "+this.e.unhappy()+" . Maximum : "+Math.floor(((this.e.elements.length)/4)),x+64,y+104);

		if (this.s.happy() >= Math.ceil(((this.s.elements.length)/4))) ctx.drawImage(tgreen, x+48, y+i-24);
		else {ctx.drawImage(tred, x+48, y+i-24);ok=false}
		i+=40
		ctx.fillText("Sujets 7+: "+this.s.happy()+" . Minimum : "+Math.ceil(((this.s.elements.length)/4)),x+64,y+144);

		if (this.s.unhappy() <= Math.floor(((this.s.elements.length)/4))) ctx.drawImage(tgreen, x+48, y+i-24);
		else {ctx.drawImage(tred, x+48, y+i-24);ok=false}
		i+=40
		ctx.fillText("Sujets 3-: "+this.s.unhappy()+" . Maximum:"+Math.floor(((this.s.elements.length)/4)),x+64,y+184);

		var i = 184+40+20;
		if (!e.checked()) 
			{
				ctx.drawImage(tblue, x+48, y+i-24);
				ctx.fillText("Attention! Des étudiants n'ont pas été notés." ,x+64,y+i);
				i+=40;
			}
		if (!s.checked()) 
			{
				ctx.drawImage(tblue, x+48, y+i-24);
				ctx.fillText("Attention! Des sujets n'ont pas été notés." ,x+64,y+i);
				i+=40;
			}


		ctx.fillStyle = '#33CC33';
		this.ox = x+(w/2)-128;
		this.oy = y+(w/6)*4;
		this.ow = 256;
		this.oh = 96;
		if (ok) ctx.drawImage(bgreen, this.ox, this.oy);
		else ctx.drawImage(bred, this.ox, this.oy);
		ctx.textAlign="center";
		ctx.textBaseline="middle";
		ctx.fillStyle = '#000000'; 
		ctx.fillText("Valider" ,this.ox+128, this.oy+48);
		ctx.textAlign="left";
		ctx.textBaseline="alphabetic"; 
		//ctx.fillRect(this.ox, this.oy, this.ow, this.oh);


	};


	this.clicked = function() {
		// Si tout va bien, inverser les states du menu
		if(this.e.happy() >= Math.ceil(((this.e.elements.length)/4))
			&& this.e.unhappy() <= Math.floor(((this.e.elements.length)/4))
			&& this.s.happy() >= Math.ceil(((this.s.elements.length)/4))
			&& this.s.unhappy() <= Math.floor(((this.s.elements.length)/4)))
		{

			Menu.validated();
    		FSM.switchState(FSMEnum.MATCH);
    		Matcher.shuffle();
		}

	};


}