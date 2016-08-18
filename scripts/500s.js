Character.prototype.tragedies528 = function(eventchain){
	var tragedy = '';
	console.log('tragedy');
if(eventchain === 'birthEvent'){
	this.birthEvent.push(this.charName + " was born immediately after " + tragedy + " Some superstitious folk who know of this occurance might believe that " + this.subjectivePronoun + " was related to the tragedy.");
}
};

Character.prototype.deathSituations545 = function(eventchain){
	var deathSituation = '';
	console.log('death event');
if(eventchain === 'birthEvent'){
	this.birthEvent.push("An old hag prophesies " + this.charName + "'s death." + deathSituation);
}
};

Character.prototype.underworld534  = function(){
	console.log('bad boy');
};