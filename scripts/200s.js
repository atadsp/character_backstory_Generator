Character.prototype.significantChildhoodEvents215 = function(age, sol){
	var eventRan = (Math.floor(Math.random() * (20 -1 + 1) + 1) + sol);
	var childRanAge = Math.floor(Math.random() * (12 -1 + 1) + 1);
	var adoRanAge = (Math.floor(Math.random() * (6 -1 + 1) + 1) + 12);
	var evnt = "";
	var cmplt = false;
	var d4 = Math.floor(Math.random() * (4 -1 + 1) + 1);
	var d6 = Math.floor(Math.random() * (6 -1 + 1) + 1);
	var d8 = Math.floor(Math.random() * (8 -1 + 1) + 1);
	var d9 = Math.floor(Math.random() * (9 -1 + 1) + 1);
	var d10 = Math.floor(Math.random() * (10 -1 + 1) + 1);
	var d12 = Math.floor(Math.random() * (12 -1 + 1) + 1);
	switch(eventRan){
		case -2:
			if(this.charCulture != "Primitive"){
				evnt = "All public assistance is terminated because the country is at war. This causes bloody riots in the poorer sectors of towns and villages. " + this.charName + "'s family is very much involved in these uprisings against the ruling class.";
				this.randomTraits.push('R');
				cmplt = true;
			} else {
				this.significantChildhoodEvents215(age, this.charSocMod);
			}
		break;
		case -1:
			this.giftsAndLegacies863(age);
			cmplt = true;
		break;
		case 0:
			this.significantChildhoodEvents215(age, 0);
		break;
		case 1:
			this.underworld534(age);
			this.darkSideTraits.push('D');
			cmplt = true;
		break;
		case 2:
			this.tragedies528(age);
			this.randomTraits.push('R');
			cmplt = true;
		break;
		case 3:
			this.somethingWonderful529(age);
			this.lightSideTraits.push('L');
			cmplt = true;
		break;
		case 4:
			this.unusualSkill876();
			this.neutralTraits.push('N');
			cmplt = true;
		break;
		case 5:
		if(this.occupation === ""){
			if(this.charCulture === "Primitive") {
				this.primativeOccupation420a(this.charSocMod);
			} else if (this.charCulture === "Nomad"){
				this.nomadOccupation421a(this.charSocMod);
			} else if (this.charCulture === "Barbarian"){
				this.barbarianOccupatio422a(this.charSocMod);
			} else {
				this.civilizedOccupation423a(this.charSocMod);
			}
			this.neutralTraits.push('N');
		} else {
			this.significantChildhoodEvents215(age, this.charSocMod);
		}
		break;
		case 6:
			if(this.runaway === false){
				this.neutralTraits.push('N');
				cmplt = true;
				switch(d9){
					case 1:
					evnt = this.charName + " ran away from home and never returned";
					this.runaway = true;
					break;

					case 2:
					evnt = this.charName + " ran away from home and returned " + d8 + " days later";
					break;

					case 3:
					evnt = this.charName + " ran away from home and returned " + d12 + " months later";
					break;

					case 4:
					evnt = this.charName + " ran away from home and returned " + d6 + " years later";
					break;

					case 5:
					evnt = this.charName + " ran away from home to a distant land";
					this.runaway = true;
					break;
										
					case 6:
					evnt = this.charName + " ran away from home and joined the circus";
					this.runaway = true;
					break;
										
					case 7:
					this.underworld534('runaway');
					this.darkSideTraits.push('D');
					this.runaway = true;
					break;
					
					case 8:
					evnt = this.charName + " ran away from home and wanders the land, always one step ahead of the authorities, living by " + this.possesivePronoun + " wits.";
					this.wildernessSurvivalRank++;
					this.urbanSurvivalRank++;
					this.runaway = true;
					break;
					
					case 9:
					evnt = this.charName + " ran away from home and never returned";
					break;
				}
			} else {
				this.significantChildhoodEvents215(age, this.charSocMod);
			}
		break;
		case 7:
			this.religiousExperience541(age);
			this.randomTraits.push('R');
			cmplt = true;
		break;
		case 8:
		break;
		case 9:
		break;
		case 10:
		break;
		case 11:
		break;
		case 12:
		break;
		case 13:
		break;
		case 14:
		break;
		case 15:
		break;
		case 16:
		break;
		case 17:
		break;
		case 18:
		break;
		case 19:
		break;
		case 20:
		break;
		case 21:
		break;
		case 22:
		break;
		case 23:
		break;
		case 24:
		break;
		case 25:
		break;
		case 26:
		break;
		case 27:
		break;
		case 28:
		break;
		case 29:
		break;
		case 30:
		break;
		case 31:
		break;
		case 32:
		break;
		case 33:
		break;
	}

	if(cmplt === true){
		if(age === 'childhood'){
			this.childAgeEvent.push(childRanAge);
			if(evnt === ""){
			} else {
			this.childEvent.push(evnt);
			}
		} else if(age === 'adolescent'){
			this.adolecentEventAge.push(adoRanAge);
			if(evnt === ""){
			} else {
			this.adolecentEvent.push(evnt);
		}
		}
	}
};

Character.prototype.significantAdultEvents217 = function(){

};