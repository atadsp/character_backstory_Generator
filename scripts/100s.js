//character object
function Character(){
	//basis character information
	this.charName = "";
	this.isPlayerCharacter = true;
	this.charGender = "";
	this.subjectivePronoun = "";
	this.possesivePronoun = "";
	this.objectivePronoun = "";
	this.reflexivePronoun = "";
	this.charRace = "";
	//main cultural variables
	this.charCultMod = 0;
	this.charCulture = "";
	this.charEnviroment = "";
	//literacy
	this.nativeLiteracy = 0;
	this.foreignLiteracy = [];
	//skill ranks
	this.weaponRank = 0;
	this.meleeWeaponRank = 0;
	this.missileWeaponRank = 0;
	this.wildernessSurvivalRank = 0;
	this.huntingGatheringRank = 0;
	this.urbanSurvivalRank = 0;
	this.ridingRank = 0;
	//array of all character items
	this.itemArry = [];
	//special resistances
	this.insaneresist = 0;
}
var player = new Character();

Character.prototype.generateCharacter = function(){
this.charName = $("#charName").val();
this.isPlayerCharacter = true;

var rangen = Math.floor(Math.random() * (2 - 1 +1)) + 1;
if (rangen === 1){
	this.charGender = 'Female';
	this.subjectivePronoun = "she";
	this.possesivePronoun = "hers";
	this.objectivePronoun = "her";
	this.reflexivePronoun = "herself";
}
else{
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
	this.wildernessSurvivalRank = this.wildernessSurvivalRank + 5;
	this.huntingGatheringRank = this.huntingGatheringRank + 3;
	this.urbanSurvivalRank = this.urbanSurvivalRank + 1;
	this.nativeLiteracy = this.nativeLiteracy + 5;
	this.itemArry.push('One-handed Weapon');
	this.charEnviroment = "Wilderness";

} else if (rancult === 2 || rancult === 3){
	this.charCulture = "Nomad";
	this.charCultMod = 0;
	this.ridingRank = this.ridingRank + 4;
	this.wildernessSurvivalRank = this.wildernessSurvivalRank + 4;
	this.urbanSurvivalRank = this.urbanSurvivalRank + 1;
	this.nativeLiteracy = this.nativeLiteracy + 20;
	this.foreignLiteracy.push(10, 10);
	this.charEnviroment = "Wilderness";
//chance for a riding animal
	var animalran = Math.floor(Math.random() * (4 - 1 +1)) + 1;
	if (animalran < 4) {
		this.itemArry.push('Riding Animal');
	}
//males get weapons and weapon skills because of sexism
	if (this.charGender === 'Male') {
		this.weaponRank = this.weaponRank + 3;
		this.itemArry.push('One handed melee weapon', 'Missile weapon');
	}
} else if ( rancult < 7 && rancult > 3) {
	this.charCulture = "Barbarian";
	this.charCultMod = 2;
	this.meleeWeaponRank = this.meleeWeaponRank + 3;
	this.missileWeaponRank = this.missileWeaponRank + 3;
	this.itemArry.push('One handed melee weapon', 'Missile weapon');
	this.nativeLiteracy = 10;
//determins the enviroment of the character
	var enviroran = Math.floor(Math.random() * (2 - 1 + 1) + 1);
	if (enviroran === 1){
		this.charEnviroment = "Wilderness";
		this.urbanSurvivalRank = this.urbanSurvivalRank + 1;
		this.wildernessSurvivalRank = this.wildernessSurvivalRank + 5;
	} else {
		this.charEnviroment = "Urban";
		this.urbanSurvivalRank = this.urbanSurvivalRank + 5;
		this.wildernessSurvivalRank = this.wildernessSurvivalRank + 1;
	}
} else if (rancult < 10 && rancult > 6){
	this.charCulture = "Civilized";
	this.charCultMod = 4;
	this.nativeLiteracy = this.nativeLiteracy + 30;
//Chance of developing a hobby
	var hobbyran = Math.floor(Math.random() * (2 - 1 + 1) + 1);
	if (hobbyran === 1){
		this.hobby427();
	}
//determins the enviroment of the character
	var enviroran = Math.floor(Math.random() * (2 - 1 + 1) + 1);
	if (enviroran === 1){
		this.charEnviroment = "Wilderness";
		this.wildernessSurvivalRank = this.wildernessSurvivalRank + 2;
	} else {
		this.charEnviroment = "Urban";
		this.urbanSurvivalRank = this.urbanSurvivalRank + 2;
	}
} else if (rancult === 10){
	this.charCulture = "Civilized - Decadent";
	this.charCultMod = 7;
	this.charEnviroment = "Urban";
	this.urbanSurvivalRank = this.urbanSurvivalRank + 3;
	this.nativeLiteracy = this.nativeLiteracy + 20;
	this.foreignLiteracy.push(10);
}
this.postChar();
};

Character.prototype.postChar = function(){
$( "#characterInfo" ).empty();
$( "#characterInfo" ).append( "<br> <div id='name'>Name: " + this.charName + "</div>" );
$( "#characterInfo" ).append( "<div id='gender'>Gender: " + this.charGender + "</div>" );
$( "#characterInfo" ).append( "<div id='race'>Race: " + this.charRace + "</div>" );
$( "#characterInfo" ).append( "<div id='culture'>Culture: " + this.charCulture + "</div>" );
$( "#characterInfo" ).append( "<div id='enviroment'>Enviroment: " + this.charEnviroment + "</div>" );
};