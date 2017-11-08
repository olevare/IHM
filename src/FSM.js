/*

DEPENDANCES:
Aucune

*/

/*

But:
Structurer le rendu/processing

*/


var FSMEnum = {
	IDLE: 0,
	SUJETS: 1,
	ETUDIANTS: 2,
	VALIDATE: 3,
	MATCH: 4
};

function FSM() {
    this.state = FSMEnum.IDLE;

    this.switchState = function(newState) {
    
    	this.state = newState;

    };

    this.init = function() { 

    	this.state = FSMEnum.IDLE;

    };
}