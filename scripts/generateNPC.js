var npc = new Character();

Character.prototype.generateNPC = function(type){
	npc.charCultMod = 0;
	npc.charSocMod = 0;
	npc.isNoble = false;
	npc.tiMod=0;
	npc.nobleTitle = "";
	npc.nativeLiteracy = 0;
	npc.foreignLiteracy.length = 0;
	npc.weaponRank = 0;
	npc.meleeWeaponRank = 0;
	npc.missileWeaponRank = 0;
	npc.wildernessSurvivalRank = 0;
	npc.huntingGatheringRank = 0;
	npc.urbanSurvivalRank = 0;
	npc.ridingRank = 0;
	npc.streetFightRank = 0;
	npc.itemArry.length = 0;
	npc.wealth = 0;
	npc.insaneresist = 0;
	npc.charLegitMod = 0;
	npc.bastardReason = "";
	npc.isBastard = false;
	npc.isFatherKnown = false;
	npc.nobleBastardMessage = "";
	npc.isOrphan = false;
	npc.raisedInOrphanage = false;
	npc.adopted = false;
	npc.birthday = "";
	npc.birthMonth = "";
	npc.birthPlace ="";
	npc.birthEvent.length = 0;
	npc.birthMod = 0;
	npc.foreignLand = false;
	npc.hasbonus = false;
	npc.attributeBonus = [];
	npc.specialBonus = [];
	npc.naturalArmorBonus = 0;
	npc.stealthRank = 0;
	npc.bornAtNight = false;
	npc.bornAtDay = false;
	npc.strength = 0;
	npc.dextarity = 0;
	npc.consitution = 0;
	npc.intelligence = 0;
	npc.wisdom = 0;
	npc.charisma = 0;
	npc.occupation = "";
	npc.hobby = "";
	npc.birthEventNum.length = 0;
	npc.note.length = 0;

	if(type == 'father' || type == 'uncle' || type == 'grandfather' || type == 'male cousin' || type == 'brother'){
		npc.charGender = 'Male';
		npc.subjectivePronoun = "he";
		npc.possesivePronoun = "his";
		npc.objectivePronoun = "him";
		npc.reflexivePronoun = "himself";
		npc.charRace = player.charRace;
		npc.charCulture = player.charCulture;
		npc.charEnviroment = player.charEnviroment;
		npc.charSocial = player.charSocial;
	} else if (type == 'mother' || type =='aunt' || type == 'grandmother' || type == 'female cousin' || type == 'sister'){
		npc.charGender = 'Female';
		npc.subjectivePronoun = "she";
		npc.possesivePronoun = "her";
		npc.objectivePronoun = "her";
		npc.reflexivePronoun = "herself";
		npc.charRace = player.charRace;
		npc.charCulture = player.charCulture;
		npc.charEnviroment = player.charEnviroment;
		npc.charSocial = player.charSocial;
	} else if(type == 'bastard brother'){
		npc.isBastard = true;
		npc.charGender = 'Male';
		npc.subjectivePronoun = "he";
		npc.possesivePronoun = "his";
		npc.objectivePronoun = "him";
		npc.reflexivePronoun = "himself";
		npc.charRace = player.charRace;
		npc.charCulture = player.charCulture;
		npc.charEnviroment = player.charEnviroment;
		npc.charSocial = player.charSocial;
	} else if (type == 'bastard sister'){
		npc.isBastard = true;
		npc.charGender = 'Female';
		npc.subjectivePronoun = "she";
		npc.possesivePronoun = "her";
		npc.objectivePronoun = "her";
		npc.reflexivePronoun = "herself";
		npc.charRace = player.charRace;
		npc.charCulture = player.charCulture;
		npc.charEnviroment = player.charEnviroment;
		npc.charSocial = player.charSocial;
	}
npc.charName = type.capitalizeFirstLetter();
npc.npcOccupation114a();
};

Character.prototype.npcOccupation114a = function(){
	var occupationStart = Math.floor(Math.random() * (20 -1 + 1) + 1);
	if(occupationStart < 19){
		if(npc.charCulture === "Primitive") {
			npc.primativeOccupation420a(npc.charSocMod);
		} else if (npc.charCulture === "Nomad"){
			npc.nomadOccupation421a(npc.charSocMod);
		} else if (npc.charCulture === "Barbarian"){
			npc.barbarianOccupatio422a(npc.charSocMod);
		} else {
			npc.civilizedOccupation423a(npc.charSocMod);
		}
	} else if (occupationStart === 19){
		npc.adventures757();
	} else {
		var gmSecret = "";
		var reasonGM = Math.floor(Math.random() * (6 -1 + 1) + 1);
		if(reasonGM === 1){
			gmSecret =  npc.possesivePronoun.capitalizeFirstLetter() + " has an adventurer's hoard of gold and treasure.";
		} else if (reasonGM === 2){
			gmSecret =  npc.subjectivePronoun.capitalizeFirstLetter() + " is secretely a thief. " + this.possesivePronoun + " income comes from stealing.";
		} else if (reasonGM === 3){
			gmSecret =  npc.possesivePronoun.capitalizeFirstLetter() + "'s money comes from a secret inheritance.";
		} else if (reasonGM === 4){
			gmSecret =  npc.possesivePronoun.capitalizeFirstLetter() + " discovered a lost treasure and loots it as needed.";
		} else if (reasonGM === 5){
			gmSecret =  npc.possesivePronoun.capitalizeFirstLetter() + " recieves money from investments.";
		} else if (reasonGM === 6) {
			gmSecret =  npc.possesivePronoun.capitalizeFirstLetter() + " couterfeits money, even making fake gold.";
		}
		npc.occupation = npc.charName + " does not have regular work. " + gmSecret;
	}
	var ranNote = Math.floor(Math.random() * (3 -1 + 1) + 1);
	for(i=0; i<ranNote; i++){
	npc.noteworthyItems114b();
	}
	npc.postNPC();
};

Character.prototype.noteworthyItems114b = function(){
	var noteRan = Math.floor(Math.random() * (15 -1 + 1) + 1);
	var d2 = Math.floor(Math.random() * (2 -1 + 1) + 1);
	var d3 = Math.floor(Math.random() * (3 -1 + 1) + 1);
	var d4  = Math.floor(Math.random() * (4 -1 + 1) + 1);
	var d4two = Math.floor(Math.random() * (4 -1 + 1) + 1);
	var d6 = Math.floor(Math.random() * (6 -1 + 1) + 1);
	switch(noteRan){
		case 1:
			if(d6 < 4){
				npc.lightSideTrait647();
			} else if (d6 === 6){
				npc.exoticPersonalityTrait649();
			} else {
				npc.darksideTrait648();
			}
		break;
		case 2:
			for(i=0; i < d3; i++){
				npc.unusualBirthEvents113(0);
			}
		break;
		case 3:
			npc.hobby427();
		break;
		case 4:
			npc.giftsAndLegacies863('npc');
		break;
		case 5:
			npc.note.push(npc.charName + ' is creative, inventive and possibly even artistic');
		break;
		case 6:
			npc.exoticEvents544('npc');
		break;
		case 7:
			npc.note.push(npc.charName + ' told tales of a legendary lost treature and gave vague hints regarding its location.');
		break;
		case 8:
			npc.inServiceOf543('npc');
		break;
		case 9:
			npc.militaryExperience535a('npc');
		break;
		case 10:
			npc.deities864('npc');
		break;
		case 11:
			npc.note.push(npc.charName + ' is important in ' + npc.possesivePronoun + ' home town, not just another face in the crowd.');
		break;
		case 12:
			switch(d4){
				case 1:
				npc.note.push(npc.charName + ' is particularly loving towards ' + npc.possesivePronoun + ' family.');
				break;
				case 2:
				npc.note.push(npc.charName + ' does not love ' + npc.possesivePronoun + ' family or children.');
				break;
				case 3:
				npc.note.push(npc.charName + ' is unfaithful to ' + npc.possesivePronoun + ' spouce.');
				break;
				case 4:
				npc.note.push(npc.charName + ' has been married more than once. ' + npc.possesivePronoun.capitalizeFirstLetter() + ' current spouce is number: ' + d4two + '.');
				break;
			}
		break;
		case 13:
			npc.note.push(npc.charName + ' is from a foreign land.');
		break;
		case 14:
			npc.seriousWounds870('npc');
		break;
		case 15:
			for(i = 0; i < d3; i++){
				npc.exoticPersonalityTrait649();
			}
		break;
	}
};

Character.prototype.postNPC = function(){
$( "#npcInfo" ).append( "<div class='npcname'>Name: " + npc.charName + "</div>" );
$( "#npcInfo" ).append( "<div class='npcgender'>Gender: " + npc.charGender + "</div>" );
$( "#npcInfo" ).append( "<div class='npcrace'>Race: " + npc.charRace + "</div>" );
$( "#npcInfo" ).append( "<div class='npcculture'>Culture: " + npc.charCulture + "</div>" );
$( "#npcInfo" ).append( "<div class='npcenviroment'>Enviroment: " + npc.charEnviroment + "</div>" );
$( "#npcInfo" ).append( "<div class='social'>Social Status: " + npc.charSocial + "</div>" );
if(npc.isNoble === true && npc.isOrphan === false){
	$("#npcInfo").append( "<div class='npcnoble'>Noble Title: " + npc.nobleTitle + "</div>" );
}
$("#npcInfo").append("<br>");
for(i=0; i < npc.note.length; i++){
$("#npcInfo").append("<div class='note'>" + npc.note[i] + "</div>");
}
$( "#npcInfo" ).append("<hr>");
};