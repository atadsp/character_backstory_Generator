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
	} else if (eventchain === 'birthEvent' && table === 'blessing'){
		this.birthEvent.push(this.charName + ' was born with exceptionally beautiful ' + bodypart + '.');
	}
};

Character.prototype.curses868 = function(eventchain){
	var d3 = Math.floor(Math.random() * (3 -1 + 1) + 1);
	var d4 = Math.floor(Math.random() * (4 -1 + 1) + 1);
	var d6 = Math.floor(Math.random() * (6 -1 + 1) + 1);
	var ranCurse = Math.floor(Math.random() * (18 -1 + 1) + 1);
	var cmpt = false;
	var curse = '';
	switch(ranCurse){
		case 1:
			for(i =0; i < d4; i++){
				this.darkSideTraits.push('D');
			}
			curse = "several dark side traits.";
			cmpt = true;
		break;
		case 2:
			if(this.blessings.includes(2) === true){
				this.curses868(eventchain);
			} else {
			curse = "a marred apperance.";
			this.charisma -= d6;
			cmpt = true;
			this.curses.push(2);
			}
		break;
		case 3:
		if(this.blessings.includes(3) === true){
				this.curses868(eventchain);
			} else {
			curse = "a curse that they will be responsible for the death of a lover.";
			this.loverDeath = true;
			cmpt = true;
			this.curses.push(3);
		}
		break;
		case 4:
			if(this.blessings.includes(4) === true){
				this.curses868(eventchain);
			} else {
				curse = " being klutzed.";
				this.specialBonus.push('10% chance to fumble each roll.');
				cmpt = true;
				this.curses.push(4);
			}
		break;
		case 5:
			if(this.blessings.includes(5) === true){
				this.curses868(eventchain);
			} else {
			curse = "being tongue-tied and cannot speak in the presence of a member of the opposite sex.";
			cmpt = true;
			this.curses.push(5);
			}
		break;
		case 6:
			curse = "becoming a lycanthrope.";
			cmpt = true;
		break;
		case 7:
			this.bodyLocation867(eventchain, 'curse');
		break;
		case 8:
			if(this.blessings.includes(8) === true){
				this.curses868(eventchain);
			} else {
				curse = "only the ability able to join chaotic or evil cults and religions. All others will reject " + this.objectivePronoun +".";
				cmpt = true;
				this.curses.push(8);
			}
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
			if(this.blessings.includes(11) === true){
				this.curses868(eventchain);
			} else {
				curse = "acting as a bad luck talisman.";
				this.specialBonus.push('Roll a d6. Every time a partymember makes a skill check they roll a d10. IF the result of the d10 is equal to or less than your d6 roll they fumble the check.');
				cmpt = true;
				this.curses.push(11);
			}
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
			this.playerNote.push('Roll a d10 to determin the strength of ' + this.charName + "'s beserker rage. Whenever engaged in combat they must roll a d100 to determine if they fall into a rage, if the result is equal to or less than the result of the d10 they are subject to rage. While in rage " + this.subjectivePronoun + " gains an amount of hp equal to half his total hp and ignores all effects of damage until killed. " + this.subjectivePronoun + " also deals an extra 1d6 damage on each attack. " + this.subjectivePronoun + " has a 30% chance to attack near by allies while in a berserker rage and if" + this.subjectivePronoun + " is a lycanthrope they automaticly transform into one while raged. After being raged " + this.subjectivePronoun + " becomes depressed for 1d10 days and reduces all skill bonuses by half.");
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
	var d3 = Math.floor(Math.random() * (3 -1 + 1) + 1);
	var d4 = Math.floor(Math.random() * (4 -1 + 1) + 1);
	var d6 = Math.floor(Math.random() * (6 -1 + 1) + 1);
	var ranBlessing = Math.floor(Math.random() * (17 -1 + 1) + 1);
	var cmpt = false;
	var blessing = '';

	switch(ranBlessing){
		case 1:
			for(i = 0; i < d4; i++){
				this.lightSideTraits.push('L');
			}
			blessing = "several light side traits.";
			cmpt = true;
		break;

		case 2:
			if(this.curses.includes(2) === true){
				this.blessings869(eventchain);
			} else {
				blessing = "a stunning apperance.";
				this.charisma += d6;
				cmpt = true;
				this.blessings.push(2);
			}
		break;

		case 3:
			if(this.curses.includes(3) === true){
				this.blessings869(eventchain);
			} else {
				this.loverLife = true;
				blessing = "a blessing that their lover affairs will never end in death.";
				cmpt = true;
				this.blessings.push(3);
			}
		break;

		case 4:
			if(this.curses.includes(4) === true){
				this.blessings869(eventchain);
			} else {
				blessing = "being exceptionally lucky.";
				this.specialBonus.push('Never fumbles a roll.');
				cmpt = true;
				this.blessings.push(4);
			}
		break;

		case 5:
			if(this.curses.includes(5) === true){
				this.blessings869(eventchain);
			} else {
				blessing = "easilly establishing a rapport of trust, friendship or even love with members of the opposite sex.";
				cmpt = true;
				this.blessings.push(5);
			}
		break;

		case 6:
			blessing = "being able to detect lycanthropy in anyone within 20 feet.";
			cmpt = true;
		break;

		case 7:
			this.bodyLocation867(eventchain, 'blessing');
		break;

		case 8:
			if(this.curses.includes(8) === true){
				this.blessings869(eventchain);
			} else {
				blessing = "only the ability able to join good religions. All others will reject " + this.objectivePronoun +".";
				cmpt = true;
				this.blessings.push(8);
			}
		break;

		case 9:
			this.uniqueTalent869b('blessing');
		break;

		case 10:
			switch(d6){
				case 1:
				blessing = 'natural talent in a weapon skill.';
				if(this.weaponRank < 5){
					this.weaponRank = 5;
				} else {
					this.weaponRank++;
				}
				break;

				case 2:
				blessing = 'natural talent in singing.';
				if(this.singingRank < 5){
					this.singingRank = 5;
				} else {
					this.singingRank++;
				}
				break;

				case 3:
				blessing = 'natural talent in an artistic ability.';
				if(this.artistryRank < 5){
					this.artistryRank = 5;
				} else {
					this.artistryRank++;
				}
				break;

				case 4:
				blessing = 'natural talent in money management.';
				if(this.moneyManagementRank < 5){
					this.moneyManagementRank = 5;
				} else {
					this.moneyManagementRank++;
				}
				break;

				case 5:
				blessing = 'natural talent in magic use.';
				if(this.magicRank < 5){
					this.magicRank = 5;
				} else {
					this.magicRank++;
				}
				break;

				case 6:
				blessing = 'natural talent in a mechanical ability.';
				if(this.mechanicalRank < 5){
					this.mechanicalRank = 5;
				} else {
					this.mechanicalRank++;
				}
				break;
			}
			cmpt = true;
		break;

		case 11:
		if(this.curses.includes(11) === true){
				this.blessings869(eventchain);
			} else {
				this.blessings.push(11);
				blessing = "acting as a good luck talisman.";
				this.specialBonus.push(this.charName + ' grants all his allies a +1 on every roll they make while in ' + this.possesivePronoun + ' presence.');
				cmpt = true;
				this.curses.push(11);
			}
		break;

		case 12:
			console.log('blessing' + ranBlessing);

		break;

		case 13:
			console.log('blessing' + ranBlessing);
		break;

		case 14:
			console.log('blessing' + ranBlessing);
		break;

		case 15:
			console.log('blessing' + ranBlessing);
		break;

		case 16:
			console.log('blessing' + ranBlessing);
		break;

		case 17:
			console.log('blessing' + ranBlessing);
		break;


	}

	if(cmpt === true){
		if(eventchain === 'birthEvent'){
			this.birthEvent.push(this.charName + " was born with " + blessing);
		} else if(eventchain === 'godChild'){
			this.birthEvent.push('As a result of his godly heritage ' + this.charName + ' was born with ' + blessing);
		}
	}
};

Character.prototype.uniqueTalent869b = function(eventchain){
	ranTalent = Math.floor(Math.random() * (10 -1 + 1) + 1);
	talentArry = ['Blind Trust: Other beings show '+ this.charName +' unusual amounts of trust.', 'Sense Evil: ' + this.charName + ' can detect the evil within beings, though they can attempt to hide it.', 'Insight: ' + this.charName + ' can question the wisdom of an action. Treat this as a rank 1 skill. Though it can never rise beyond rank 6.', 'Direction Bump North: ' + this.charName + ' always knows which way is North.', 'Direction Bump Up: ' + this.charName + ' always knows which way is up.', 'Direction Bump Down: ' + this.charName + ' always knows which way is down', 'Detect Magic: ' + this.charName + ' can detect the recent or current presence of a magical person, place or thing', 'Encourage Others: ' + this.charName + ' can inspire others to preform skill actions at a +1d3, however it reduces all of ' + this.possesivePronoun + ' skills by 2 while using this ability.'];
	talent = talentArry.randomElement();

	if(this.specialBonus.includes(talent) === false){
	if(eventchain === "blessing"){
		this.specialBonus.push(talent);
	}
	} else {
		this.uniqueTalent869b(eventchain);
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