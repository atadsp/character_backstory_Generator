Character.prototype.significantChildhoodEvents215 = function(age, sol){
	var eventRan = (Math.floor(Math.random() * (20 -1 + 1) + 1) + sol);
	var childRanAge = Math.floor(Math.random() * (12 -1 + 1) + 1);
	var adoRanAge = (Math.floor(Math.random() * (6 -1 + 1) + 1) + 12);
	var evnt = "";
	var cmplt = false;
	var d4 = Math.floor(Math.random() * (4 -1 + 1) + 1);
	var d6 = Math.floor(Math.random() * (6 -1 + 1) + 1);
	var d10 = Math.floor(Math.random() * (10 -1 + 1) + 1);
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
		break;
		case 5:
		break;
		case 6:
		break;
		case 7:
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
			if(evnt){
			} else {
			this.childEvent.push(evnt);
			}
		} else if(age === 'adolescent'){
			this.adolecentEventAge.push(adoRanAge);
			if(evnt){
			} else {
			this.adolecentEvent.push(evnt);
		}
		}
	}
};

Character.prototype.significantAdultEvents217 = function(){

};