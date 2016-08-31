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
	//Character social variables
	this.charSocial = "";
	this.charSocMod = 0;
	//nobility Variables 
	this.isNoble = false;
	this.tiMod=0;
	this.nobleTitle = "";
	//legitimacy
	this.charLegitMod = 0;
	this.bastardReason = "";
	this.isBastard = false;
	this.isFatherKnown = false;
	this.nobleBastardMessage = "";
	//family
	this.isOrphan = false;
	this.raisedInOrphanage = false;
	this.adopted = false;
	this.siblingNum = 0;
	this.bastardSiblings = 0;
	this.birthOrder = "";
	this.totalSibling = 0;
	//birth information
	this.birthday = "";
	this.birthMonth = "";
	this.birthPlace ="";
	this.birthEvent = [];
	this.birthEventNum = [];
	this.birthMod = 0;
	this.foreignLand = false;
	this.hasbonus = false;
	this.bornAtNight = false;
	this.bornAtDay = false;
	//childhood
	this.childAgeEvent = [];
	this.childEvent = [];
	//adolecent 
	this.adolecentEventAge = [];
	this.adolecentEvent = [];
	//literacy
	this.nativeLiteracy = 0;
	this.foreignLiteracy = [];
	//attributes 
	this.strength = 0;
	this.dextarity = 0;
	this.consitution = 0;
	this.intelligence = 0;
	this.wisdom = 0;
	this.charisma = 0;
	//skill ranks
	this.weaponRank = 0;
	this.meleeWeaponRank = 0;
	this.missileWeaponRank = 0;
	this.wildernessSurvivalRank = 0;
	this.urbanSurvivalRank = 0;
	this.huntingGatheringRank = 0;
	this.ridingRank = 0;
	this.streetFightRank = 0;
	this.stealthRank = 0;
	//array of all character items
	this.itemArry = [];
	this.wealth = 0;
	//special bonuses
	this.insaneresist = 0;
	this.attributeBonus = [];
	this.specialBonus = [];
	this.naturalArmorBonus = 0;
	//occupation
	this.occupation = "";
	this.hobby = "";
	//traits
	this.lightSideTraits = [];
	this.darkSideTraits = [];
	this.exoticTraits = [];
	this.neutralTraits = [];
	this.randomTraits = [];
	this.traits = [];
	this.traitStrength = [];
	//other stuff
	this.loverDeath = false;
	this.runaway = false;
	//npc stuff
	this.note = [];
}
var player = new Character();

Character.prototype.generateCharacter = function(){
	$( "#npcInfo").empty();
	this.charCultMod = 0;
	this.charSocMod = 0;
	this.isNoble = false;
	this.tiMod=0;
	this.nobleTitle = "";
	this.nativeLiteracy = 0;
	this.foreignLiteracy.length = 0;
	this.weaponRank = 0;
	this.meleeWeaponRank = 0;
	this.missileWeaponRank = 0;
	this.wildernessSurvivalRank = 0;
	this.huntingGatheringRank = 0;
	this.urbanSurvivalRank = 0;
	this.ridingRank = 0;
	this.streetFightRank = 0;
	this.itemArry.length = 0;
	this.wealth = 0;
	this.insaneresist = 0;
	this.charLegitMod = 0;
	this.bastardReason = "";
	this.isBastard = false;
	this.isFatherKnown = false;
	this.nobleBastardMessage = "";
	this.isOrphan = false;
	this.raisedInOrphanage = false;
	this.adopted = false;
	this.birthday = "";
	this.birthMonth = "";
	this.birthPlace ="";
	this.birthEvent.length = 0;
	this.birthMod = 0;
	this.foreignLand = false;
	this.hasbonus = false;
	this.attributeBonus = [];
	this.specialBonus = [];
	this.naturalArmorBonus = 0;
	this.stealthRank = 0;
	this.bornAtNight = false;
	this.bornAtDay = false;
	this.strength = 0;
	this.dextarity = 0;
	this.consitution = 0;
	this.intelligence = 0;
	this.wisdom = 0;
	this.charisma = 0;
	this.occupation = "";
	this.hobby = "";
	this.childAgeEvent.length = 0;
	this.childEvent.length = 0;
	this.adolecentEventAge.length = 0;
	this.adolecentEvent.length = 0;
	this.birthEventNum.length = 0;
	this.lightSideTraits.length = 0;
	this.darkSideTraits.length = 0;
	this.exoticTraits.length = 0;
	this.neutralTraits.length = 0;
	this.randomTraits.length = 0;
	this.traits.length = 0;
	this.traitStrength.length = 0;
	this.charName = $("#charName").val();
	this.isPlayerCharacter = true;
	this.setGender();
};

Character.prototype.postChar = function(){
	if (this.isPlayerCharacter === true){
//clear out the tabs between generations
$("#characterInfo").empty();
$("#birthEvent").empty();
$("#birthInfo").empty();
$("#skillList").empty();
$("#attirubteBonus").empty();
$("#specialAbilities").empty();
$("#traitInfo").empty();

//main character information
$( "#characterInfo" ).append( "<div id='name'>Name: " + this.charName + "</div>" );
$( "#characterInfo" ).append( "<div id='gender'>Gender: " + this.charGender + "</div>" );
$( "#characterInfo" ).append( "<div id='race'>Race: " + this.charRace + "</div>" );
$( "#characterInfo" ).append( "<div id='culture'>Culture: " + this.charCulture + "</div>" );
$( "#characterInfo" ).append( "<div id='enviroment'>Enviroment: " + this.charEnviroment + "</div>" );
$( "#characterInfo" ).append( "<div id='social'>Social Status: " + this.charSocial + "</div>" );
if(this.isNoble === true && this.isOrphan === false){
	$("#characterInfo").append( "<div id='noble'>Noble Title: " + this.nobleTitle + "</div>" );
}

//birth information append
$("#birthInfo").append( "<div id='birthday'>Birthday: " + this.birthMonth + ' ' + this.birthDay + "</div>" );
$("#birthInfo").append( "<div id='birthLocation'>Birth Place: " + this.birthPlace + "</div>" );
if(this.bornAtDay === true){
	$("#birthInfo").append( "<div id='birthTime'>Birth Time: Day </div>" );
} else if (this.bornAtNight === true){
	$("#birthInfo").append( "<div id='birthTime'>Birth Time: Night </div>" );
}
if(this.isBastard === true){
	$("#birthInfo").append("<div id='bastard'>" + this.bastardReason + "</div>");
	if(this.isFatherKnown === true && this.isOrphan === false){
		$("#birthInfo").append("<div id='fatherKnown'>" + this.charName + " knows " +this.possesivePronoun+ " father</div>");
}
	if(this.isNoble === true && this.isOrphan === false){
		$("#birthInfo").append("<div id='nobleBastard'>" + this.nobleBastardMessage + "</div>");
	}
}
if(this.adopted === true){
	$("#birthInfo").append("<div id='adopted'>Adopted: " + this.charName + " was adopted by " + this.possesivePronoun + " current family</div>");
}
for(i = 0; i < this.birthEvent.length; i++){
	$("#birthEvent").append("<div class='bevent'>" + this.birthEvent[i] + "</div>");
}

//special abitlies 
for(i = 0; i < this.specialBonus.length; i++){
	$("#specialAbilities").append("<div class='special'>" + this.specialBonus[i] + "</div>");
}
if(this.naturalArmorBonus > 0 || this.naturalArmorBonus < 0){
	$("#specialAbilities").append("<div class='special'> Natural Armor Bonus: " + this.naturalArmorBonus + "</div>");
}
if(this.insaneresist > 0 || this.insaneresist < 0){
	$("#specialAbilities").append("<div class='special'> Resistance to Insanity: " + this.insaneresist  + "</div>");
}
for(i=0; i < this.attributeBonus; i++){
	$("#specialAbilities").append("<div class='special'>" + this.attributeBonus[i] + "</div>");
}

//Attirubte Bonus
$("#attirubteBonus").append("<li class='skills list-group-item'> Strength: " + this.strength + "</li>");
$("#attirubteBonus").append("<li class='skills list-group-item'> Dexterity: " + this.dextarity + "</li>");
$("#attirubteBonus").append("<li class='skills list-group-item'> Consitution: " + this.consitution + "</li>");
$("#attirubteBonus").append("<li class='skills list-group-item'> Intelligence: " + this.intelligence + "</li>");
$("#attirubteBonus").append("<li class='skills list-group-item'> Wisdom: " + this.wisdom + "</li>");
$("#attirubteBonus").append("<li class='skills list-group-item'> Charisma: " + this.charisma + "</li>");

//skills append
if(this.weaponRank > 0 || this.weaponRank < 0){
	$("#skillList").append("<li class='skills list-group-item'> Weapon Ranks: " + this.weaponRank + "</li>");
}
if(this.meleeWeaponRank > 0 || this.meleeWeaponRank < 0){
	$("#skillList").append("<li class='skills list-group-item'> Melee Weapon Ranks: " + this.meleeWeaponRank + "</li>");
}
if(this.missileWeaponRank > 0 || this.missileWeaponRank < 0){
	$("#skillList").append("<li class='skills list-group-item'> Ranged Weapon Ranks: " + this.missileWeaponRank + "</li>");
}
if(this.urbanSurvivalRank > 0 || this.urbanSurvivalRank < 0){
	$("#skillList").append("<li class='skills list-group-item'> Urban Survival Ranks: " + this.urbanSurvivalRank + "</li>");
}
if(this.wildernessSurvivalRank > 0 || this.wildernessSurvivalRank < 0){
	$("#skillList").append("<li class='skills list-group-item'> Wilderness Survival Ranks: " + this.wildernessSurvivalRank + "</li>");
}
if(this.huntingGatheringRank > 0 || this.huntingGatheringRank < 0){
	$("#skillList").append("<li class='skills list-group-item'> Hunting and Gathering Ranks: " + this.huntingGatheringRank + "</li>");
}
if(this.ridingRank > 0 || this.ridingRank < 0){
	$("#skillList").append("<li class='skills list-group-item'> Riding Ranks: " + this.ridingRank + "</li>");
}
if(this.streetFightRank > 0 || this.streetFightRank < 0){
	$("#skillList").append("<li class='skills list-group-item'> Street Fighting Ranks: " + this.streetFightRank + "</li>");
}
if(this.stealthRank > 0 || this.stealthRank < 0){
	$("#skillList").append("<li class='skills list-group-item'> Stealth Ranks: " + this.stealthRank + "</li>");
}

for(i=0; i < this.traits.length; i++){
	$("#traitInfo").append("<li class='traitLI'>" + this.traits[i] + ": " + this.traitStrength[i] + "/100 </li>");
}

}
};