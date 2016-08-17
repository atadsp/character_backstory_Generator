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

	if(type == 'father' || type == 'uncle' || type == 'grandfather' || type == 'male cousin' || type == 'brother' || type == 'bastard brother'){
		npc.charGender = 'Male';
		npc.subjectivePronoun = "he";
		npc.possesivePronoun = "his";
		npc.objectivePronoun = "him";
		npc.reflexivePronoun = "himself";
		npc.charRace = player.charRace;
		npc.charCulture = player.charCulture;
		npc.charEnviroment = player.charEnviroment;
		npc.charSocial = player.charSocial;
	} else if (type == 'mother' || type =='aunt' || type == 'grandmother' || type == 'female cousin' || type == 'sister' || type == 'bastard sister'){
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
	
	if(type == 'bastard brother'){
		npc.charName = 'Brother';
		npc.isBastard = true;
	} else if (type == 'bastard sister'){
		npc.charName = 'Sister';
		npc.isBastard = true;
	} else {
		npc.charName = type.capitalizeFirstLetter();
	}
};
