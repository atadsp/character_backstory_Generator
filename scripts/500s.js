Character.prototype.tragedies528 = function(eventchain){
	var tragedy = '';
	console.log('tragedy');
if(eventchain === 'birthEvent'){
	if(this.birthEvent.includes(this.charName + " was born immediately after " + tragedy + " Some superstitious folk who know of this occurance might believe that " + this.subjectivePronoun + " was related to the tragedy.") === false){
		this.birthEvent.push(this.charName + " was born immediately after " + tragedy + " Some superstitious folk who know of this occurance might believe that " + this.subjectivePronoun + " was related to the tragedy.");
	}
} else if(eventchain === 'childhood'){
	this.childEvent.push(this.charName + " experienced " + tragedy);
} else if(eventchain === 'adolescent'){
	this.adolecentEvent.push(this.charName + " experienced " + tragedy);
}
};

Character.prototype.somethingWonderful529 = function(eventchain){
	var wonderfulEvent = "";
	if(eventchain === 'childhood'){
		this.childEvent.push(this.charName + " experienced " + wonderfulEvent);
	} else if(eventchain === 'adolescent'){
		this.adolecentEvent.push(this.charName + " experienced " + wonderfulEvent);
	}
};
Character.prototype.underworld534  = function(eventchain){

	if(eventchain === 'childhood'){
		console.log('childhood criminal');
	} else if (eventchain ==='adolescent'){
		console.log('teen criminal');
	} else if (eventchain === 'civilized'){
		console.log('bad boy');
	}
};
Character.prototype.militaryExperience535a = function(eventchain){

	if(eventchain === 'npc'){
		console.log('NPC did some fighting');
	}
};

Character.prototype.religiousExperience541 = function(eventchain){

	if(eventchain === "childhood"){
		console.log('childhood indoctrination');
	} else if (eventchain === "adolescent"){
		console.log('adolescent choice');
	}
};

Character.prototype.inServiceOf543 = function(eventchain){

	if(eventchain === 'npc'){
		console.log('NPC has a dude');
	}
};

Character.prototype.exoticEvents544 = function(eventchain){
	var exoticEvent = "";

	if(eventchain === 'npc'){
		npc.note.push(exoticEvent);
	}
};

Character.prototype.deathSituations545 = function(eventchain){
	var deathSituation = '';
	console.log('death event');
if(eventchain === 'birthEvent'){
	this.birthEvent.push("An old hag prophesies " + this.charName + "'s death." + deathSituation);
}
};
