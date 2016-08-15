Character.prototype.setGender = function(){
	var rangen = Math.floor(Math.random() * (2 - 1 +1) + 1);
	if (rangen === 1){
		this.charGender = 'Female';
		this.subjectivePronoun = "she";
		this.possesivePronoun = "her";
		this.objectivePronoun = "her";
		this.reflexivePronoun = "herself";
	} else{
		this.charGender = 'Male';
		this.subjectivePronoun = "he";
		this.possesivePronoun = "his";
		this.objectivePronoun = "him";
		this.reflexivePronoun = "himself";
	}
this.race101();
};

Character.prototype.race101 = function() {
	var ranrace = Math.floor(Math.random() * (20 - 1 +1)) + 1;
if (ranrace < 8){
	this.charRace = "Human";
} else if (ranrace === 8 || ranrace === 9){
	this.charRace = "Elf";
} else if (ranrace === 10 || ranrace === 11){
	this.charRace = "Dwarf";
} else if (ranrace === 12 || ranrace === 13){
	this.charRace = "Halfling";
} else if (ranrace === 14 || ranrace === 15){
	this.charRace = "Gnome";
} else if (ranrace === 16 || ranrace === 17){
	this.charRace = "Half-Elf";
} else if (ranrace ===18 || ranrace === 19){
	this.charRace = "Half-Orc";
} else if (ranrace === 20){
	var xtraracet = Math.floor(Math.random() * (6 - 1 +1)) + 1;
	if (xtraracet < 4) {
		this.charRace = "Beastman";
	} else if (xtraracet === 4 || xtraracet === 5 ) {
		this.charRace = "Reptileman";
	} else if (xtraracet === 6){
		this.charRace = "Orc";
	}
}
this.culture102();
};

Character.prototype.culture102 = function(){
	var rancult = Math.floor(Math.random() * (10 - 1 +1)) + 1;
if (rancult === 1) {
	this.charCulture = "Primitive";
	this.charCultMod = -3;
	this.weaponRank = this.weaponRank + 3;
	this.wildernessSurvivalRank += 5;
	this.huntingGatheringRank += 3;
	this.urbanSurvivalRank += 1;
	this.nativeLiteracy += 5;
	this.itemArry.push('One-handed Weapon');
	this.charEnviroment = "Wilderness";
} else if (rancult === 2 || rancult === 3){
	this.charCulture = "Nomad";
	this.charCultMod = 0;
	this.ridingRank += 4;
	this.wildernessSurvivalRank += 4;
	this.urbanSurvivalRank += 1;
	this.nativeLiteracy += 20;
	this.foreignLiteracy.push(10, 10);
	this.charEnviroment = "Wilderness";
//chance for a riding animal
	var animalran = Math.floor(Math.random() * (4 - 1 +1) + 1);
	if (animalran < 4) {
		this.itemArry.push('Riding Animal');
	}
//males get weapons and weapon skills because of sexism
	if (this.charGender === 'Male') {
		this.weaponRank += 3;
		this.itemArry.push('One handed melee weapon', 'Missile weapon');
	}
} else if ( rancult < 7 && rancult > 3) {
	this.charCulture = "Barbarian";
	this.charCultMod = 2;
	this.meleeWeaponRank += 3;
	this.missileWeaponRank += 3;
	this.itemArry.push('One handed melee weapon', 'Missile weapon');
	this.nativeLiteracy = 10;
//determins the enviroment of the character
	var enviroran = Math.floor(Math.random() * (2 - 1 + 1) + 1);
	if (enviroran === 1){
		this.charEnviroment = "Wilderness";
		this.urbanSurvivalRank += 1;
		this.wildernessSurvivalRank += 5;
	} else {
		this.charEnviroment = "Urban";
		this.urbanSurvivalRank += 5;
		this.wildernessSurvivalRank += 1;
	}
} else if (rancult < 10 && rancult > 6){
	this.charCulture = "Civilized";
	this.charCultMod = 4;
	this.nativeLiteracy += 30;
//Chance of developing a hobby
	var hobbyran = Math.floor(Math.random() * (2 - 1 + 1) + 1);
	if (hobbyran === 1){
		this.hobby427();
	}
//determins the enviroment of the character
	var enviroran = Math.floor(Math.random() * (2 - 1 + 1) + 1);
	if (enviroran === 1){
		this.charEnviroment = "Wilderness";
		this.wildernessSurvivalRank += 2;
	} else {
		this.charEnviroment = "Urban";
		this.urbanSurvivalRank += 2;
	}
} else if (rancult === 10){
	this.charCulture = "Civilized-Decadent";
	this.charCultMod = 7;
	this.charEnviroment = "Urban";
	this.urbanSurvivalRank += 3;
	this.nativeLiteracy += 20;
	this.foreignLiteracy.push(10);
}
this.social103();
};

Character.prototype.social103 = function(){
	var ransoc = ((Math.floor(Math.random() * (100 - 1 + 1) + 1)) + this.charCultMod);
	if (this.isNoble === true){
		ransoc += this.tiMod;
	}
	if(ransoc < 12){
		this.charSocMod += -3;
		this.charSocial = "Destitute";
		this.nativeLiteracy = 5;
		this.wealth += 0.25;
		var ransurv = Math.floor(Math.random() * (2 -1 + 1) + 1);
		var undwldexp = Math.floor(Math.random() * (10 - 1 + 1) + 1);
		if (this.charEnviroment === "Wilderness"){
			this.wildernessSurvivalRank += ransurv;
		} else if (this.charEnviroment ==="Urban"){
			this.urbanSurvivalRank += ransurv;
		}
		//Civilized and Decadent desitute characters have a chance for an underworld experience
		if (this.charCulture === "Civilized" && undwldexp <5){
			this.underworld534();
		}
		if (this.charCulture === "Civilized-Decadent" && undwldexp < 7 ){
			this.underworld534();
		}
	} else if(ransoc < 41 && ransoc > 12){
		this.charSocMod += -1;
		this.charSocial = "Poor";
		this.nativeLiteracy += -15;
		this.wealth += 0.5;
		var ranstrtfight = Math.floor(Math.random() * (2 -1 + 1) + 1);
		if (ranstrtfight === 1){
			this.streetFightRank += 3;
		}
		if (this.charEnviroment === "Wilderness"){
			this.wildernessSurvivalRank += 1;
		} else if (this.charEnviroment ==="Urban"){
			this.urbanSurvivalRank += 1;
		}
	} else if (ransoc < 86 && ransoc > 40){
		this.charSocMod += 0;
		this.charSocial = "Comfortable";
		this.nativeLiteracy += 5;
		this.wealth += 1;
	} else if (ransoc < 95 && ransoc > 85){
		this.charSocMod += 2;
		this.charSocial ="Well-to-Do";
		this.wealth += 1.5;
		this.nativeLiteracy += 30;
		this.itemArry.push('Weapon', 'Weapon', 'Riding Animal');
		if (this.charEnviroment === "Wilderness"){
			this.wildernessSurvivalRank += -1;
		} else if (this.charEnviroment ==="Urban"){
			this.urbanSurvivalRank += -1;
		}
	} else if (ransoc > 98){
		if (this.isNoble === false){
			this.isNoble = true;
			this.nativeLiteracy += 30;
			this.itemArry.push('Full set of non-magical weapons', 'Non-magical suit of armor');
			this.charSocMod += 5;
			var nobleExTraitRan = Math.floor(Math.random() * (2 -1 + 1) + 1);
			if (nobleExTraitRan === 1){
				this.exoticPersonalityTrait649();
			}
		if (this.charEnviroment === "Wilderness"){
			this.wildernessSurvivalRank += -1;
		} else if (this.charEnviroment ==="Urban"){
			this.urbanSurvivalRank += -1;
		}
		this.nobility758();
		this.royalRelation872();
		this.social103();
		} else {
			this.social103();
		}
	} else if (this.ransoc < 99 && this.ransoc > 94){
		var extrmewealthchance = Math.floor(Math.random() * (100 -1 + 1) + 1);
		if (extrmewealthchance <= (tiMod + 1)){
			this.charSocMod += 8;
			this.charSocial = "Extremely Wealthy";
			this.wealth += 20;
			this.itemArry.push('Any mundane items within reason', 'Minor Magical Item');
		var extraLanguage = Math.floor(Math.random() * (4 -1 + 1) + 1);
			for (i = 0; i < extraLanguage; i++){
				this.foreignLiteracy.push(30);
			}
		} else {
			this.charSocMod += 4;
			this.charSocial = "Wealthy";
			this.itemArry.push('Finely Furnished Home', 'Riding Animal', 'Fine Clothing', 'Dagger', 'Masterwork One Handed Weapon');
			this.wealth += 3;
			var jewelynum = Math.floor(Math.random() * (3 -1 + 1) + 1);
			for (i = 0; i < jewelynum; i++){
				this.itemArry.push('Expensive Jewelry');
			}
		}
		this.nativeLiteracy = 100;
		var ransurv = Math.floor(Math.random() * (2 -1 + 1) + 1);
		if (this.charEnviroment === "Wilderness"){
			this.wildernessSurvivalRank -= ransurv;
		} else if (this.charEnviroment ==="Urban"){
			this.urbanSurvivalRank -= ransurv;
		}
	}
	this.birthLegit104();
};

Character.prototype.birthLegit104 = function(){
	var legitRan = Math.floor(Math.random() * (20 -1 + 1) + 1);
	legitRan += this.charCultMod;
	if (legitRan > 18){
		this.isBastard = true;
		this.charLegitMod = Math.floor(Math.random() * (4 -1 + 1) + 1);
		this.charSocMod -= this.charLegitMod;
		if (this.charSocMod < 0){
			this.charSocMod = 0;
		}
		this.tiMod = 0;
		if(this.isNoble === true){
			this.nobleBastardMessage = "" + this.charName + " is a bastard of " + this.possesivePronoun + " dynasty and no longer gains benifits of being a noble. " + this.subjectivePronoun.capitalizeFirstLetter() + " will only inherit if " + this.subjectivePronoun + " is the sole heir reaming.";
		}
		this.bastardReason105();
	}else if(this.isPlayerCharacter === true){
		this.family106();
	} else if(this.isPlayerCharacter === false){
		this.npcOccupation114a();
	}
};

Character.prototype.bastardReason105 = function (){
	var reasonChance = Math.floor(Math.random() * (20 -1 + 1) + 1);
	reasonChance += this.charCultMod;
	if (reasonChance < 12){
		this.bastardReason = "Bastard: " + this.charName + "'s mother was a common unmarried prostitute.";
		this.family106();
	} else if (reasonChance === 13 || reasonChance === 14){
		this.bastardReason = "Bastard: " + this.charName + "'s mother was raped and remained unmarried.";
		this.fatherKnown105(15);
	} else if (reasonChance > 14 && reasonChance < 24){
		this.bastardReason = "Bastard: " + this.charName + "'s mother was unmarried";
		this.fatherKnown105(50);
	}	else if (reasonChance > 23){
		this.bastardReason = "Bastard: " + this.charName +"'s mother was a courtesan (prostitute to a noble)";
		this.fatherKnown105(50);
	}
};

Character.prototype.fatherKnown105 = function (chance) {
	var fatherKnownChance = Math.floor(Math.random() * (100 -1 + 1) + 1);
	if (fatherKnownChance <= chance){
		this.isFatherKnown = true;
	}
	if(this.isPlayerCharacter === true){
		this.family106();
	} else if(this.isPlayerCharacter === false){
		this.npcOccupation114a();
	}
};

Character.prototype.family106 = function (){
	var familyRan = Math.floor(Math.random() * (20 -1 + 1) + 1);
	familyRan += this.charCultMod;
	if(familyRan < 9){
		if(this.isBastard === true && this.isFatherKnown === false && this.adopted === false){
			this.family106();
		} else {
			this.generateNPC('mother');
			this.generateNPC('father');
		}

	} else if(familyRan < 10 && familyRan > 8){
		if(this.isBastard === true && this.isFatherKnown === false && this.adopted === false){
			this.family106();
		} else {
			this.generateNPC('mother');
			this.generateNPC('father');
		}

	} else if(familyRan === 13){
		this.generateNPC('grandmother');
		this.generateNPC('grandfather');

	} else if(familyRan === 14){
		var gfOrgm = Math.floor(Math.random() * (2 -1 + 1) + 1);
		if(gfOrgm === 1){
			this.generateNPC('grandmother');
		} else {
			this.generateNPC('grandfather');
		}

	} else if(familyRan === 15){
		this.generateNPC('aunt');
		this.generateNPC('uncle');

	} else if(familyRan === 16){
		var auntOrUncle = Math.floor(Math.random() * (2 -1 + 1) + 1);
		if(auntOrUncle === 1){
			this.generateNPC('aunt');
		} else {
			this.generateNPC('uncle');
		}

	} else if(familyRan === 17 || familyRan ===18){
			this.generateNPC('mother');

	} else if(familyRan === 19){
		if(this.isBastard === true && this.isFatherKnown === false && this.adopted === false){
			this.family106();
		} else {
			this.generateNPC('father');
		}

	} else if(familyRan === 20){
		if(this.adopted === false){
		this.isOrphan = true;
		this.adopted = true;
		var gaurdianRan = Math.floor(Math.random() * (20 -1 + 1) + 1);
		if(gaurdianRan < 9){
			this.guardian754();
		} else {
			this.family106();
		}
	} else {
		this.family106();
	}
	} else if(familyRan > 20 && familyRan < 25){
		if(this.adopted === false){
			this.charSocMod = -3;
			this.charSocial = "Destitute";
			this.nativeLiteracy = 5;
			this.wealth = 0.25;
			this.itemArry.length = 0;
			var ransurv = Math.floor(Math.random() * (3 -1 + 1) + 1);
			if (this.charEnviroment === "Wilderness"){
				this.wildernessSurvivalRank = ransurv;
			} else if (this.charEnviroment ==="Urban"){
				this.urbanSurvivalRank = ransurv;
			}
			this.isOrphan = true;
			this.raisedInOrphanage = false;
		} else {
			this.family106();
		}

	} else if(familyRan > 24){
		if(this.adopted ===false){
			this.charSocMod = -1;
			this.charSocial = "Poor";
			this.nativeLiteracy += -15;
			this.wealth = 0.5;
			this.itemArry.length = 0;
			var ranstrtfight = Math.floor(Math.random() * (2 -1 + 1) + 1);
			if (ranstrtfight === 1){
				this.streetFightRank += 3;
			}
			this.isOrphan = true;
			this.raisedInOrphanage = true;
		}else {
			this.family106();
		}
	}
	this.postChar();
};