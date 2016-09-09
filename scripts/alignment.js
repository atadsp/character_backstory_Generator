Character.prototype.alignmentControl = function(){
for(i = 0; i < this.randomTraits.length; i++){
	var d100 = Math.floor(Math.random() * (100 -1 + 1) + 1);
	if(d100 < 51){

	} else if (d100 < 66 && d100 > 50){
		this.neutralTraits.push('N');
	} else if (d100 < 81 && d100 > 65){
		this.lightSideTraits.push('L');
	} else if (d100 < 96 && d100 > 80){
		this.darkSideTraits.push('D');
	} else if (d100 > 95){
		this.exoticTraits.push('E');
	}
}
for(i = 0; i < this.lightSideTraits.length; i++){
	this.lightSideTrait647();
	this.totalLight++;
}
for(i = 0; i < this.darkSideTraits.length; i++){
	this.darksideTrait648();
	this.totalDark++;
}
for(i = 0; i < this.neutralTraits.length; i++){
	this.neutralTrait318B();
}
for(i = 0; i < this.exoticTraits.length; i++){
	this.exoticPersonalityTrait649();
}
if(this.isPlayerCharacter === true){
for(i=0; i < this.traits.length; i++){
	this.traitStrength318c();
}
}
};

Character.prototype.traitStrength318c = function () {
var strength = Math.floor(Math.random() * (100 -1 + 1) + 1);
this.traitStrength.push(strength);
};

Character.prototype.neutralTrait318B = function(){
	var ranTrait = Math.floor(Math.random() * (39 -1 + 1) + 1);
	switch(ranTrait){
		case 1:
			if(this.traits.includes('Curious')=== false){
				this.traits.push('Curious');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 2:
			if(this.traits.includes('Hedonist') === false){
				this.traits.push('Hedonist');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 3:
			if(this.traits.includes('Precise') === false){
				this.traits.push('Precise');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 4:
			if(this.traits.includes('Studious') === false){
				this.traits.push('Studious');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 5:
			if(this.traits.includes('Mysterious') === false){
				this.traits.push('Mysterious');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 6:
			if(this.traits.includes('Loquacious') === false && this.traits.includes('Silent') === false){
				this.traits.push('Loquacious');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 7:
			if(this.traits.includes('Loquacious') === false && this.traits.includes('Silent') === false){
				this.traits.push('Silent');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 8:
			if(this.traits.includes('Foppish') === false){
				this.traits.push('Foppish');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 9:
			if(this.traits.includes('Immaculate') === false){
				this.traits.push('Immaculate');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 10:
			if(this.traits.includes('Rough') === false){
				this.traits.push('Rough');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 11:
			if(this.traits.includes('Skeptic') === false){
				this.traits.push('Skeptic');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 12:
			if(this.traits.includes('Immature') === false){
				this.traits.push('Immature');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 13:
			if(this.traits.includes('Even-Tempered') === false){
				this.traits.push('Even-Tempered');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 14:
			if(this.traits.includes('Rash') === false){
				this.traits.push('Rash');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 15:
			if(this.traits.includes('Introvert') === false &&  this.traits.includes('Extrovert') === false){
				this.traits.push('Extrovert');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 16:
			if(this.traits.includes('Introvert') === false &&  this.traits.includes('Extrovert') === false){
				this.traits.push('Introvert');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 17:
			if(this.traits.includes('Materialistic') === false && this.traits.includes('Aesthetic') === false){
				this.traits.push('Materialistic');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 18:
			if(this.traits.includes('Materialistic') === false && this.traits.includes('Aesthetic') === false){
				this.traits.push('Aesthetic');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 19:
			if(this.traits.includes('Amoral') === false && this.traits.includes('Virtuous') === false && this.traits.includes('Immoral') === false){
				this.traits.push('Amoral');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 20:
			if(this.traits.includes('Dreamy') === false){
				this.traits.push('Dreamy');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 21:
			if(this.traits.includes('Creative') === false){
				this.traits.push('Creative');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 22:
			if(this.traits.includes('Leader') === false && this.traits.includes('Follower') === false){
				this.traits.push('Leader');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 23:
			if(this.traits.includes('Leader') === false && this.traits.includes('Follower') === false){
				this.traits.push('Follower');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 24:
			if(this.traits.includes('Emotional') === false && this.traits.includes('Emotionless') === false){
				this.traits.push('Emotional');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 25:
			if(this.traits.includes('Emotional') === false && this.traits.includes('Emotionless') === false){
				this.traits.push('Emotionless');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 26:
			if(this.traits.includes('Humorous') === false && this.traits.includes('Grim') === false){
				this.traits.push('Humorous');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 27:
			if(this.traits.includes('Humorous') === false && this.traits.includes('Grim') === false){
				this.traits.push('Grim');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 28:
			if(this.traits.includes('Conservative') === false && this.traits.includes('Liberal') === false){
				this.traits.push('Conservative');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 29:
			if(this.traits.includes('Conservative') === false && this.traits.includes('Liberal') === false){
				this.traits.push('Liberal');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 30:
			if(this.traits.includes('Aggresive') === false && this.traits.includes('Passive') === false){
				this.traits.push('Aggresive');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 31:
			if(this.traits.includes('Aggresive') === false && this.traits.includes('Passive') === false){
				this.traits.push('Passive');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 32:
			if(this.traits.includes('Selfsufficent') === false && this.traits.includes('Dependent') === false){
				this.traits.push('Selfsufficent');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 33:
			if(this.traits.includes('Selfsufficent') === false && this.traits.includes('Dependent') === false){
				this.traits.push('Dependent');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 34:
			if(this.traits.includes('Romantic') === false){
				this.traits.push('Romantic');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 35:
			if(this.traits.includes('Logical') === false && this.traits.includes('Illogical') === false){
				this.traits.push('Logical');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 36:
			if(this.traits.includes('Illogical') === false){
				this.traits.push('Illogical');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 37:
			if(this.traits.includes('Frivolous') === false){
				this.traits.push('Frivolous');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 38:
			if(this.traits.includes('Aloof') === false){
				this.traits.push('Aloof');
			} else {
				this.neutralTrait318B();
			}
		break;

		case 39:
			if(this.traits.includes('Pious') === false && this.traits.includes('Atheistic') === false){
				this.traits.push('Atheistic');
			} else {
				this.neutralTrait318B();
			}
		break;
	}
};

Character.prototype.lightSideTrait647 = function() {
	var ranTrait = Math.floor(Math.random() * (39 -1 + 1) + 1);
	switch(ranTrait){
		case 1:
			if(this.traits.includes('Optimist') === false && this.traits.includes('Pessimist') === false){
				this.traits.push('Optimist');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 2:
			if(this.traits.includes('Altuist') === false && this.traits.includes('Egoist') === false){
				this.traits.push('Altuist');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 3:
			if(this.traits.includes('Helpful') === false && this.traits.includes('Obstructive') === false){
				this.traits.push('Helpful');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 4:
			if(this.traits.includes('Kindly') === false && this.traits.includes('Cruel') === false){
				this.traits.push('Kindly');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 5:
			if(this.traits.includes('Considerate') === false && this.traits.includes('Careless') === false){
				this.traits.push('Considerate');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 6:
			if(this.traits.includes('Sober') === false && this.traits.includes('Thoughtless') === false){
				this.traits.push('Sober');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 7:
			if(this.traits.includes('Careful') === false && this.traits.includes('Flippant') === false){
				this.traits.push('Careful');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 8:
			if(this.traits.includes('Teetotaler') === false && this.traits.includes('Drunkard') === false){
				this.traits.push('Teetotaler');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 9:
			if(this.traits.includes('Trusting') === false && this.traits.includes('Suspicious') === false){
				this.traits.push('Trusting');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 10:
			if(this.traits.includes('Peaceful') === false && this.traits.includes('Violent') === false){
				this.traits.push('Peaceful');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 11:
			if(this.traits.includes('Peacemaker') === false && this.traits.includes('Argumentative') === false){
				this.traits.push('Peacemaker');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 12:
			if(this.traits.includes('Pious') === false && this.traits.includes('Irreverent') === false && this.traits.includes('Atheistic') === false){
				this.traits.push('Pious');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 13:
			if(this.traits.includes('Honest') === false && this.traits.includes('Cheat') === false){
				this.traits.push('Honest');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 14:
			if(this.traits.includes('Loving') === false && this.traits.includes('Hateful') === false){
				this.traits.push('Loving');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 15:
			if(this.traits.includes('Giving') === false && this.traits.includes('Selfish') === false){
				this.traits.push('Giving');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 16:
			if(this.traits.includes('Organized') === false && this.traits.includes('Filthy') === false ){
				this.traits.push('Organized');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 17:
			if(this.traits.includes('Clean') === false && this.traits.includes('Tardy') === false){
				this.traits.push('Clean');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 18:
			if(this.traits.includes('Punctual') === false && this.traits.includes('Self-doubting') === false){
				this.traits.push('Punctual');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 19:
			if(this.traits.includes('Self-Confident') === false && this.traits.includes('Cowardly') === false){
				this.traits.push('Self-Confident');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 20:
			if(this.traits.includes('Courageous') === false && this.traits.includes('Cowardly') === false){
				this.traits.push('Courageous');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 21:
			if(this.traits.includes('Respectful') === false && this.traits.includes('Disrepectful') === false){
				this.traits.push('Respectful');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 22:
			if(this.traits.includes('Calm') === false && this.traits.includes('Angry') === false){
				this.traits.push('Calm');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 23:
			if(this.traits.includes('Patient') === false && this.traits.includes('Impatient') === false){
				this.traits.push('Patient');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 24:
			if(this.traits.includes('Wise') === false && this.traits.includes('Foolish') === false){
				this.traits.push('Wise');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 25:
			if(this.traits.includes('Generous') === false && this.traits.includes('Greedy') === false){
				this.traits.push('Generous');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 26:
			if(this.traits.includes('Imaginative') === false && this.traits.includes('Dull') === false){
				this.traits.push('Imaginative');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 27:
			if(this.traits.includes('Forgiving') === false && this.traits.includes('Vengeful') === false){
				this.traits.push('Forgiving');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 28:
			if(this.traits.includes('Virtuous') === false && this.traits.includes('Amoral') === false && this.traits.includes('Immoral') === false){
				this.traits.push('Virtuous');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 29:
			if(this.traits.includes('Dependable') === false && this.traits.includes('Untrustworthy') === false){
				this.traits.push('Dependable');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 30:
			if(this.traits.includes('Well-Mannered') === false && this.traits.includes('Rude') === false){
				this.traits.push('Well-Mannered');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 31:
			if(this.traits.includes('Benign') === false && this.traits.includes('Harsh') === false){
				this.traits.push('Benign');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 32:
			if(this.traits.includes('Friendly') === false && this.traits.includes('Unfriendly') === false){
				this.traits.push('Friendly');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 33:
			if(this.traits.includes('Humble') === false && this.traits.includes('Egotistic') === false){
				this.traits.push('Humble');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 34:
			if(this.traits.includes('Energetic') === false && this.traits.includes('Lazy') === false){
				this.traits.push('Energetic');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 35:
			if(this.traits.includes('Truthful') === false && this.traits.includes('Liar') === false){
				this.traits.push('Truthful');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 36:
			if(this.traits.includes('Cheerful') === false && this.traits.includes('Morose') === false){
				this.traits.push('Cheerful');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 37:
			if(this.traits.includes('Enthusiastic') === false && this.traits.includes('Unenthusiastic') === false){
				this.traits.push('Enthusiastic');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 38:
			if(this.traits.includes('Thrifty') === false && this.traits.includes('Spendthrift') === false){
				this.traits.push('Thrifty');
			} else {
				this.lightSideTrait647();
			}
		break;

		case 39:
			if(this.traits.includes('Diplomatic') === false && this.traits.includes('Tactless') === false){
				this.traits.push('Diplomatic');
			} else {
				this.lightSideTrait647();
			}
		break;
	}
};

Character.prototype.darksideTrait648 = function(){
	var ranTrait = Math.floor(Math.random() * (39 -1 + 1) + 1);
	switch(ranTrait){
		case 1:
			if(this.traits.includes('Optimist') === false && this.traits.includes('Pessimist') === false){
				this.traits.push('Pessimist');
			} else {
				this.darksideTrait648();
			}
		break;

		case 2:
			if(this.traits.includes('Altuist') === false && this.traits.includes('Egoist') === false){
				this.traits.push('Egoist');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 3:
			if(this.traits.includes('Helpful') === false && this.traits.includes('Obstructive') === false){
				this.traits.push('Obstructive');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 4:
			if(this.traits.includes('Kindly') === false && this.traits.includes('Cruel') === false){
				this.traits.push('Cruel');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 5:
			if(this.traits.includes('Considerate') === false && this.traits.includes('Careless') === false){
				this.traits.push('Careless');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 6:
			if(this.traits.includes('Sober') === false && this.traits.includes('Thoughtless') === false){
				this.traits.push('Thoughtless');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 7:
			if(this.traits.includes('Careful') === false && this.traits.includes('Flippant') === false){
				this.traits.push('Flippant');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 8:
			if(this.traits.includes('Teetotaler') === false && this.traits.includes('Drunkard') === false){
				this.traits.push('Drunkard');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 9:
			if(this.traits.includes('Trusting') === false && this.traits.includes('Suspicious') === false){
				this.traits.push('Suspicious');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 10:
			if(this.traits.includes('Peaceful') === false && this.traits.includes('Violent') === false){
				this.traits.push('Violent');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 11:
			if(this.traits.includes('Peacemaker') === false && this.traits.includes('Argumentative') === false){
				this.traits.push('Argumentative');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 12:
			if(this.traits.includes('Pious') === false && this.traits.includes('Irreverent') === false){
				this.traits.push('Irreverent');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 13:
			if(this.traits.includes('Honest') === false && this.traits.includes('Cheat') === false){
				this.traits.push('Cheat');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 14:
			if(this.traits.includes('Loving') === false && this.traits.includes('Hateful') === false){
				this.traits.push('Hateful');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 15:
			if(this.traits.includes('Giving') === false && this.traits.includes('Selfish') === false){
				this.traits.push('Selfish');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 16:
			if(this.traits.includes('Organized') === false && this.traits.includes('Filthy') === false){
				this.traits.push('Slovenly');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 17:
			if(this.traits.includes('Clean') === false && this.traits.includes('Tardy') === false){
				this.traits.push('Filthy');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 18:
			if(this.traits.includes('Punctual') === false && this.traits.includes('Self-doubting') === false){
				this.traits.push('Tardy');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 19:
			if(this.traits.includes('Self-Confident') === false && this.traits.includes('Cowardly') === false){
				this.traits.push('Self-doubting');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 20:
			if(this.traits.includes('Courageous') === false && this.traits.includes('Cowardly') === false){
				this.traits.push('Cowardly');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 21:
			if(this.traits.includes('Respectful') === false && this.traits.includes('Disrepectful') === false){
				this.traits.push('Disrepectful');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 22:
			if(this.traits.includes('Calm') === false && this.traits.includes('Angry') === false){
				this.traits.push('Angry');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 23:
			if(this.traits.includes('Patient') === false && this.traits.includes('Impatient') === false){
				this.traits.push('Impatient');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 24:
			if(this.traits.includes('Wise') === false && this.traits.includes('Foolish') === false){
				this.traits.push('Foolish');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 25:
			if(this.traits.includes('Generous') === false && this.traits.includes('Greedy') === false){
				this.traits.push('Greedy');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 26:
			if(this.traits.includes('Imaginative') === false && this.traits.includes('Dull') === false){
				this.traits.push('Dull');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 27:
			if(this.traits.includes('Forgiving') === false && this.traits.includes('Vengeful') === false){
				this.traits.push('Vengeful');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 28:
			if(this.traits.includes('Virtuous') === false && this.traits.includes('Amoral') === false && this.traits.includes('Immoral') === false){
				this.traits.push('Immoral');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 29:
			if(this.traits.includes('Dependable') === false && this.traits.includes('Untrustworthy') === false){
				this.traits.push('Untrustworthy');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 30:
			if(this.traits.includes('Well-Mannered') === false && this.traits.includes('Rude') === false){
				this.traits.push('Rude');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 31:
			if(this.traits.includes('Benign') === false && this.traits.includes('Harsh') === false){
				this.traits.push('Harsh');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 32:
			if(this.traits.includes('Friendly') === false && this.traits.includes('Unfriendly') === false){
				this.traits.push('Unfriendly');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 33:
			if(this.traits.includes('Humble') === false && this.traits.includes('Egotistic') === false){
				this.traits.push('Egotistic');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 34:
			if(this.traits.includes('Energetic') === false && this.traits.includes('Lazy') === false){
				this.traits.push('Lazy');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 35:
			if(this.traits.includes('Truthful') === false && this.traits.includes('Liar') === false){
				this.traits.push('Liar');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 36:
			if(this.traits.includes('Cheerful') === false && this.traits.includes('Morose') === false){
				this.traits.push('Morose');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 37:
			if(this.traits.includes('Enthusiastic') === false && this.traits.includes('Unenthusiastic') === false){
				this.traits.push('Unenthusiastic');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 38:
			if(this.traits.includes('Thrifty') === false && this.traits.includes('Spendthrift') === false){
				this.traits.push('Spendthrift');
			}  else {
				this.darksideTrait648();
			}
		break;

		case 39:
			if(this.traits.includes('Diplomatic') === false && this.traits.includes('Tactless') === false){
				this.traits.push('Tactless');
			}  else {
				this.darksideTrait648();
			}
		break;
	}
};

Character.prototype.exoticPersonalityTrait649 = function(){
	var d20 = Math.floor(Math.random() * (20 -1 + 1) + 1);
	var d3 = Math.floor(Math.random() * (3 -1 + 1) + 1);
	d3++;
	if(d20 < 5){
		this.mentalAfflictions649b();
	} else if (d20 < 8 && d20 > 4){
		this.phobia649c();
	} else if (d20 < 11 && d20 > 7){
		this.allergy649d();
	} else if (d20 < 18 && d20 > 10){
		this.behaviorTag649e();
	} else if (d20 === 18 || d20 === 19){
		this.sexualDisorder649f();
	} else if (d20 > 19){
		for(i = 0; i < d3; i++){
			this.exoticPersonalityTrait649();
		}
	}
};

Character.prototype.mentalAfflictions649b = function(){
	var affliction = Math.floor(Math.random() * (13 -1 + 1) + 1);
	var d2 = Math.floor(Math.random() * (2 -1 + 1) + 1);
	var d3 = Math.floor(Math.random() * (3 -1 + 1) + 1);
	var d4 = Math.floor(Math.random() * (4 -1 + 1) + 1);
	var d6 = Math.floor(Math.random() * (6 -1 + 1) + 1);

	switch(affliction){
		case 1:
		if(this.traits.includes('Multiple Personalities') === false){
		this.traits.push('Multiple Personalities');
		this.specialBonus.push(this.charName + ' has ' + d3 + ' alternante personalities, litterially becoming another person.');
		} else {
			this.mentalAfflictions649b();
		}
		break;

		case 2:
		if(this.traits.includes('Compulsive Lying') === false){
		this.traits.push('Compulsive Lying');
		this.totalDark ++;
		} else {
			this.mentalAfflictions649b();
		}
		break;

		case 3:
		if(this.traits.includes('Paranoia') === false){
		this.traits.push('Paranoia');
		this.totalDark ++;
		} else {
			this.mentalAfflictions649b();
		}
		break;

		case 4:
		if(this.traits.includes('Hallucinations') === false){
		this.traits.push('Hallucinations');
		this.specialBonus.push(this.charName + " sees unreal visions and distortions of reality. Each occurance has a 10% chance to render " + this.objectivePronoun + " temporarily comatose.");
		} else {
			this.mentalAfflictions649b();
		}
		break;

		case 5:
		this.phobia649c();
		break;

		case 6:
		if(this.traits.includes('Manic-depressive') === false){
		this.traits.push('Manic-depressive');
		this.totalDark++;
		} else {
			this.mentalAfflictions649b();
		}
		break;

		case 7:
		if(this.traits.includes('Hypochondria') === false){
		this.traits.push('Hypochondria');
		} else {
			this.mentalAfflictions649b();
		}
		break;

		case 8:
		case 9:
		if(this.traits.includes('Depression') === false){
		this.traits.push('Depression');
		Math.round(this.weaponRank / 2);
		Math.round(this.meleeWeaponRank / 2);
		Math.round(this.missileWeaponRank / 2);
		Math.round(this.wildernessSurvivalRank / 2);
		Math.round(this.urbanSurvivalRank / 2);
		Math.round(this.huntingGatheringRank / 2);
		Math.round(this.ridingRank / 2);
		Math.round(this.streetFightRank / 2);
		Math.round(this.stealthRank / 2);
		} else {
			this.mentalAfflictions649b();
		}
		break;

		case 10:
		case 11:
			switch(d6){
				case 1:
					switch(d2){
						case 1:
						if(this.traits.includes('Obession: Hate of Non-Humans') === false){
						this.traits.push('Obession: Hate of Non-Humans');
						} else {
							this.mentalAfflictions649b();
						}
						break;
						case 2:
						if(this.traits.includes('Obession: Hate of Monsters') === false){
						this.traits.push('Obession: Hate of Monsters');
						} else {
							this.mentalAfflictions649b();
						}
						break;
					}
				break;

				case 2:
				if(this.traits.includes('Obession: Need to Destroy') === false){
				this.traits.push('Obession: Need to Destroy');
				this.totalDark++;
				} else {
					this.mentalAfflictions649b();
				}
				break;

				case 3:
				if(this.traits.includes('Obession: Superstion') === false){
				this.traits.push('Obession: Superstion');
				} else {
					this.mentalAfflictions649b();
				}
				break;

				case 4:
				if(this.traits.includes('Obession: Cleanliness') === false){
				this.traits.push('Obession: Cleanliness');
				} else {
					this.mentalAfflictions649b();
				}
				break;

				case 5:
					switch(d3){
						case 1:
						if(this.traits.includes('Obession: Collecting Gold') === false){
						this.traits.push('Obession: Collecting Gold');
						} else {
							this.mentalAfflictions649b();
						}
						break;

						case 2:
						if(this.traits.includes('Obession: Collecting Animals') === false){
						this.traits.push('Obession: Collecting Animals');
						} else {
							this.mentalAfflictions649b();
						}
						break;

						case 3:
						if(this.traits.includes('Obession: Collecting Beautiful Things') === false){
						this.traits.push('Obession: Collecting Beautiful Things');
						} else {
							this.mentalAfflictions649b();
						}
						break;
					}
				break;

				case 6:
				if(this.traits.includes('Obession: Helping Others') === false){
				this.traits.push('Obession: Helping Others');
				} else {
					this.mentalAfflictions649b();
				}
				break;
			}
		break;

		case 12:
		if(this.traits.includes('Kleptomania') === false){
		this.traits.push('Kleptomania');
		this.totalDark++;
		} else {
			this.mentalAfflictions649b();
		}
		break;

		case 13:
		if(this.traits.includes('Pyromania') === false){
		this.traits.push('Pyromania');
		this.totalDark++;
		} else {
			this.mentalAfflictions649b();
		}
		break;
	}
};

Character.prototype.phobia649c = function(){
	var phobia = ['Ablutophobia', 'Acarophobia', 'Acerophobia', 'Acousticophobia', 'Acrophobia', 'Aerophobia', 'Aeroacrophobia', 'Aeronausiphobia', 'Agateophobia', 'Agliophobia', 'Agoraphobia', 'Agraphobia', 'Agrizoophobia', 'Agyrophobia', 'Aichmophobia', 'Albuminurophobia', 'Alektorophobia', 'Alliumphobia', 'Allodoxaphobia', 'Altophobia', 'Amathophobia', 'Amaxophobia', 'Amnesiphobia', 'Amychophobia', 'Anablephobia', 'Ancraophobia ', 'Androphobia', 'Anginophobia', 'Angrophobia', 'Ankylophobia', 'Anthophobia', 'Anthropophobia.', 'Antlophobia', 'Anuptaphobia', 'Apeirophobia', 'Aphenphosmphobia ', 'Apiphobia', 'Apotemnophobia', 'Arachibutyrophobia', 'Arachnephobia', 'Arithmophobia', 'Arrhenphobia', 'Arsonphobia', 'Asthenophobia', 'Astrapophobia', 'Astrophobia', 'Asymmetriphobia', 'Ataxiophobia', 'Ataxophobia', 'Atelophobia', 'Atephobia', 'Athazagoraphobia', 'Atychiphobia', 'Aulophobia', 'Aurophobia', 'Auroraphobia', 'Autodysomophobia', 'Automatonophobia', 'Automysophobia', 'Autophobia', 'Aviophobia ', 'Bacillophobia', 'Bacteriophobia', 'Ballistophobia', 'Bolshephobia', 'Barophobia', 'Basophobia ', 'Bathmophobia', 'Bathophobia', 'Batophobia', 'Batrachophobia', 'Belonephobia', 'Bibliophobia', 'Blennophobia', 'Bogyphobia', 'Botanophobia', 'Bromidrosiphobia ', 'Brontophobia', 'Bufonophobia', 'Cacophobia', 'Cainophobia ', 'Caligynephobia', 'Carcinophobia', 'Cardiophobia', 'Carnophobia', 'Catagelophobia', 'Catapedaphobia', 'Cathisophobia', 'Catoptrophobia', 'Cenophobia', 'Cheimatophobia', 'Chemophobia', 'Cherophobia', 'Chionophobia', 'Chiraptophobia', 'Chirophobia', 'Chiroptophobia', 'Cholerophobia', 'Chorophobia', 'Chrematophobia', 'Chromatophobia', 'Chronophobia', 'Chronomentrophobia', 'Claustrophobia', 'Cleithrophobia ', 'Cleptophobia', 'Climacophobia', 'Clinophobia', 'Clithrophobia ', 'Cnidophobia', 'Cometophobia', 'Coimetrophobia', 'Coitophobia', 'Contreltophobia', 'Coprastasophobia', 'Coprophobia', 'Consecotaleophobia', 'Coulrophobia', 'Counterphobia', 'Cremnophobia', 'Cryophobia', 'Crystallophobia', 'Cyclophobia', 'Kymophobia', 'Cynophobia', 'Cypridophobia ', 'Decidophobia', 'Defecaloesiophobia', 'Deipnophobia', 'Dementophobia', 'Demonophobia', 'Dendrophobia', 'Dentophobia', 'Dermatophobia', 'Dermatophobia  ', 'Dextrophobia', 'Diabetophobia', 'Didaskaleinophobia', 'Dikephobia', 'Dinophobia', 'Diplophobia', 'Dipsophobia', 'Dishabiliophobia', 'Disposophobia', 'Domatophobia', 'Doraphobia', 'Doxophobia', 'Dromophobia', 'Dutchphobia', 'Dysmorphophobia', 'Dystychiphobia', 'Ecclesiophobia', 'Ecophobia', 'Eisoptrophobia', 'Electrophobia', 'Eleutherophobia', 'Emetophobia', 'Enetophobia', 'Enochlophobia', 'Enissophobia', 'Entomophobia', 'Eosophobia', 'Ephebiphobia', 'Epistaxiophobia', 'Epistemophobia', 'Equinophobia', 'Eremophobia', 'Ereuthrophobia', 'Ergophobia', 'Erotophobia', 'Euphobia', 'Eurotophobia', 'Erythrophobia ', 'Febriphobia ', 'Felinophobia', 'Gamophobia', 'Geliophobia', 'Gelotophobia', 'Geniophobia', 'Genophobia', 'Genuphobia', 'Gephyrophobia ', 'Gerascophobia', 'Gerontophobia', 'Geumaphobia ', 'Glossophobia', 'Gnosiophobia', 'Graphophobia', 'Gymnophobia', 'Gynophobia', 'Hadephobia', 'Hagiophobia', 'Hamartophobia', 'Harpaxophobia', 'Hedonophobia', 'Heliophobia', 'Hellenologophobia', 'Helminthophobia', 'Hemophobia ', 'Heresyphobia ', 'Herpetophobia', 'Heterophobia', 'Hexakosioihexekontahexaphobia', 'Hierophobia', 'Hippophobia', 'Hobophobia', 'Hodophobia', 'Hormephobia', 'Homilophobia', 'Hominophobia', 'Homophobia', 'Hoplophobia', 'Hydrargyophobia', 'Hydrophobia', 'Hydrophobophobia', 'Hyelophobia ', 'Hygrophobia', 'Hylephobia', 'Hylophobia', 'Hypengyophobia ', 'Hypnophobia', 'Hypsiphobia', 'Iatrophobia', 'Ichthyophobia', 'Ideophobia', 'Illyngophobia', 'Iophobia', 'Insectophobia ', 'Isolophobia', 'Isopterophobia', 'Ithyphallophobia', 'Kainolophobia ', 'Kakorrhaphiophobia', 'Katagelophobia', 'Kathisophobia', 'Katsaridaphobia', 'Kenophobia', 'Keraunophobia ', 'Kinetophobia ', 'Kleptophobia', 'Koinoniphobia', 'Kolpophobia', 'Kopophobia', 'Kosmikophobia', 'Kymophobia', 'Kynophobia', 'Kyphophobia', 'Lachanophobia', 'Laliophobia', 'Lepraphobia', 'Leukophobia', 'Levophobia', 'Ligyrophobia', 'Lilapsophobia', 'Limnophobia', 'Linonophobia', 'Liticaphobia', 'Lockiophobia', 'Logophobia', 'Luiphobia', 'Lutraphobia', 'Lygophobia', 'Lyssophobia', 'Macrophobia', 'Mageirocophobia', 'Maieusiophobia', 'Malaxophobia', 'Maniaphobia', 'Mastigophobia', 'Mechanophobia', 'Medomalacuphobia', 'Medorthophobia', 'Megalophobia', 'Melissophobia', 'Melanophobia', 'Melophobia', 'Meningitophobia', 'Menophobia', 'Merinthophobia', 'Metallophobia', 'Metathesiophobia', 'Meteorophobia', 'Methyphobia', 'Metrophobia', 'Microphobia', 'Mysophobia', 'Mnemophobia', 'Molysmophobia', 'Monophobia', 'Monopathophobia', 'Motorphobia', 'Mottephobia', 'Musophobia', 'Mycophobia', 'Mycrophobia', 'Myctophobia', 'Myrmecophobia', 'Mythophobia', 'Nebulaphobia', 'Necrophobia', 'Nelophobia', 'Neopharmaphobia', 'Neophobia', 'Nephophobia', 'Noctiphobia', 'Nomatophobia', 'Nosocomephobia', 'Nosophobia', 'Nostophobia', 'Novercaphobia', 'Nudophobia', 'Numerophobia', 'Nyctohylophobia', 'Nyctophobia', 'Obesophobia', 'Ochlophobia', 'Ochophobia', 'Octophobia ', 'Odontophobia', 'Odynophobia', 'Oenophobia', 'Olfactophobia', 'Ombrophobia', 'Ommetaphobia', 'Omphalophobia', 'Oneirophobia', 'Oneirogmophobia', 'Onomatophobia', 'Ophidiophobia', 'Ophthalmophobia', 'Opiophobia', 'Optophobia', 'Ornithophobia', 'Orthophobia', 'Osphresiophobia', 'Ostraconophobia', 'Ouranophobia', 'Pagophobia', 'Panthophobia', 'Panophobia', 'Papaphobia', 'Papyrophobia', 'Paralipophobia', 'Paraphobia', 'Parasitophobia', 'Paraskavedekatriaphobia', 'Parthenophobia', 'Pathophobia', 'Patroiophobia', 'Parturiphobia', 'Peccatophobia', 'Pediophobia', 'Pedophobia', 'Peladophobia', 'Pellagrophobia', 'Peniaphobia', 'Phagophobia', 'Phalacrophobia', 'Phallophobia', 'Pharmacophobia', 'Phasmophobia', 'Phengophobia', 'Philematophobia', 'Philophobia', 'Philosophobia', 'Phobophobia', 'Photoaugliaphobia', 'Photophobia', 'Phonophobia', 'Phronemophobia', 'Phthiriophobia', 'Phthisiophobia', 'Placophobia', 'Plutophobia', 'Pluviophobia', 'Pneumatiphobia', 'Pnigerophobia', 'Pogonophobia', 'Poliosophobia', 'Politicophobia', 'Polyphobia', 'Poinephobia', 'Ponophobia', 'Porphyrophobia', 'Potamophobia', 'Potophobia', 'Pharmacophobia', 'Proctophobia', 'Prosophobia', 'Psellismophobia', 'Psychophobia', 'Psychrophobia', 'Pteromerhanophobia', 'Pteronophobia', 'Pupaphobia ', 'Pyrexiophobia', 'Pyrophobia', 'Quadraphobia', 'Quadriplegiphobia', 'Quintaphobia', 'Radiophobia', 'Ranidaphobia', 'Rectophobia', 'Rhabdophobia', 'Rhypophobia', 'Rhytiphobia', 'Rupophobia', 'Russophobia', 'Satanophobia', 'Scabiophobia', 'Scatophobia', 'Scelerophibia', 'Sciophobia', 'Scoleciphobia', 'Scolionophobia', 'Scopophobia', 'Scotomaphobia', 'Scotophobia', 'Scriptophobia', 'Selachophobia', 'Selaphobia', 'Selenophobia', 'Seplophobia', 'Hippopotomonstrosesquippedaliophobia', 'Siderodromophobia', 'Siderophobia', 'Sinistrophobia', 'Sinophobia', 'Cibophobia ', 'Soceraphobia', 'Social Phobia', 'Sociophobia', 'Somniphobia', 'Sophophobia', 'Soteriophobia ', 'Spacephobia', 'Spectrophobia', 'Spermatophobia', 'Spheksophobia', 'Stasibasiphobia', 'Stenophobia', 'Stygiophobia', 'Suriphobia', 'Symbolophobia', 'Symmetrophobia', 'Syngenesophobia', 'Syphilophobia', 'Tachophobia', 'Taeniophobia', 'Taphephobia', 'Tapinophobia', 'Taurophobia', 'Technophobia', 'Teleophobia', 'Telephonophobia', 'Teratophobia', 'Testophobia', 'Tetanophobia', 'Textophobia', 'Thaasophobia', 'Thalassophobia', 'Thanatophobia ', 'Theatrophobia', 'Theologicophobia', 'Theophobia', 'Thermophobia', 'Tocophobia', 'Tomophobia', 'Tonitrophobia', 'Topophobia', 'Toxicophobia', 'Traumatophobia', 'Tremophobia', 'Trichinophobia', 'Trichopathophobia', 'Triskaidekaphobia', 'Tropophobia', 'Trypanophobia', 'Tuberculophobia', 'Tyrannophobia', 'Uranophobia', 'Urophobia', 'Vaccinophobia', 'Venustraphobia', 'Verbophobia', 'Verminophobia', 'Vestiphobia', 'Virginitiphobia', 'Vitricophobia', 'Walloonphobia', 'Wiccaphobia', 'Xanthophobia', 'Xenoglossophobia', 'Xenophobia', 'Xerophobia', 'Xylophobia', 'Xyrophobia', 'Zelophobia', 'Zeusophobia', 'Zemmiphobia', 'Zoophobia', 'Again'];
	var chosenPhobia = phobia.randomElement();
	var d3p1 = Math.floor(Math.random() * (4 -2 + 1) + 2);
	if(chosenPhobia === "Again"){
		for(i=0; i < d3p1; i++){
			this.phobia649c();
		}
	} else if(this.traits.includes(chosenPhobia) || this.traits.includes('Again')){
		this.phobia649c();
	} else {
		this.traits.push(chosenPhobia);
	}
};

Character.prototype.allergy649d = function(){
	var allergy = ['Fur', 'Dust', 'Insect Bites and Stings', 'Common Food Type', 'Unusual Food Type', 'Exotic Food Type', 'Common Medicine Type', 'Unusual Medicine Type', 'Mold', 'Magic'];
	var allergic = allergy.randomElement();
	var chosenAllergy = "Allergic to " + allergic;
	 if(this.traits.includes(chosenAllergy) === true){
		this.allergy649d();
	} else {
		this.traits.push(chosenAllergy);
	}
};

Character.prototype.behaviorTag649e = function(){
	console.log('Behavior Tag');

};

Character.prototype.sexualDisorder649f = function(){
	var sexualDisordersArry = ['Transsexualism*', 'Asexualism*', 'Shyness Around the Opposite Sex*', 'Homosexuality*', 'Bisexuality*', 'Transvestitism*', 'LikesSex', 'Sadism*', 'Masochism*', 'Prudish*', 'Voyeurism*', "Fetishism: Women's Clothing*", "Fetishism: Men's Clothing*", "Fetishism: Shoes*", "Fetishism: Hair*", "Fetishism: Animals*", 'Necrophilia*'];
	var sexualDisorder = sexualDisordersArry.randomElement();
		if(sexualDisorder === "LikesSex"){
			if (this.charGender === 'Male' && this.traits.includes('Satyrism*') !== true){
				this.traits.push('Satyrism*');
			} else if (this.charGender === "Female" && this.traits.includes('Nyphomania*')){
				this.traits.push('Nyphomania*');
			}
		}
		 if(this.traits.includes(sexualDisorder)){
			this.sexualDisorder649f();
		} else if (sexualDisorder === "LikesSex"){
		} else {
			this.traits.push(sexualDisorder);
		}
		if(this.playerNote.includes("* These traits are indented for responsible roleplayers. Flippant, careless, or callous portrayal of these traits may embarrass, annoy, or offend other players or the GM. If you feel you cannot role play these traits responsibly please either ignore them or generate a new character.") === false){
			this.playerNote.push("* These traits are indented for responsible roleplayers. Flippant, careless, or callous portrayal of these traits may embarrass, annoy, or offend other players or the GM. If you feel you cannot role play these traits responsibly please either ignore them or generate a new character ");
		}
		if (sexualDisorder === "LikesSex"){

		}
};