/* 

DEPENDANCES:
MenuBubble
FSM

*/

/*

BUT:
Coordonner les bubbles et afficher un menu

*/


function Menu() {
	this.bubbles = [];
	this.bubbles.push(new MenuBubble("Etudiants",FSMEnum.ETUDIANTS));
	this.bubbles.push(new MenuBubble("Sujets",FSMEnum.SUJETS));
	this.bubbles.push(new MenuBubble("Valider",FSMEnum.VALIDATE));
	this.bubbles.push(new MenuBubble("Choix",FSMEnum.MATCH));
	this.bubbles[3].toggle();

	this.render = function(x,y,w,h) {
		ctx.fillStyle = '#C3C3C3';
		ctx.fillRect(x, y, w, h);
		ctx.drawImage(rd1, x, y);
		ctx.drawImage(rd2, x+w-16, y);
		ctx.drawImage(rd3, x+w-16, y+h-16);
		ctx.drawImage(rd4, x, y+h-16);

		var i=0;
		for(bubble of this.bubbles)
		{
			bubble.render(x+(w/2), y+((h/5)*(i+1)));
			i++;
		}
	};

	this.getBubbles = function() {
		return this.bubbles;
	};

	this.validated = function() {
		this.bubbles[0].toggle();
		this.bubbles[1].toggle();
		this.bubbles[2].toggle();
		this.bubbles[3].toggle();
	};

}