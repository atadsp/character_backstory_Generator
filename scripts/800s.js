Character.prototype.giftsAndLegacies863 = function(eventchain){
	var giftOrLegacy = '';
	console.log('giftOrLegacy');
	if(eventchain === 'birthEvent'){
		this.birthEvent.push('A mysterious stranger bestows ' + giftOrLegacy + ' on ' + this.charName + ' at birth.');
	}
	if(eventchain === 'godChild'){
		this.birthEvent.push('As a result of his godly heritage ' + this.charName + ' was given ' + giftOrLegacy + ' at birth.');
	}
	if(eventchain === 'npc'){
		npc.note.push(npc.charName + ' possesses a ' + giftOrLegacy);
	}
};

Character.prototype.deities864 = function(eventchain){
	var diety = "";
	if(eventchain === 'birthEvent'){
		console.log('something about a diety?');
	}
};

Character.prototype.birthMark866 = function(eventchain){
	var birthmark = '';
	console.log('birthmark');
	if(eventchain === 'birthEvent'){
		this.birthEvent.push(this.charName + " was born with " + birthmark);
	}
};

Character.prototype.bodyLocation867 = function(eventchain, table){
	var bodypart = "";

	if(eventchain === 'birthEvent' && table === 'curse'){
		this.birthEvent.push(this.charName + " was born with " + bodypart + " scaled over and monsterous.");
	} else if (eventchain === 'demonBirth' && table === 'curse'){
		this.birthEvent.push('As a result of his demon heritage ' + this.charName + ' was born with ' + bodypart + " scaled over and monsterous.");
	}
};

Character.prototype.curses868 = function(eventchain){
	var d3 = Math.floor(Math.random() * (3 -1 + 1) + 1);
	var d4 = Math.floor(Math.random() * (4 -1 + 1) + 1);
	var d6 = Math.floor(Math.random() * (6 -1 + 1) + 1);
	var ranCurse = Math.floor(Math.random() * (19 -1 + 1) + 1);
	var cmpt = false;
	var curse = '';
	switch(ranCurse){
		case 1:
			for(i =0; i < d4; i++){
				this.darksideTrait648();
			}
			curse = "several dark side traits.";
			cmpt = true;
		break;
		case 2:
			curse = "a marred apperance.";
			this.charisma -= d6;
			cmpt = true;
		break;
		case 3:
			curse = "a curse that they will be responsible for the death of a lover.";
			this.loverDeath = true;
			cmpt = true;
		break;
		case 4:
			curse = "being klutzed.";
			this.specialBonus.push('10% chance to fumble each roll.');
			cmpt = true;
		break;
		case 5:
			curse = "being tongue-tied and cannot speak in the presence of a member of the opposite sex.";
			cmpt = true;
		break;
		case 6:
			curse = "becoming a lycanthrope.";
			cmpt = true;
		break;
		case 7:
			this.bodyLocation867(eventchain, 'curse');
		break;
		case 8:
			curse = "only the ability able to join chaotic or evil cults and religions. All others will reject the " + this.objectivePronoun +".";
			cmpt = true;
		break;
		case 9:
			this.physicalAfflctions874(eventchain);
		break;
		case 10:
			curse = "recurring nightmares.";
			this.specialBonus.push('Loss of sleep deducts 1d3 ranks from ' + this.charName + "'s skills due to fatigue. " + this.subjectivePronoun + " has a 5% chance of having a nightmare each night. Once the nightmares start the chance of having a nightmare the next night increases by 5%.");
			cmpt = true;
		break;
		case 11:
			curse = "acting as a bad luck talisman.";
			this.specialBonus.push('Roll a d6. Every time a partymember makes a skill check they roll a d10. IF the result of the d10 is equal to or less than your d6 roll they fumble the check.');
			cmpt = true;
		break;
		case 12:
			curse = "suffering from fits of madness.";
			this.mentalAfflictions649b();
			cmpt = true;
		break;
		case 13:
			for(i = 0; i <d4; i++){
				this.tragedies528(eventchain);
			}
		break;
		case 14:
			curse = "being an unaffected carrier of a virulent and deadly disease.";
			cmpt = true;
		break;
		case 15:
			curse = "being subject to fits of berserker rage.";
			this.specialBonus.push('Roll a d10 to determin the strength of ' + this.charName + "'s beserker rage. Whenever engaged in combat they must roll a d100 to determine if they fall into a rage. While in rage " + this.subjectivePronoun + " gains an amount of hp equal to half his total hp and ignores all effects of damage until killed. " + this.subjectivePronoun + " also deals an extra 1d6 damage on each attack. " + this.subjectivePronoun + " has a 30% chance to attack near by allies while in a berserker rage and if" + this.subjectivePronoun + " is a lycanthrope they automaticly transform into one while raged. After being raged " + this.subjectivePronoun + " becomes depressed for 1d10 days and reduces all skill bonuses by half.");
			cmpt = true;
		break;
		case 16:
			this.charCulture = "Nomad";
			curse = "being condemned to live a nomadic lifestyle. " + this.subjectivePronoun + " can never stay in one place for more than a year.";
			cmpt = true;
		break;
		case 17:
			curse = "being haunted and attacked by a ghost or evil spirit oince ever d100 days.";
			cmpt = true;
		break;
		case 18:
			curse = "always being blamed for the commission of heinous acts that occur in the same locale as " + this.objectivePronoun;
			cmpt = true;
		break;
		case 19:
			for(i=0; i< d3; i++){
				this.curses868(eventchain);
			}
		break;
	}
	if(cmpt === true){
		if(eventchain === 'birthEvent'){
			this.birthEvent.push(this.charName + " was born with " + curse);
		} else if(eventchain === 'demonBirth'){
			this.birthEvent.push('As a result of his demon heritage ' + this.charName + ' was born with ' + curse);
		}
	}
};

Character.prototype.blessings869 = function(eventchain){
	var blessing = '';
	console.log('blessing');
	if(eventchain === 'birthEvent'){
		this.birthEvent.push(this.charName + " was born with " + blessing);
	} else if(eventchain === 'godChild'){
		this.birthEvent.push('As a result of his godly heritage ' + this.charName + ' was born with ' + blessing);
	}
};

Character.prototype.seriousWounds870 = function(eventchain){
	var seriousWound = "";

	if(eventchain === 'npc'){
		npc.note.push(npc.charName + " received " + seriousWound);
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
	} else if(eventchain === 'demonBirth'){
		this.birthEvent.push('As a result of his demon heritage ' + this.charName + ' was born with ' + physicalAfflictions);
	} else if(eventchain === 'godChild'){
		this.birthEvent.push('As a result of his godly heritage ' + this.charName + ' was born with ' + physicalAfflictions);
	}
};

Character.prototype.unusualSkill876 = function(){
	console.log('Unusual Skill');
};