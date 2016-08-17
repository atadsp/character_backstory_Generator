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
			this.siblings107();
		}

	} else if(familyRan < 10 && familyRan > 8){
		if(this.isBastard === true && this.isFatherKnown === false && this.adopted === false){
			this.family106();
		} else {
			this.generateNPC('mother');
			this.generateNPC('father');
			var numAuntUncle = Math.floor(Math.random() * (4 -1 + 1) + 1);
			for(i = 0; i < numAuntUncle; i++){
				var auntOrUncle = Math.floor(Math.random() * (2 - 1 + 1) +1);
				if(auntOrUncle === 1){
					this.generateNPC('aunt');
				} else {
					this.generateNPC('uncle');
				}
			}
			if(numAuntUncle > 0){
				var numCousin = Math.floor(Math.random() * (4 -1 + 1) + 1);
				for(i = 0; i < numCousin; i++){
					var maleOrFemale = Math.floor(Math.random() * (2 - 1 + 1) +1);
					if(maleOrFemale === 1){
						this.generateNPC('female cousin');
					} else {
						this.generateNPC('male cousin');
					}
				}
			}
			var numGrandFatherMother = Math.floor(Math.random() * (4 -1 + 1) + 1);
			var numGrandmother = 0;
			var numGrandfather = 0;
			for(i = 0; i < numAuntUncle; i++){
				var grandmotherOrFather = Math.floor(Math.random() * (2 - 1 + 1) +1);
				if(grandmotherOrFather === 1 && numGrandmother < 2){
					this.generateNPC('grandmother');
					numGrandmother++;
				} else if (numGrandfather < 2){
					this.generateNPC('grandfather');
					numGrandfather++;
				} else {
					this.generateNPC('grandmother');
				}

			}
			this.siblings107();

		}

	} else if(familyRan === 13){
		this.generateNPC('grandmother');
		this.generateNPC('grandfather');
		this.TimeofBirth109();

	} else if(familyRan === 14){
		var gfOrgm = Math.floor(Math.random() * (2 -1 + 1) + 1);
		if(gfOrgm === 1){
			this.generateNPC('grandmother');
			this.TimeofBirth109();
		} else {
			this.generateNPC('grandfather');
			this.TimeofBirth109();
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
		this.TimeofBirth109();

	} else if(familyRan === 17 || familyRan ===18){
			this.generateNPC('mother');
			this.siblings107();

	} else if(familyRan === 19){
		if(this.isBastard === true && this.isFatherKnown === false && this.adopted === false){
			this.family106();
		} else {
			this.generateNPC('father');
			this.siblings107();
		}

	} else if(familyRan === 20){
		if(this.adopted === false){
		this.isOrphan = true;
		this.adopted = true;
		var gaurdianRan = Math.floor(Math.random() * (20 -1 + 1) + 1);
		if(gaurdianRan < 9){
			this.guardian754();
			this.TimeofBirth109();
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
			this.TimeofBirth109();
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
			this.TimeofBirth109();
		}else {
			this.family106();
		}
	}
};

Character.prototype.siblings107 = function(){
	var siblingRan = Math.floor(Math.random() * (20 -1 + 1) + 1);
	var numSiblings = Math.floor(Math.random() * (3 -1 + 1) + 1);
	if(siblingRan < 3){
		if(this.bastardSiblings < 1){
		this.wealth += 0.3;
		this.TimeofBirth109();
		} else {
		this.siblings107();
		}
	} else if(siblingRan <10 && siblingRan >2){
		for(i = 0; i < numSiblings; i++){
			var siblingGender = Math.floor(Math.random() * (2 -1 + 1) + 1);
			if(siblingGender === 1){
				this.generateNPC('sister');
				this.siblingNum ++;
			} else {
				this.generateNPC('brother');
				this.siblingNum ++;
			}
		}
		this.birthOrder108();
	} else if(siblingRan < 16 && siblingRan > 9){
		numSiblings++;
		for(i = 0; i < numSiblings; i++){
			var siblingGender = Math.floor(Math.random() * (2 -1 + 1) + 1);
			if(siblingGender === 1){
				this.generateNPC('sister');
				this.siblingNum ++;
			} else {
				this.generateNPC('brother');
				this.siblingNum ++;
			}
		}
		this.birthOrder108();
	} else if(siblingRan < 18 && siblingRan > 15){
		numSiblings = Math.floor(Math.random() * (6 -3 + 1) + 3);
		for(i = 0; i < numSiblings; i++){
			var siblingGender = Math.floor(Math.random() * (2 -1 + 1) + 1);
			if(siblingGender === 1){
				this.generateNPC('sister');
				this.siblingNum ++;
			} else {
				this.generateNPC('brother');
				this.siblingNum ++;
			}
		}
		this.birthOrder108();
	} else if(siblingRan < 20 && siblingRan > 17){
		numSiblings = Math.floor(Math.random() * (8 - 2 + 1) + 2);
		for(i = 0; i < numSiblings; i++){
			var siblingGender = Math.floor(Math.random() * (2 -1 + 1) + 1);
			if(siblingGender === 1){
				this.generateNPC('sister');
				this.siblingNum ++;
			} else {
				this.generateNPC('brother');
				this.siblingNum ++;
			}
		}
		this.birthOrder108();
	} else if(siblingRan > 19){
		var numBastardSiblings = Math.floor(Math.random() * (3 -1 + 1) + 1);
		for(i = 0; i < numSiblings; i++){
			var siblingGender = Math.floor(Math.random() * (2 -1 + 1) + 1);
			if(siblingGender === 1){
				this.generateNPC('bastard sister');
				this.bastardSiblings ++;
			} else {
				this.generateNPC('bastard brother');
				this.bastardSiblings ++;
			}
		}
		this.siblings107();
	}
};

Character.prototype.birthOrder108 = function(){
	this.totalSibling = this.bastardSiblings + this.siblingNum;
	var birthOrderRan = Math.floor(Math.random() * (20 -1 + 1) + 1);
if(this.totalSibling === 1){
	if(birthOrderRan < 11){
		this.birthOrder = "First";
		this.wealth += 0.2;
	} else if(birthOrderRan > 10){
		this.birthOrder = "Second";
		this.wealth += 0.1;
	}
} else if(this.totalSibling === 2){
	if(birthOrderRan < 7){
		this.birthOrder = "First";
		this.wealth += 0.2;
	} else if(birthOrderRan < 15 && birthOrderRan > 6){
		this.birthOrder = "Middle";
		this.wealth += 0.1;
	} else if(birthOrderRan > 14){
		this.birthOrder = "Last";
	}
	// 30%
	// 35%
	// 35%
} else if (this.totalSibling === 3){
	if(birthOrderRan < 3){
		this.birthOrder = "First";
		this.wealth += 0.2;
	} else if(birthOrderRan < 11 && birthOrderRan > 2){
		this.birthOrder = "Second";
		this.wealth += 0.1;
	} else if(birthOrderRan < 18 && birthOrderRan > 10){
		this.birthOrder = "Second-to-Last";
	} else if(birthOrderRan > 17){
		this.birthOrder = "Last";
		this.wealth -= 0.1;
	}
	// 10% First
	// 35% Second 
	// 35% Middle
	// 15%Last
} else if( this.totalSibling >= 4) {
	if(birthOrderRan < 3){
		this.birthOrder = "First";
		this.wealth += 0.2;
	} else if(birthOrderRan < 11 && birthOrderRan > 2){
		this.birthOrder = "Second";
		this.wealth += 0.1;
	} else if(birthOrderRan < 17 && birthOrderRan > 10){
		this.birthOrder = "Middle";
	} else if(birthOrderRan < 19 && birthOrderRan > 16){
		this.birthOrder = "Second-to-Last";
		this.wealth -= 0.1;
	} else if(birthOrderRan > 18){
		this.birthOrder = "Last";
		this.wealth -= 0.2;
	}
	// 10% First
	// 35% second
	// 30% middle
	// 10% second to Last
	// 10% last
}
this.TimeofBirth109();
};

Character.prototype.TimeofBirth109 = function(){
	var ranMonth = Math.floor(Math.random() * (12 -1 + 1) + 1);

    switch(ranMonth){
        case 1: this.birthMonth = "January";
            break;
        case 2: this.birthMonth = "February";
            break;
        case 3: this.birthMonth = "March";
            break;
        case 4: this.birthMonth = "April";
            break;
        case 5: this.birthMonth = "May";
            break;
        case 6: this.birthMonth = "June";
            break;
        case 7: this.birthMonth = "July";
            break;
        case 8: this.birthMonth = "August";
            break;
        case 9: this.birthMonth = "September";
            break;
        case 10: this.birthMonth = "October";
            break;
        case 11: this.birthMonth = "November";
            break;
        case 12: this.birthMonth = "December";
            break;
        }
	if(this.birthMonth === 'February'){
		this.birthDay = Math.floor(Math.random() * (28 -1 + 1) + 1);
		var extraDay = Math.floor(Math.random() * (4 -1 + 1) + 1);
		if (extraDay === 4){
			this.birthDay ++;
		}
	} else if (this.birthMonth === 'April' || this.birthMonth === 'June' || this.birthMonth === 'September' || this.birthMonth === 'November' ){
		this.birthDay = Math.floor(Math.random() * (30 -1 + 1) + 1);
	} else {
		this.birthDay = Math.floor(Math.random() * (31 -1 + 1) + 1);
	}
	this.placeOfBirth110();
};

Character.prototype.placeOfBirth110 = function(){
	var ranBirthPlace = (Math.floor(Math.random() * (20 -1 + 1) + 1)) + this.charLegitMod;
	var seed = this.charName + " was born";
	var foreignSeed = this.charName + " was born in a foreign land";
	if(ranBirthPlace < 7){
		if(this.foreignLand === false){
			this.birthPlace = seed + " in " + this.possesivePronoun +" family's home" ;
		} else {
			this.birthPlace = foreignSeed + " in " + this.possesivePronoun +" family's home";
		}
		this.BirthMod += -5;
	}else if(ranBirthPlace <10 && ranBirthPlace > 6){
		if(this.foreignLand === false){
			this.birthPlace = seed + " in a hospital or healers guild hall";
		} else {
			this.birthPlace = foreignSeed + " in a hospital or healers guild hall";
		}
		this.BirthMod += -7;
	}else if(ranBirthPlace === 10){
		if(this.foreignLand === false){
			this.birthPlace = seed + " in a carriage while travelling";
		} else {
			this.birthPlace = foreignSeed + " in a carriage while travelling";
		}
		this.BirthMod += 1;
	}else if(ranBirthPlace === 11){
		if(this.foreignLand === false){
			this.birthPlace = seed + " in a common barn";
		} else {
			this.birthPlace = foreignSeed + " in a common barn";
		}
		this.BirthMod += 1;
	}else if(ranBirthPlace === 12 || ranBirthPlace === 13){
		if(this.foreignLand === false){
			this.foreignLand = true;
			this.BirthMod += 2;
			this.placeOfBirth110();
		} else {
		this.placeOfBirth110();
		}
	}else if(ranBirthPlace ===14){
		if (this.foreignLand === false){
			this.birthPlace = seed + " in a cave";
		} else {
			this.birthPlace = foreignSeed + " in a cave";
		}
		this.BirthMod += 5;
	}else if(ranBirthPlace ===15){
		if(this.foreignLand === false) {
			this.birthPlace = seed + " in the middle of a field";
		} else {
			this.birthPlace = foreignSeed + " in the middle of a field";
		}
		this.BirthMod += 1;
	}else if(ranBirthPlace === 16){
		if(this.foreignLand === false){
			this.birthPlace = seed + " in a forest";
		} else {
			this.birthPlace = foreignSeed + " in a forest";
		}
		this.BirthMod += 2;
	}else if(ranBirthPlace > 16){
		this.exoticBirth111();
	}
	this.unusualBirth112();
};

Character.prototype.exoticBirth111 = function(){
	var ranExoticBirth = Math.floor(Math.random() * (18 -1 + 1) + 1);
	switch(ranExoticBirth){
		case 1:
			this.birthPlace = this.charName + " was born in a temple of a good deity";
			this.BirthMod += 15;
            break;
        case 2:
			var battleRan = Math.floor(Math.random() * (6 -1 + 1) + 1);
			if(battleRan === 6){
				this.birthPlace = this.charName + " was born on a battlefield.";
			} else {
				this.birthPlace = this.charName + " was born in a camp near a battlefield.";
			}
			this.BirthMod += 8;
            break;
        case 3:
			this.birthPlace = this.charName + " was born in an alley.";
			this.BirthMod += 5;
            break;
        case 4:
			this.birthPlace = this.charName + " in a brothel.";
			this.BirthMod += 2;
            break;
        case 5:
			this.birthPlace = this.charName + " was born in the palace of a local ruler.";
			this.BirthMod += 2;
            break;
        case 6:
			this.birthPlace = this.charName + " was born in the palace of the ruler of " + this.possesivePronoun + " country.";
			this.BirthMod += 5;
            break;
        case 7:
			this.birthPlace = this.charName + " was born in the palace of an evil person, ruler or creature.";
			this.BirthMod += 15;
            break;
        case 8:
			this.birthPlace = this.charName + " was born in a bar, tavern, or ale house.";
			this.BirthMod += 2;
            break;
        case 9:
			this.birthPlace = this.charName + " was born in the sewers.";
			this.BirthMod += 10;
            break;
        case 10:
			this.birthPlace = this.charName + " was born in the theives den.";
			this.BirthMod += 5;
            break;
        case 11:
			this.birthPlace = this.charName + " was born in the home of a friendly non-human.";
			this.BirthMod += 2;
            break;
        case 12:
			this.birthPlace = this.charName + " was made by a powerful wizard. All memories of " + this.possesivePronoun + " memories are implanted by the wizard.";
			this.BirthMod += 25;
            break;
        case 13:
			this.birthPlace = this.charName + " was born in the temple of an evil diety";
			this.BirthMod += 20;
            break;
        case 14:
			this.birthPlace = this.charName + " was born on another plane of reality, and transported to this world sometime soon after birth";
			this.BirthMod += 15;
            break;
        case 15:
			this.birthPlace = this.charName + " was born in another time period, then transported to this time sometime after birth.";
			this.BirthMod += 10;
            break;
        case 16:
			this.birthPlace = this.charName + " was on a ship at sea.";
			this.BirthMod += 2;
            break;
        case 17:
			this.birthPlace = this.charName + " in a prison cell.";
			this.BirthMod += 9;
            break;
        case 18:
			this.birthPlace = this.charName + " was born in a wizard's laboratory.";
			this.BirthMod += 20;
            break;
	}
	this.unusualBirth112();
};

Character.prototype.unusualBirth112 = function(){
	var unusualBirth = (Math.floor(Math.random() * (100 -1 + 1) + 1) + this.BirthMod);
	if(unusualBirth < 61){
		this.significantChildhoodEvents215();
	} else if (unusualBirth < 77 && unusualBirth > 60){
		this.unusualBirthEvents113(0);
	} else if(unusualBirth < 93 && unusualBirth > 76){
		for(i = 0; i < 2; i++){
			this.unusualBirthEvents113(0);
		}
	} else if(unusualBirth < 98 && unusualBirth > 92){
		for(i = 0; i < 3; i++){
			this.unusualBirthEvents113(0);
		}
	} else if(unusualBirth > 97){
		for(i = 0; i < 4; i++){
			this.unusualBirthEvents113(0);
		}
	}
};

Character.prototype.unusualBirthEvents113 = function(bonus){
	var birthEvent = (Math.floor(Math.random() * (100 -1 + 1) + 1) + bonus);
	if(birthEvent < 6){
		this.birthEvent.push('A person of note in the vicinity of ' + this.charName + "'s house died on the day that " + this.subjectivePronoun + " was born. Some blame " + this.objectivePronoun + " for the death, and other view " + this.objectivePronoun + " as a reincanation of the deceased.");
	} else if (birthEvent < 11 && birthEvent > 5){
		this.birthEvent.push('Wolves and dogs set up a howling at the exact moment of ' + this.charName + "'s birth");
	} else if (birthEvent < 21 && birthEvent > 10){
		this.birthEvent.push(this.charName + "'s mother died during childbirth.");
	} else if (birthEvent < 24 && birthEvent > 20){
		this.birthEvent.push('All of the glassware in the house suddenly shattered.');
	} else if (birthEvent === 24 || birthEvent === 25){
		this.birthEvent.push('All of the milk in the area near ' + this.charName + 'went sour at the moment of ' + this.objectivePronoun + "'s birth.");
	} else if (birthEvent === 26 || birthEvent === 27){
		this.birthEvent.push(this.charName + "'s father beleived that " + this.subjectivePronoun + " was not his child, but instead the child of another man.");
	} else if (birthEvent < 32 && birthEvent > 27){
		var seperated = Math.floor(Math.random() * (5 -1 + 1) + 1);
		var evilTwin = Math.floor(Math.random() * (6 - 1 + 1)+1);
		if(seperated === 5){
			if(evilTwin === 6){
				this.birthEvent.push(this.charName + " has an identical twin that was seperated at birth. The twin's personality is drasticlly diffrent from "+ this.charName+ "'s. Possible even the exact opposite.");
			} else {
				this.birthEvent.push(this.charName + " has an identical twin that was seperated at birth.");
			}
		} else {
			if(evilTwin === 6){
				this.birthEvent.push(this.charName + " has an identical twin. The twin's personality is drasticlly diffrent from "+ this.charName+ "'s. Possible even the exact opposite.");
			} else {
				this.birthEvent.push(this.charName + " has an identical twin.");
			}
		}
	} else if (birthEvent < 35 && birthEvent > 31){
		var boilOrFreeze = Math.floor(Math.random() * (2 -1 + 1) + 1);
		if(boilOrFreeze === 1){
			this.birthEvent.push('Near by water froze by itself.');
		} else {
			this.birthEvent.push('Near by water boiled by itself.');
		}
	} else if (birthEvent < 38 && birthEvent > 34){
		this.birthEvent.push("On the day of " + this.charName + "'s birth there was seasonally unnatural weather");
	} else if (birthEvent === 38){
		this.birthEvent.push("On the day of " + this.charName + "'s birth unnaturally potent storms raged.");
	} else if (birthEvent < 42 && birthEvent > 38){
		if(this.bornAtNight === false && this.bornAtDay === false){
			this.bornAtNight = true;
			nightBonus = Math.floor(Math.random() * (10 -1 + 1) + 1);
			ranAttribute = Math.floor(Math.random() * (6 -1 +1)+1);
			if(nightBonus === 1){
					this.attributeBonus.push("+" + ranAttribute + " to primary casting attribute at midnight and the hour following." );
				} else if (nightBonus ===2 || nightBonus === 3){
					this.specialBonus.push('Low-Light Vision');
				} else if (nightBonus === 4 || nightBonus ===5){
					this.specialBonus.push('Extremely pale skin - skin is sensitive to bright sunlight. ('+ this.charName +' takes 1 point of damage per hour of exposure to bright daylight.');
				} else if (nightBonus === 6){
					this.specialBonus.push("-" + ranAttribute +" to primary casting attribute at noon and the hour following.");
				} else if (nightBonus ===7){
					this.stealthRank++;
				} else if (nightBonus ===8 || nightBonus === 9){
					this.specialBonus.push("+2 to casting attribute after the sun sets or when shrouded in darkness.");
				} else if (nightBonus === 10){
					this.specialBonus.push("-2 to casting stat in daylight.");
				}
				this.birthEvent.push(this.charName + " was born exactly at midnight");
			} else {
				this.unusualBirthEvents113(bonus);
			}
	} else if (birthEvent < 45 && birthEvent > 41){
		if(this.bornAtNight === false && this.bornAtDay === false){
			this.bornAtDay = true;
			dayBonus = Math.floor(Math.random() * (10 -1 + 1) + 1);
			ranAttribute = Math.floor(Math.random() * (6 -1 +1)+1);
				if(dayBonus === 1){
					this.attributeBonus.push("+" + ranAttribute + " to primary casting attribute at noon and the hour following." );
				} else if (dayBonus ===2 || dayBonus === 3){
					this.specialBonus.push('No night vision (blinded by darkness)');
				} else if (dayBonus === 4 || dayBonus ===5){
					this.specialBonus.push('Extremely tanned skin.');
					this.naturalArmorBonus ++;
				} else if (dayBonus === 6){
					this.specialBonus.push("-" + ranAttribute +" to primary casting attribute at noon and the hour following.");
				} else if (dayBonus ===7){
					this.stealthRank--;
				} else if (dayBonus ===8 || dayBonus === 9){
					this.specialBonus.push("+2 to casting attribute in the daylight.");
				} else if (dayBonus === 10){
					this.specialBonus.push("-2 to casting stat in darkness or after the sun sets.");
				}
			this.birthEvent.push(this.charName + " was born exactly at noon");
		} else {
			this.unusualBirthEvents113(bonus);
		}
	} else if (birthEvent < 49 && birthEvent > 45){
		this.birthEvent.push("A seer declares that " + this.charName + " will be afflicted by an acient family curse");
		this.curse868();
	} else if (birthEvent === 49 || birthEvent === 50){
		gooseEgg = Math.floor(Math.random() * (10 -1 + 1) + 1);
		if(gooseEgg < 7){
			this.birthEvent.push("A goose laid a golden egg. " + this.charName + " no longer has the egg.");
		} else if(gooseEgg > 6 && gooseEgg < 10){
			this.birthEvent.push("A goose laid a golden egg. " + this.charName + " still has the egg to this day.");
		} else if(gooseEgg === 10){
			this.birthEvent.push("A goose laid a golden egg. " + this.charName + " still has the egg to this day. The egg is magical!");
		}
	} else if (birthEvent < 54 && birthEvent > 50){
		if(bornAtDay === true){
			this.birthEvent.push("The sky darkened in a solar eclipse when "+this.charName +" was born.");
		} else if (bornAtNight === true){
			this.birthEvent.push("The moon and stars darkened when " + this.charName + " was born.");
		} else {
			var nightDay = Math.floor(Math.random() * (2 -1 +1)+1);
			if(nightDay === 1){
				this.bornAtDay = true;
				this.birthEvent.push("The sky darkened in a solar eclipse when "+this.charName +" was born.");
			} else {
				this.bornAtNight = true;
				this.birthEvent.push("The moon and stars darkened when " + this.charName + " was born.");
			}
		}
	} else if (birthEvent === 54 || birthEvent === 55){
		this.birthEvent.push(this.charName + "'s house was infested with poisonous snakes the day after " + this.possesivePronoun + " birth.");
	} else if (birthEvent === 56){

	} else if (birthEvent === 57){

	} else if (birthEvent < 63 && birthEvent > 57){

	} else if (birthEvent === 63 || birthEvent === 64){

	} else if (birthEvent < 70 && birthEvent > 64){

	} else if (birthEvent < 76 && birthEvent > 69){

	} else if (birthEvent < 82 && birthEvent > 75){

	} else if (birthEvent < 86 && birthEvent > 81){

	} else if (birthEvent === 86){

	} else if (birthEvent === 87 || birthEvent === 88){

	} else if (birthEvent < 94 && birthEvent > 89){

	} else if (birthEvent === 94){

	} else if (birthEvent < 100 && birthEvent > 96){

	} else if (birthEvent === 100){
		for (i = 0; i < 2; i++){
			this.unusualBirthEvents113(20);
		}
	} else if (birthEvent < 106 && birthEvent > 100){

	} else if (birthEvent < 111 && birthEvent > 105){

	} else if (birthEvent > 110){

	}
};