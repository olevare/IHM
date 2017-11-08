/*

DEPENDANCES:
ListOfAtoms

*/

/*

But:
Organise l'étape d'affectation sujet/étudiants

*/


function Matcher(e,s) {

	this.e = e;
	this.s = s;
	this.etu1=0;
	this.etu2=0;
	this.etu3=0;
	this.etu4=0;
	this.sbj=0;
	this.render = function(x,y,w,h) {

		// Render la scène de validation
		

		// Draw des indicateurs

		ctx.fillStyle = '#660033';
		//ctx.fillRect(x+48, y+48, 96, 96);
		//ctx.fillRect(x+48, y+48+16+96, 96, 96);		
		ctx.drawImage(fire, x+48, y+48);
		ctx.drawImage(heart, x+48, y+48+16+96);


		

		ctx.fillStyle = '#FFFFFF';
		ctx.textAlign="center";
		ctx.textBaseline="middle"; 
		var xx = x+48+48;
		var yy = y+48+48;
		ctx.fillText(Math.floor(this.powscore)+"%"  ,xx-1, yy-1);
		ctx.fillText(Math.floor(this.powscore)+"%"  ,xx-1, yy+1);
		ctx.fillText(Math.floor(this.powscore)+"%"  ,xx-1, yy);
		ctx.fillText(Math.floor(this.powscore)+"%"  ,xx+1, yy-1);
		ctx.fillText(Math.floor(this.powscore)+"%"  ,xx+1, yy+1);
		ctx.fillText(Math.floor(this.powscore)+"%"  ,xx+1, yy);
		ctx.fillText(Math.floor(this.powscore)+"%"  ,xx, yy-1);
		ctx.fillText(Math.floor(this.powscore)+"%"  ,xx, yy+1);
		ctx.fillStyle = '#000000';
		ctx.fillText(Math.floor(this.powscore)+"%"  ,xx, yy);
		ctx.fillStyle = '#FFFFFF';
		var xx = x+48+48;
		var yy = y+48+48+96+14;
		ctx.fillText(Math.floor(this.metascore)+"%"  ,xx-1, yy-1);
		ctx.fillText(Math.floor(this.metascore)+"%"  ,xx-1, yy+1);
		ctx.fillText(Math.floor(this.metascore)+"%"  ,xx-1, yy);
		ctx.fillText(Math.floor(this.metascore)+"%"  ,xx+1, yy-1);
		ctx.fillText(Math.floor(this.metascore)+"%"  ,xx+1, yy+1);
		ctx.fillText(Math.floor(this.metascore)+"%"  ,xx+1, yy);
		ctx.fillText(Math.floor(this.metascore)+"%"  ,xx, yy-1);
		ctx.fillText(Math.floor(this.metascore)+"%"  ,xx, yy+1);
		ctx.fillStyle = '#000000';
		ctx.fillText(Math.floor(this.metascore)+"%"  ,xx, yy);

		// Draw du sujet
		if (this.sbj.note >= 7)
        	{ctx.fillStyle = '#006600';
            ctx.strokeStyle = '#003300';}
        else
        	{ctx.fillStyle = '#666666';
            ctx.strokeStyle = '#333333';}
        if (this.sbj.note >=7) ctx.drawImage(sgreen, x+48+96+16+128+24, y+48+48+8);
        if (this.sbj.note < 7 && this.sbj.note > 3) ctx.drawImage(sgray, x+48+96+16+128+24, y+48+48+8);
		if (this.sbj.note <= 3) ctx.drawImage(sred, x+48+96+16+128+24, y+48+48+8);
		ctx.fillStyle = '#000000';
	    ctx.fillText("Sujet"  ,x+48+96+16 + ((x+w)-(x+48+96+16)-64)/2, y+48+48+8+48);


		// Draw des bulles
		for(i=0;i<4;i++)
		{
			ctx.beginPath();
	        ctx.arc(x+64+16+(w/4)*i, y+400, 60, 0, 2 * Math.PI, false);
	        if (i == 0) {
	        	ctx.drawImage(pblue, -64+x+64+16+(w/4)*i, -96+y+400);
	        }
	         if (i == 1) {
		         if (this.etu2.note >= 7)
		        	{ctx.drawImage(pgreen, -64+x+64+16+(w/4)*i, -96+y+400);}
		        else
		        	{ctx.drawImage(pgray, -64+x+64+16+(w/4)*i, -96+y+400);}
		    }	
		    if (i == 2) {
		         if (this.etu3.note >= 7)
		        	{ctx.drawImage(pgreen, -64+x+64+16+(w/4)*i, -96+y+400);}
		        else
		        	{ctx.drawImage(pgray, -64+x+64+16+(w/4)*i, -96+y+400);}	
		    }
		    if (i == 3) {
		         if (this.etu4.note >= 7)
		        	{ctx.drawImage(pgreen, -64+x+64+16+(w/4)*i, -96+y+400);}
		        else
		        	{ctx.drawImage(pgray, -64+x+64+16+(w/4)*i, -96+y+400);}	
		    }

        ctx.fillStyle = '#000000';
        if (i == 0) {
	        ctx.fillText("Vous"  ,x+64+16+(w/4)*i, y+400);
	    }
	    else {
			ctx.fillText("Collègue"  ,x+64+16+(w/4)*i, y+400);
	    }

		}

		

		// Draw des boutons de deny / Validate
		ctx.fillStyle = '#FF3333';
		ctx.drawImage(bred, x+32, y+520);
		ctx.fillStyle = '#33FF33';
		ctx.drawImage(bgreen, x+32+256+96, y+520);
		ctx.fillStyle = '#000000';
		ctx.fillText("Refuser"  ,x+32 + 128, y+520 + 48);
		ctx.fillText("Accepter"  ,x+32+256+96 + 128, y+520+48);
		ctx.textAlign="left";
		ctx.textBaseline="alphabetic"; 
		this.ox = x;
		this.oy = y;
	};

	this.shuffle = function() {
		// Trouve une solution
		 this.sbj= 0;
		 this.etu1 = -1; // Nous
		 this.etu2 = 0;
		 this.etu3 = 0;
		 this.etu4 = 0;

		this.sbj = this.s.elements[Math.floor(Math.random()*this.s.elements.length)];
		this.etu2 = this.e.elements[Math.floor(Math.random()*this.e.elements.length)];
		this.etu3 = this.e.elements[Math.floor(Math.random()*this.e.elements.length)];
		this.etu4 = this.e.elements[Math.floor(Math.random()*this.e.elements.length)];

		this.powscore = ((this.etu2.note + this.etu3.note + this.etu4.note )/ 3)*10;
		this.metascore = (((Math.random()*3+7)+(Math.random()*3+7)+(Math.random()*3+7))/3)*10;

	};

	this.validate = function() {
		// Si tout va bien, inverser les states du menu
		alert("Sujet assigné, fin du prototype!")
	};

	this.deny = function() {
		// Relance le processus d'affectation
		this.shuffle();
	};

}