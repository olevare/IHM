/*

DEPENDANCES:
Doit être appelé en dernier

*/

function start() {
	//Pas de "strict mode", car définition de variables globales (bloquées otherwise)

	/*

	Déclarations des variables à accès rapide

	*/


	But_up =  new Image();
    But_up.src = './src/img/../img/but_up.png';
    But_down =  new Image();
    But_down.src = './src/img/but_down.png';
    But_bit =  new Image();
    But_bit.src = './src/img/but_bit.png';
	rd1 =  new Image();
    rd1.src = './src/img/rd1.png';
	rd2 =  new Image();
    rd2.src = './src/img/rd2.png';
	rd3 =  new Image();
    rd3.src = './src/img/rd3.png';
    rd4 =  new Image();
    rd4.src = './src/img/rd4.png';

    ird1 =  new Image();
    ird1.src = './src/img/ird1.png';
	ird2 =  new Image();
    ird2.src = './src/img/ird2.png';

    fire =  new Image();
    fire.src = './src/img/fire.png';
	heart =  new Image();
    heart.src = './src/img/heart.png';

    red =  new Image();
    red.src = './src/img/red.png';
	green =  new Image();
    green.src = './src/img/green.png';
    blue =  new Image();
    blue.src = './src/img/blue.png';
	gray =  new Image();
    gray.src = './src/img/gray.png';

	pred =  new Image();
    pred.src = './src/img/pred.png';
	pgreen =  new Image();
    pgreen.src = './src/img/pgreen.png';
    pblue =  new Image();
    pblue.src = './src/img/pblue.png';
	pgray =  new Image();
    pgray.src = './src/img/pgray.png';

    bred =  new Image();
    bred.src = './src/img/bred.png';
	bgreen =  new Image();
    bgreen.src = './src/img/bgreen.png';
	bgray =  new Image();
    bgray.src = './src/img/bgray.png';


    tred =  new Image();
    tred.src = './src/img/tred.png';
	tgreen =  new Image();
    tgreen.src = './src/img/tgreen.png';
	tblue =  new Image();
    tblue.src = './src/img/tblue.png';

    sred =  new Image();
    sred.src = './src/img/sred.png';
	sgreen =  new Image();
    sgreen.src = './src/img/sgreen.png';
	sgray =  new Image();
    sgray.src = './src/img/sgray.png';














	cvs = document.getElementById("mainCanvas"); // Le canvas
	ctx = cvs.getContext("2d"); // Le contexte
	FSM = new FSM(); // Machine à états, pour savoir ce qu'on doit render/process (voir FSM.js)
	FSM.init();
	Menu = new Menu();

	Etudiants = new ListOfElements();
	Etudiants.addElement(new Atoms("Morgan FOUQUE"));
	Etudiants.addElement(new Atoms("Guilhem TRAUCHESSEC"));
	Etudiants.addElement(new Atoms("Tristan COSSIN"));
	Etudiants.addElement(new Atoms("Wolfgang Amadeus MOZART"));
	Etudiants.addElement(new Atoms("Johan Sebastian BACH"));
	Etudiants.addElement(new Atoms("Ludwig van BEETHOVEN"));
	Etudiants.addElement(new Atoms("Claude DEBUSSY"));
	Etudiants.addElement(new Atoms("Franz LISZT"));
	Etudiants.addElement(new Atoms("Robert SCHUMANN"));
	Etudiants.addElement(new Atoms("Maurice RAVEL"));
	Etudiants.addElement(new Atoms("Frédéric CHOPIN"));
	Etudiants.addElement(new Atoms("Joseph HAYDN"));
	Etudiants.addElement(new Atoms("Johannes BRAHMS"));
	Etudiants.addElement(new Atoms("Franz SCHUBERT"));
	Etudiants.addElement(new Atoms("Richard WAGNER"));
	Etudiants.addElement(new Atoms("Antonio VIVALDI"));
	Etudiants.addElement(new Atoms("Georg Friedrich HAENDEL"));
	Etudiants.addElement(new Atoms("Piotr Ilitch TCHAÏKOVSKI"));
	Etudiants.addElement(new Atoms("Guiseppe VERDI"));


	Sujets = new ListOfElements();
	Sujets.addElement(new Atoms("Gestion de graphes"));
	Sujets.addElement(new Atoms("Animation 3D"));
	Sujets.addElement(new Atoms("Analyse de conception"));
	Sujets.addElement(new Atoms("Epistémologie"));
	Sujets.addElement(new Atoms("Etude des lettres"));
	Sujets.addElement(new Atoms("Algorithmes discrets"));
	Sujets.addElement(new Atoms("Traitement du signal"));
	Sujets.addElement(new Atoms("Réseau et communication"));

	Validator = new Validator(Etudiants,Sujets);
	Matcher = new Matcher(Etudiants,Sujets);

	
	ctx.font="24px Tahoma";
	initialize_main();

	loop();

	cvs.x_menu = 16;
	cvs.y_menu = 16;
	cvs.w_menu = 256;
	cvs.h_menu = cvs.height-32;

	cvs.x_screen = (cvs.x_menu+cvs.w_menu)+16;
	cvs.y_screen = 16;
	cvs.w_screen = (cvs.width-cvs.x_screen)-16
	cvs.h_screen = cvs.height-32;
	
}

function loop(){
	// Reprocessing size of canvas
	cvs.x_menu = 16;
	cvs.y_menu = 16;
	cvs.w_menu = 256;
	cvs.h_menu = cvs.height-32;

	cvs.x_screen = (cvs.x_menu+cvs.w_menu)+16;
	cvs.y_screen = 16;
	cvs.w_screen = (cvs.width-cvs.x_screen)-16
	cvs.h_screen = cvs.height-32;
	


	


	ctx.fillStyle = '#7F7F7F';
	ctx.fillRect(0, 0, cvs.width, cvs.height);
	ctx.fillStyle = '#999999';
	ctx.fillRect(cvs.x_screen,cvs. y_screen, cvs.w_screen, cvs.h_screen);
	ctx.fillStyle = '#7F7F7F';


	Menu.render(cvs.x_menu, cvs.y_menu, cvs.w_menu, cvs.h_menu);

	switch (FSM.state)
	{
		case FSMEnum.IDLE:
		// Nothing
		break;

		case FSMEnum.ETUDIANTS:
		Etudiants.render(cvs.x_screen,cvs.y_screen,cvs.w_screen,cvs.h_screen);
		break;

		case FSMEnum.SUJETS:
		Sujets.render(cvs.x_screen,cvs.y_screen,cvs.w_screen,cvs.h_screen);
		break;

		case FSMEnum.VALIDATE:
		Validator.render(cvs.x_screen+32,cvs.y_screen+32,cvs.w_screen-64,cvs.h_screen-64);
		break;

		case FSMEnum.MATCH:
		Matcher.render(cvs.x_screen+32,cvs.y_screen+32,cvs.w_screen-64,cvs.h_screen-64);
		break;

	}

	// Drawing over unwanted sections (CLUMSY, should find a way to fix that one day...)
	ctx.fillStyle = '#7F7F7F';
	ctx.fillRect(0, 0, cvs.w_screen+cvs.x_screen, cvs.y_screen);
	ctx.fillRect(0, cvs.h_screen+cvs.y_screen, cvs.w_screen+cvs.x_screen, cvs.y_screen);
	window.requestAnimationFrame(loop);

}
/*

CLICK HANDLER

*/
function initialize_main() {

// Mouse adjustments for the onclick event
elemLeft = cvs.offsetLeft,
elemTop = cvs.offsetTop,
to = -1;
x = -1;
y = -1;
md = false;
cvs.addEventListener('click', function(event) {
    x = event.pageX - elemLeft,
    y = event.pageY - elemTop;

    // Check for menu clicks
    Menu.getBubbles().forEach(function(element) {
    	// Checking circular collision ( sqrt(a²+b²) )
        if (Math.sqrt(Math.pow(element.ox-x,2)+Math.pow(element.oy-y,2))<63 && element.activated) {
            element.clicked();
        }
    });

    // Check for listing clicks
    if (FSM.state == FSMEnum.SUJETS || FSM.state == FSMEnum.ETUDIANTS)
    {
		if (FSM.state == FSMEnum.ETUDIANTS) to = Etudiants
		if (FSM.state == FSMEnum.SUJETS) to = Sujets;
		var sth = false;
		to.target().forEach(function(elt) {

			if (x > elt.ox && x < elt.ox+elt.ow && y > elt.oy && y < elt.oy+elt.oh)
			{
				sth = true;
				if (!elt.selected)
				{
					// Deselect everything and select this one
		    		to.target().forEach(function(eelt) { eelt.selected = false;});
		    		elt.selected = true;
		    	}
		    	else
		    	{
		    		// Apply notation
		    		var note = (x-elt.ox)/(elt.ow)*9
		    		if (y > elt.oy+(elt.oh/2) && y < elt.oy+(elt.oh))
		    		{
		    		elt.note = Math.floor(note)+1;
		    		elt.assigned = true;
		    		}

		    		

		    	}

			}
				
		});
		if (!sth) // If no actions percepted, resets selection.
				{
					to.target().forEach(function(eelt) { eelt.selected = false;});
				}
		if (to.scrollbar)
		{
			// Scrollbar code 
			
			var l = cvs.x_screen+cvs.w_screen-32;
			var r = cvs.x_screen+cvs.w_screen;
			var u = cvs.y_screen;
			var d = cvs.y_screen+cvs.h_screen;
			if (x > l && x < r  && y < d && y > u) 
			{
				// Check upper/lower squares for flat increase
				if (y < u+32) to.offset-=64;
				if (y > d-32) to.offset+=64; 
			}
		}
	}

    // Check for validation

    if (FSM.state == FSMEnum.VALIDATE)
    {
    	if (x >= Validator.ox && x <= Validator.ox+Validator.ow && y >= Validator.oy && y <= Validator.oy+Validator.oh)
    	{
    		Validator.clicked();
    	}
    }

    // Checks for the match state
    if (FSM.state == FSMEnum.MATCH)
    {
    	if (x >= Matcher.ox && x <= Matcher.ox+256 && y >= Matcher.oy+520 && y <= Matcher.oy+520+96)
    	{
    		Matcher.deny();
    	}

    	if (x >= Matcher.ox+32+256+96 && x <= Matcher.ox+32+256+96+256 && y >= Matcher.oy+520 && y <= Matcher.oy+520+96)
    	{
    		Matcher.validate();
    	}
    }















ctx.fillRect(x+32, y+520, 256, 96);
		ctx.fillStyle = '#33FF33';
		ctx.fillRect(x+32+256+96, y+520, 256, 96);




































}, false);
scrollSB = function() {
	x = event.pageX - elemLeft,
    y = event.pageY - elemTop;
	if (md) // Additional code for soft scrollbar movement
	{
		// Scrollbar code 
		to.offset = ((y-8-cvs.y_screen-32)/(cvs.w_screen-64))*((to.elements.length*64)-cvs.w_screen)
		// Slide scrollbar for soft increase
	}
};
cvs.addEventListener('mousedown', function(event) {
	x = event.pageX - elemLeft,
    y = event.pageY - elemTop;
	var l = cvs.x_screen+cvs.w_screen-32;
	var r = cvs.x_screen+cvs.w_screen;
	var u = cvs.y_screen;
	var d = cvs.y_screen+cvs.h_screen;
	if (x > l && x < r  && y < d && y > u) // Additional code for soft scrollbar movement
	{
	md = true;
	}
	scrollSB();

	

}, false);
cvs.addEventListener('mouseup', function(event) {

	md = false;

}, false);
cvs.addEventListener('mousemove', function(event) {
	x = event.pageX - elemLeft,
    y = event.pageY - elemTop;
	scrollSB();

}, false);

function MouseWheelHandler(e) {

	// cross-browser wheel delta
	var e = window.event || e; // old IE support
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	if (delta <= 0) to.offset +=64;
	else to.offset -= 64;
}

if (cvs.addEventListener) {
	// IE9, Chrome, Safari, Opera
	cvs.addEventListener("mousewheel", MouseWheelHandler, false);
	// Firefox
	cvs.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
}
// IE 6/7/8
else cvs.attachEvent("onmousewheel", MouseWheelHandler);







}