Character.prototype.giftsAndLegacies863 = function(eventchain){
	var giftOrLegacy = '';
	console.log('giftOrLegacy');
	if(eventchain === 'birthEvent'){
		this.birthEvent.push('A mysterious stranger bestows ' + giftOrLegacy + ' on ' + this.charName + ' at birth.');
	}
	if(eventchain === 'godChild'){
		this.birthEvent.push('As a result of his godly heritage ' + this.charName + ' was given ' + giftOrLegacy + ' at birth.');
	}
};

Character.prototype.birthMark866 = function(eventchain){
	var birthmark = '';
	console.log('birthmark');
	if(eventchain === 'birthEvent'){
		this.birthEvent.push(this.charName + " was born with " + birthmark);
	}
};

Character.prototype.curse868 = function(eventchain){
	console.log('oh no a curse!');
	var curse = '';
	if(eventchain === 'birthEvent'){
		this.birthEvent.push(this.charName + " was born with " + curse);
	}
	if(eventchain === 'demonBirth'){
		this.birthEvent.push('As a result of his demon heritage ' + this.charName + ' was born with ' + curse);
	}
};

Character.prototype.blessings869 = function(eventchain){
	var blessing = '';
	console.log('blessing');
	if(eventchain === 'birthEvent'){
		this.birthEvent.push(this.charName + " was born with " + blessing);
	}
	if(eventchain === 'godChild'){
		this.birthEvent.push('As a result of his godly heritage ' + this.charName + ' was born with ' + blessing);
	}
};

Character.prototype.royalRelation872 = function(){
	console.log("He's a noble harry");
};

Character.prototype.psychicAbilities873 = function(eventchain){
	var psychicPower = '';
	console.log('psychicPower');
	if(eventchain === 'birthEvent'){
		this.birthEvent.push(this.charName + " was born with " + psychicPower);
	}
};

Character.prototype.physicalAfflctions874 = function(eventchain){
	var physicalAfflictions = '';
	console.log('physicalAfflictions');
	if(eventchain === 'birthEvent'){
		this.birthEvent.push(this.charName + " was born with " + physicalAfflictions);
	}
	if(eventchain === 'demonBirth'){
		this.birthEvent.push('As a result of his demon heritage ' + this.charName + ' was born with ' + physicalAfflictions);
	}
	if(eventchain === 'godChild'){
		this.birthEvent.push('As a result of his godly heritage ' + this.charName + ' was born with ' + physicalAfflictions);
	}
};