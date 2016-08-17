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
	this.birthMod = 0;
	this.foreignLand = false;
	this.hasbonus = false;
	this.bornAtNight = false;
	this.bornAtDay = false;
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
}
var player = new Character();

Character.prototype.generateCharacter = function(){
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
	this.charName = $("#charName").val();
	this.isPlayerCharacter = true;
	this.setGender();
};

Character.prototype.postChar = function(){
	if (this.isPlayerCharacter === true){
$( "#characterInfo" ).empty();
$( "#characterInfo" ).append( "<br> <div id='name'>Name: " + this.charName + "</div>" );
$( "#characterInfo" ).append( "<div id='gender'>Gender: " + this.charGender + "</div>" );
$( "#characterInfo" ).append( "<div id='race'>Race: " + this.charRace + "</div>" );
$( "#characterInfo" ).append( "<div id='culture'>Culture: " + this.charCulture + "</div>" );
$( "#characterInfo" ).append( "<div id='enviroment'>Enviroment: " + this.charEnviroment + "</div>" );
$( "#characterInfo" ).append( "<div id='social'>Social Status: " + this.charSocial + "</div>" );
if(this.isNoble === true && this.isOrphan === false){
	$("#characterInfo").append( "<div id='noble'>Noble Title: " + this.nobleTitle + "</div>" );
}
$("#characterInfo").append( "<div id='birthday'>Birthday: " + this.birthMonth + ' ' + this.birthDay + "</div>" );
$("#characterInfo").append( "<div id='birthLocation'>Birth Place: " + this.birthPlace + "</div>" );
if(this.isBastard === true){
	$("#characterInfo").append("<br><div id='bastard'>" + this.bastardReason + "</div>");
	if(this.isFatherKnown === true && this.isOrphan === false){
		$("#characterInfo").append("<div id='fatherKnown'>" + this.charName + " knows " +this.possesivePronoun+ " father</div>");
}
	if(this.isNoble === true && this.isOrphan === false){
		$("#characterInfo").append("<div id='nobleBastard'>" + this.nobleBastardMessage + "</div>");
	}
}
if(this.adopted === true){
	$("#characterInfo").append("<br><div id='adopted'>Adopted: " + this.charName + " was adopted by " + this.possesivePronoun + " current family</div>");
}
}
};