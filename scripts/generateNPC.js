var npc = new Character();

Character.prototype.generateNPC = function(type){
	npc.charName = "";
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
	npc.isPlayerCharacter = false;

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
			gmSecret =  npc.possesivePronoun + " has an adventurer's hoard of gold and treasure.";
		} else if (reasonGM === 2){
			gmSecret =  npc.subjectivePronoun + " is secretely a thief. " + this.possesivePronoun + " income comes from stealing.";
		} else if (reasonGM === 3){
			gmSecret =  npc.possesivePronoun + "'s money comes from a secret inheritance.";
		} else if (reasonGM === 4){
			gmSecret =  npc.possesivePronoun + " discovered a lost treasure and loots it as needed.";
		} else if (reasonGM === 5){
			gmSecret =  npc.possesivePronoun + " recieves money from investments.";
		} else if (reasonGM === 6) {
			gmSecret =  npc.possesivePronoun + " couterfeits money, even making fake gold.";
		}
		npc.occupation = npc.charName + " does not have regular work. " + gmSecret;
	}
	var ranNote = Math.floor(Math.random() * (3 -1 + 1) + 1);
	for(i=0; i<ranNote; i++){
	npc.noteworthyItems114b();
	}
};

Character.prototype.noteworthyItems114b = function(){

};