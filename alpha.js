//alpha.js
//A wonderful file for wonderful people

//
//BEGIN frontScript.js SECTION
//

$(document).ready(function(){
	$(window).resize(function(){
		$("html").outerWidth();
	});
});

//global selection variables used to determine what has been activated and what has not
//unless otherwise specified:
// 0 means inactive
// 1 means active

var activeMajor; //0 for coen; 1 for web design; this is probably the most important variable of all
//var activeMajorFirstClick = 0;

var majorConfidence = 0; //if 1 then ENGR1 to winter, if 0 then ENGR1 to fall
var cProgConfidence = 0;
var aps = 0; //for AP category
var ibs = 0; //for IB category
var apcalcabGB = 0;
var apcalcbcGB = 0;
var apchemGB = 0;
var apcompsciGB = 0;
var apphyscmechGB = 0;
var apphyscelecGB = 0;
var apenviGB = 0;
var apgovtGB = 0;
var apmacroeconGB = 0;
var apmicroeconGB = 0;
var apPsychologyGB = 0;
var ibchemGB = 0;
var ibcompsciGB = 0;
var ibphysGB = 0;
var ibeconGB = 0;
var crePF = 1; //1 is a pass of cre, 0 is a fail of cre.  That's what it is called crePF cre Pass/Fail.  Get it?

//now for the actual course variables
var math1;
var math2;
var coen1;
var coen2;
var sci;
var core;
var coreS;
var replace;
var CI;
var math;


//END Variable declaration

//this calls a totalRecall on major change
//I don't think we should use it
/*
function activeMajorCheck(){
	if (activeMajorFirstClick == 1){
		totalRecall();
	}
	activeMajorFirstClick = 1;
}
*/

function coenClick(){
	//activeMajorCheck();
	
	//set the styles of the coen Text
	document.getElementById("coen").style.color = "#1580ea";
	document.getElementById("coen").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
	
	//reset the styles of web design text
	document.getElementById("webDesign").style.color = "#999999";
	document.getElementById("webDesign").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	
	activeMajor = 0; //sets functions to web design mode
	
	math1 = ["MATH 9", "MATH 11", "MATH 12", "MATH 13", "MATH 14", "AMTH 106", "AMTH 108", "MATH 53", "CORE"];
	math2 = ["MATH 9", "MATH 11", "MATH 12", "MATH 13", "MATH 14", "AMTH 108", "MATH 53", "CORE"];
	coen1 = ["COEN 10","COEN 11", "CORE", "CORE"];
	coen2 = "COEN 12";
	sci = [ "CHEM 11", "PHYS 31", "PHYS 32"];
	core = ["CTW1", "CTW2", "COEN 19"];
	coreS = ["RTC1", "SocSci", "Diversity", "ELSJ","RTC2", "Ethics","SeeAdvisor", "SeeAdvisor", "SeeAdvisor", "CI1", "CI2"];
	replace = "CORE";
	
	CTW();
	COEN();
	CalcFull();
	SciCred()
	addCI();
	engr1();
		
	majorInitClick();
}

function webDesignClick(){
	//activeMajorCheck();
	
	//set the styles of the Web Design Text
	document.getElementById("webDesign").style.color = "#1580ea";
	document.getElementById("webDesign").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
	
	//reset the styles of COEN
	document.getElementById("coen").style.color = "#999999";
	document.getElementById("coen").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	
	activeMajor = 1;  //sets functions to coen mode
	
	math = ["MATH 9", "MATH 11", "MATH 12", "MATH 13", "MATH 14", "AMTH 108", "CORE", "CORE"];
	coen1 = ["COEN 10","COEN 11", "CORE", "CORE"];
	coen2 = "COEN 12";
	sci = [ "CHEM 11", "CORE"];
	CI = [ "CI1", "CI2"];
	core = ["CTW1", "CTW2", "CORE"];
	coreS = ["RTC1", "SocSci", "Diversity", "ELSJ","RTC2", "Ethics","SeeAdvisor", "SeeAdvisor", "SeeAdvisor"];
	replace = "CORE";
	
	CTW();
	CalcFull();
	SciCred();
	engr1();
	COEN();
	build();
	
	majorInitClick();
}

function majorInitClick(){
	transferStrike(3);
	print_title(activeMajor);
	$("#askForConfidence").fadeIn(700);
}

//call set
//confirmed connection
function conf(level){
	if (level == 1){
		majorConfidence = 1;
		document.getElementById("fConf").style.color = "#1580ea";
		document.getElementById("fConf").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		document.getElementById("uConf").style.color = "#999999";
		document.getElementById("uConf").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	if (level == 0){
		majorConfidence = 0;
		document.getElementById("uConf").style.color = "#1580ea";
		document.getElementById("uConf").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		document.getElementById("fConf").style.color = "#999999";
		document.getElementById("fConf").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	$("#askAboutC").fadeIn(700);
	engr1();
}

function cProg(level){
	if (level == 1){
		cProgConfidence = 1;
		document.getElementById("fcProg").style.color = "#1580ea";
		document.getElementById("fcProg").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		document.getElementById("ucProg").style.color = "#999999";
		document.getElementById("ucProg").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	if (level == 0){
		cProgConfidence = 0;
		document.getElementById("ucProg").style.color = "#1580ea";
		document.getElementById("ucProg").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		document.getElementById("fcProg").style.color = "#999999";
		document.getElementById("fcProg").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	$("#askForTestType").fadeIn(700);
	$("#creSupremeSeperator").fadeIn(700);
	$("#creSuper1").fadeIn(700);
	$("#transferSupremeSeperator").fadeIn(700);
	$("#transferMaster").fadeIn(700);
	COEN();
}

function apClick(){
	if (aps == 0){
		document.getElementById("apGrey").style.opacity = "0.0";
		aps = 1;
	} else {
		document.getElementById("apGrey").style.opacity = "1.0";
		aps = 0;
		resetAllAP();
	}
	$("#apSelector").fadeToggle(700);
}

function ibClick(){
	if (ibs == 0){
		document.getElementById("ibGrey").style.opacity = "0.0";
		ibs = 1;
	} else {
		document.getElementById("ibGrey").style.opacity = "1.0";
		ibs = 0;
		resetAllIB();
	}
	$("#ibSelector").fadeToggle(700);
}

//this resets everything without refreshing... because SCUCourses.fish love you
function totalRecall(){
	//reset confidence section
	majorConfidence = 0; //resets to default value
	//set the colors
	document.getElementById("fConf").style.color = "#999999";
	document.getElementById("fConf").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	document.getElementById("uConf").style.color = "#999999";
	document.getElementById("uConf").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	$("#askForConfidence").fadeOut(700) //hide the question
	
	//reset c programming section
	cProgConfidence = 0; //resets to default value
	//set the colors
	document.getElementById("fcProg").style.color = "#999999";
	document.getElementById("fcProg").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	document.getElementById("ucProg").style.color = "#999999";
	document.getElementById("ucProg").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	$("#askAboutC").fadeOut(700); //hide the question
	
	//hide the named seperators
	$("#creSupremeSeperator").fadeOut(700);
	$("#transferSupremeSeperator").fadeOut(700);
	
	
	//AP/IB section
	$("#askForTestType").fadeOut(700); //hide the AP/IB buttons
	document.getElementById("apGrey").style.opacity = "1.0"; //makes button grey
	aps = 0; //sets AP state variable
	resetAllAP(); //resets AP test values
	$("#apSelector").fadeOut(700); //hides list of AP tests
	
	document.getElementById("ibGrey").style.opacity = "1.0"; //makes button grey
	ibs = 0; //sets IB state variable
	resetAllIB(); //resets IB test values
	$("#ibSelector").fadeOut(700); //hides list of IB tests
	
	//hide transfer checkboxes
	$("#transferMaster").fadeOut(700);
	document.getElementById("Q1yes").style.color = "#999999";
	document.getElementById("Q1yes").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	document.getElementById("Q1no").style.color = "#999999";
	document.getElementById("Q1no").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	//reset transfer checkboxes
	transferLevel1(0);
	document.getElementById("Q1no").style.color = "#999999";
	document.getElementById("Q1no").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	
	//Calculus Readiness Exam reset
	crePF = 1; //reset to default
	//reset the colors
	document.getElementById("crePass").style.color = "#999999";
	document.getElementById("crePass").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	document.getElementById("creFail").style.color = "#999999";
	document.getElementById("creFail").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	$("#creSuper1").fadeOut(700); //hide it
	
	//reset the table
	document.getElementById("rowA1").style.backgroundImage = "url('images/classes/BLANK.png')";
	document.getElementById("rowA2").style.backgroundImage = "url('images/classes/BLANK.png')";
	document.getElementById("rowA3").style.backgroundImage = "url('images/classes/BLANK.png')";
	document.getElementById("rowB1").style.backgroundImage = "url('images/classes/BLANK.png')";
	document.getElementById("rowB2").style.backgroundImage = "url('images/classes/BLANK.png')";
	document.getElementById("rowB3").style.backgroundImage = "url('images/classes/BLANK.png')";
	document.getElementById("rowC1").style.backgroundImage = "url('images/classes/BLANK.png')";
	document.getElementById("rowC2").style.backgroundImage = "url('images/classes/BLANK.png')";
	document.getElementById("rowC3").style.backgroundImage = "url('images/classes/BLANK.png')";
	document.getElementById("rowD1").style.backgroundImage = "url('images/classes/BLANK.png')";
	document.getElementById("rowD2").style.backgroundImage = "url('images/classes/BLANK.png')";
	document.getElementById("rowD3").style.backgroundImage = "url('images/classes/BLANK.png')";
	document.getElementById("rowE1").style.backgroundImage = "url('images/classes/BLANK.png')";
	document.getElementById("rowE2").style.backgroundImage = "url('images/classes/BLANK.png')";
	document.getElementById("rowE3").style.backgroundImage = "url('images/classes/BLANK.png')";
	$("#print_rowA1").attr("src", "images/black/classes/BLANK.png");
	$("#print_rowB1").attr("src", "images/black/classes/BLANK.png");
	$("#print_rowC1").attr("src", "images/black/classes/BLANK.png");
	$("#print_rowD1").attr("src", "images/black/classes/BLANK.png");
	$("#print_rowE1").attr("src", "images/black/classes/BLANK.png");
	$("#print_rowA2").attr("src", "images/black/classes/BLANK.png");
	$("#print_rowB2").attr("src", "images/black/classes/BLANK.png");
	$("#print_rowC2").attr("src", "images/black/classes/BLANK.png");
	$("#print_rowD2").attr("src", "images/black/classes/BLANK.png");
	$("#print_rowE2").attr("src", "images/black/classes/BLANK.png");
	$("#print_rowA3").attr("src", "images/black/classes/BLANK.png");
	$("#print_rowB3").attr("src", "images/black/classes/BLANK.png");
	$("#print_rowC3").attr("src", "images/black/classes/BLANK.png");
	$("#print_rowD3").attr("src", "images/black/classes/BLANK.png");
	
	//reset the major selector
	document.getElementById("coen").style.color = "#999999";
	document.getElementById("coen").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	document.getElementById("webDesign").style.color = "#999999";
	document.getElementById("webDesign").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	
	//reset the print_title
	print_title(2);
	
	//reset the print_CRE
	$("#print_crePass").hide();
	$("#print_creFail").hide();
}

function resetAllAP(){
	document.getElementById("apCalcABGrey").style.opacity = "1.0";
	apcalcabGB = 0;
	apCalcAbScore(0);
	$("#a0").fadeOut(700);

	document.getElementById("apCalcBCGrey").style.opacity = "1.0";
	apcalcbcGB = 0;
	apCalcBcScore(0);
	$("#b0").fadeOut(700);
	
	document.getElementById("apChemGrey").style.opacity = "1.0";
	apchemGB = 0;
	apChemScore(0);
	$("#c0").fadeOut(700);
	
	document.getElementById("apCompSciAGrey").style.opacity = "1.0";
	apcompsciGB = 0;
	apCompSciAScore(0);
	$("#d0").fadeOut(700);
	
	document.getElementById("apPhysCMechGrey").style.opacity = "1.0";
	apphyscmechGB = 0;
	apPhysCMechScore(0);
	$("#e0").fadeOut(700);
	
	document.getElementById("apPhysCElecGrey").style.opacity = "1.0";
	apphyscelecGB = 0;
	apPhysCElecScore(0);
	$("#eX0").fadeOut(700);
	
	document.getElementById("apEnviGrey").style.opacity = "1.0";
	apenviGB = 0;
	apEnviroScore(0);
	$("#f0").fadeOut(700)
	
	document.getElementById("apGovtGrey").style.opacity = "1.0";
	apgovtGB = 0;
	apGovtScore(0);
	$("#fW0").fadeOut(700);
	
	document.getElementById("apMacroEconGrey").style.opacity = "1.0";
	apmacroeconGB = 0;
	apMacroEconScore(0);
	$("#fX0").fadeOut(700);
	
	document.getElementById("apMicroEconGrey").style.opacity = "1.0";
	apmicroeconGB = 0;
	apMicroEconScore(0);
	$("#fY0").fadeOut(700);
	
	document.getElementById("apPsychologyGrey").style.opacity = "1.0";
	apPsychologyGB = 0;
	apPsychologyScore(0);
	$("#fZ0").fadeOut(700);
}

function resetAllIB(){
	document.getElementById("ibChemGrey").style.opacity = "1.0";
	ibchemGB = 0;
	ibChemScore(0);
	$("#g0").fadeOut(700);
	
	document.getElementById("ibCompSciGrey").style.opacity = "1.0";
	ibcompsciGB = 0;
	ibCompSciScore(0);
	$("#h0").fadeOut(700);
	
	document.getElementById("ibPhysGrey").style.opacity = "1.0";
	ibphysGB = 0;
	ibPhysScore(0);
	$("#i0").fadeOut(700);
	
	document.getElementById("ibEconGrey").style.opacity = "1.0";
	ibeconGB = 0;
	ibEconScore(0);
	$("#j0").fadeOut(700);
}


//the following functions are activated when you click on a test
//they will display/hide the reflective test score picker
function apCalcABClick(){
	if (apcalcabGB == 0){
		document.getElementById("apCalcABGrey").style.opacity = "0.0";
		apcalcabGB = 1;
	} else {
		document.getElementById("apCalcABGrey").style.opacity = "1.0";
		apcalcabGB = 0;
		apCalcAbScore(0);
	}
	$("#a0").fadeToggle(700);
}

function apCalcBCClick(){
	if (apcalcbcGB == 0){
		document.getElementById("apCalcBCGrey").style.opacity = "0.0";
		apcalcbcGB = 1;
	} else {
		document.getElementById("apCalcBCGrey").style.opacity = "1.0";
		apcalcbcGB = 0;
		apCalcBcScore(0);
	}
	$("#b0").fadeToggle(700);
}

function apChemClick(){
	if (apchemGB == 0){
		document.getElementById("apChemGrey").style.opacity = "0.0";
		apchemGB = 1;
	} else {
		document.getElementById("apChemGrey").style.opacity = "1.0";
		apchemGB = 0;
		apChemScore(0);
	}
	$("#c0").fadeToggle(700);
}

function apCompSciAClick(){
	if (apcompsciGB == 0){
		document.getElementById("apCompSciAGrey").style.opacity = "0.0";
		apcompsciGB = 1;
	} else {
		document.getElementById("apCompSciAGrey").style.opacity = "1.0";
		apcompsciGB = 0;
		apCompSciAScore(0);
	}
	$("#d0").fadeToggle(700);
}

function apPhysCMechClick(){
	if (apphyscmechGB == 0){
		document.getElementById("apPhysCMechGrey").style.opacity = "0.0";
		apphyscmechGB = 1;
	} else {
		document.getElementById("apPhysCMechGrey").style.opacity = "1.0";
		apphyscmechGB = 0;
		apPhysCMechScore(0);
	}
	$("#e0").fadeToggle(700);
}

function apPhysCElecClick(){
	if (apphyscelecGB == 0){
		document.getElementById("apPhysCElecGrey").style.opacity = "0.0";
		apphyscelecGB = 1;
	} else {
		document.getElementById("apPhysCElecGrey").style.opacity = "1.0";
		apphyscelecGB = 0;
		apPhysCElecScore(0);
	}
	$("#eX0").fadeToggle(700);
}

function apEnviClick(){
	if (apenviGB == 0){
		document.getElementById("apEnviGrey").style.opacity = "0.0";
		apenviGB = 1;
	} else {
		document.getElementById("apEnviGrey").style.opacity = "1.0";
		apenviGB = 0;
		apEnviroScore(0);
	}
	$("#f0").fadeToggle(700);
}

function apGovtClick(){
	if (apgovtGB == 0){
		document.getElementById("apGovtGrey").style.opacity = "0.0";
		apgovtGB = 1;
	} else {
		document.getElementById("apGovtGrey").style.opacity = "1.0";
		apgovtGB = 0;
		apGovtScore(0);
	}
	$("#fW0").fadeToggle(700);
}

function apMacroEconClick(){
	if (apmacroeconGB == 0){
		document.getElementById("apMacroEconGrey").style.opacity = "0.0";
		apmacroeconGB = 1;
	} else {
		document.getElementById("apMacroEconGrey").style.opacity = "1.0";
		apmacroeconGB = 0;
		apMacroEconScore(0);
	}
	$("#fX0").fadeToggle(700);
}

function apMicroEconClick(){
	if (apmicroeconGB == 0){
		document.getElementById("apMicroEconGrey").style.opacity = "0.0";
		apmicroeconGB = 1;
	} else {
		document.getElementById("apMicroEconGrey").style.opacity = "1.0";
		apmicroeconGB = 0;
		apMicroEconScore(0);
	}
	$("#fY0").fadeToggle(700);
}

function apPsychologyClick(){
	if (apPsychologyGB == 0){
		document.getElementById("apPsychologyGrey").style.opacity = "0.0";
		apPsychologyGB = 1;
	} else {
		document.getElementById("apPsychologyGrey").style.opacity = "1.0";
		apPsychologyGB = 0;
		apPsychologyScore(0);
	}
	$("#fZ0").fadeToggle(700);
}

function ibChemClick(){
	if (ibchemGB == 0){
		document.getElementById("ibChemGrey").style.opacity = "0.0";
		ibchemGB = 1;
	} else {
		document.getElementById("ibChemGrey").style.opacity = "1.0";
		ibchemGB = 0;
		ibChemScore(0);
	}
	$("#g0").fadeToggle(700);
}

function ibCompClick(){
	if (ibcompsciGB == 0){
		document.getElementById("ibCompSciGrey").style.opacity = "0.0";
		ibcompsciGB = 1;
	} else {
		document.getElementById("ibCompSciGrey").style.opacity = "1.0";
		ibcompsciGB = 0;
		ibCompSciScore(0);
	}
	$("#h0").fadeToggle(700);
}

//only for web design
//needs to be hooked up
function ibPhysClick(){
	if (ibphysGB == 0){
		document.getElementById("ibPhysGrey").style.opacity = "0.0";
		ibphysGB = 1;
	} else {
		document.getElementById("ibPhysGrey").style.opacity = "1.0";
		ibphysGB = 0;
		ibPhysScore(0);
	}
	$("#i0").fadeToggle(700);
}

function ibEconClick(){
	if (ibeconGB == 0){
		document.getElementById("ibEconGrey").style.opacity = "0.0";
		ibeconGB = 1;
	} else {
		document.getElementById("ibEconGrey").style.opacity = "1.0";
		ibeconGB = 0;
		ibEconScore(0);
	}
	$("#j0").fadeToggle(700);
}

//I've moved the creClick funciton above the score selction section.
//Normally I wouldn't do this, but the score selection is just too damn long
function creClick(level){
	if (level == 1){
		crePF = 1;
		document.getElementById("crePass").style.color = "#1580ea";
		document.getElementById("crePass").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		document.getElementById("creFail").style.color = "#999999";
		document.getElementById("creFail").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		$("#print_crePass").show();
		$("#print_creFail").hide();
	}
	if (level == 0){
		crePF = 0;
		document.getElementById("creFail").style.color = "#1580ea";
		document.getElementById("creFail").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		document.getElementById("crePass").style.color = "#999999";
		document.getElementById("crePass").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		$("#print_crePass").hide();
		$("#print_creFail").show();
	}
	CalcFull();
}

function creReset(){
	crePF = 1;
	document.getElementById("crePass").style.color = "#999999";
	document.getElementById("crePass").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	document.getElementById("creFail").style.color = "#999999";
	document.getElementById("creFail").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	CalcFull();
}

function transferLevel1(response){
	if (response == 0){
		$("#transferQ2").fadeOut(700);
		transferLevel2TotalReset();
		document.getElementById("Q1no").style.color = "#1580ea";
		document.getElementById("Q1no").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		document.getElementById("Q1yes").style.color = "#999999";
		document.getElementById("Q1yes").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	if (response == 1){
		$("#transferQ2").fadeIn(700);
		document.getElementById("Q1yes").style.color = "#1580ea";
		document.getElementById("Q1yes").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		document.getElementById("Q1no").style.color = "#999999";
		document.getElementById("Q1no").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
}

var QScienceState = 0;
var QCOENState = 0;
var QMathState = 0;

function transferLevel2(response){
	//science
	if (response == 0){
		$("#scienceTransfers").fadeToggle(700);
		
		if (QScienceState == 0){
			document.getElementById("Q2science").style.color = "#1580ea";
			document.getElementById("Q2science").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
			QScienceState = 1;
			return;
		}
		if (QScienceState == 1){
			document.getElementById("Q2science").style.color = "#999999";
			document.getElementById("Q2science").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
			QScienceState = 0;
			
			$('#check1').attr('checked', false);
			$('#check2').attr('checked', false);
			$('#check3').attr('checked', false);
			$('#check14').attr('checked', false);
			$('#check15').attr('checked', false);
			MathSci();
			return;
		}
	}
	
	//coen
	if (response == 1){
		$("#coenTransfers").fadeToggle(700);
		
		if (QCOENState == 0){
			document.getElementById("Q2coen").style.color = "#1580ea";
			document.getElementById("Q2coen").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
			QCOENState = 1;
			return;
		}
		if (QCOENState == 1){
			document.getElementById("Q2coen").style.color = "#999999";
			document.getElementById("Q2coen").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
			QCOENState = 0;
			
			$('#check5').attr('checked', false);
			$('#check6').attr('checked', false);
			$('#check7').attr('checked', false);
			$('#check8').attr('checked', false);
			COEN();
			CTW(); //I am slightly concerned this may cause errors, but the concern is unfounded... I hope
			transferStrike(1);
			return;
		}
	}
	
	//math
	if (response == 2){
		$("#mathTransfers").fadeToggle(700);
		
		if (QMathState == 0){
			document.getElementById("Q2math").style.color = "#1580ea";
			document.getElementById("Q2math").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
			QMathState = 1;
			return;
		}
		if (QMathState == 1){
			document.getElementById("Q2math").style.color = "#999999";
			document.getElementById("Q2math").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
			QMathState = 0;
			
			$('#check9').attr('checked', false);
			$('#check10').attr('checked', false);
			$('#check11').attr('checked', false);
			$('#check12').attr('checked', false);
			$('#check13').attr('checked', false);
			CalcFull();
			transferStrike(3);
			return;
		}
	}
}

var justClicked = 0; //I'm so sorry

function transferStrike(passer){
	
	if (passer == 0){
		MathSci();
	} else if (passer == 1){
		if (document.getElementById("check7").checked == true){
			$("#ch6").css("text-decoration","line-through");
			$("#ch5").css("text-decoration","line-through");
			document.getElementById("check6").checked = true;
			document.getElementById("check5").checked = true;
		} else if (document.getElementById("check6").checked == true) {
			$("#ch6").css("text-decoration","none");
			$("#ch5").css("text-decoration","line-through");
			document.getElementById("check5").checked = true;
		} else {
			$("#ch6").css("text-decoration","none");
			$("#ch5").css("text-decoration","none");
		}
		COEN();
	} else if (passer == 2){
		CTW();
	} else if (passer == 3){
		if ((document.getElementById("check13").checked == true) && (activeMajor == 0)){
			$("#ch12").css("text-decoration","line-through");
			$("#ch11").css("text-decoration","line-through");
			$("#ch10").css("text-decoration","line-through");
			$("#ch9").css("text-decoration","line-through");
			document.getElementById("check12").checked = true;
			document.getElementById("check11").checked = true;
			document.getElementById("check10").checked = true;
			document.getElementById("check9").checked = true;
			justClicked = 1;
		} else if ((document.getElementById("check13").checked == true) && (activeMajor == 1) && (justClicked == 1)){
			$("#ch12").css("text-decoration","none");
			$("#ch11").css("text-decoration","none");
			$("#ch10").css("text-decoration","none");
			$("#ch9").css("text-decoration","none");
			document.getElementById("check12").checked = false;
			document.getElementById("check11").checked = false;
			document.getElementById("check10").checked = false;
			document.getElementById("check9").checked = false;
			justClicked = 0;
		} else if (document.getElementById("check12").checked == true){
			$("#ch12").css("text-decoration","none");
			$("#ch11").css("text-decoration","line-through");
			$("#ch10").css("text-decoration","line-through");
			$("#ch9").css("text-decoration","line-through");
			document.getElementById("check11").checked = true;
			document.getElementById("check10").checked = true;
			document.getElementById("check9").checked = true;
		} else if (document.getElementById("check11").checked == true) {
			$("#ch11").css("text-decoration","none");
			$("#ch10").css("text-decoration","line-through");
			$("#ch9").css("text-decoration","line-through");
			document.getElementById("check10").checked = true;
			document.getElementById("check9").checked = true;
		} else if (document.getElementById("check10").checked == true) {
			$("#ch11").css("text-decoration","none");
			$("#ch10").css("text-decoration","none");
			$("#ch9").css("text-decoration","line-through");
			document.getElementById("check9").checked = true;
		} else {
			$("#ch13").css("text-decoration","none");
			$("#ch12").css("text-decoration","none");
			$("#ch11").css("text-decoration","none");
			$("#ch10").css("text-decoration","none");
			$("#ch9").css("text-decoration","none");
		}
		CalcFull();
	}
	
	print_transferShower();
	
	//here's some extra code
	/*if ((document.getElementById("check7").checked == false) && (stater == 7)){
		$("#ch6").css("text-decoration","none");
		$("#ch5").css("text-decoration","none");
		document.getElementById("check6").checked = false;
		document.getElementById("check5").checked = false;
	} else if ((document.getElementById("check6").checked == false) && (stater == 7)){
		$("#ch5").css("text-decoration","none");
		document.getElementById("check5").checked = false;
	}*/
}

function transferLevel2TotalReset(){
	//reset state variables
	QScienceState = 0;
	QCOENState = 0;
	QMathState = 0;
	
	//fadeOut transferSections
	$("#scienceTransfers").fadeOut(700);
	$("#coenTransfers").fadeOut(700);
	$("#mathTransfers").fadeOut(700);
	
	//reset Level2 colors and fonts
	document.getElementById("Q2science").style.color = "#999999";
	document.getElementById("Q2science").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	document.getElementById("Q2coen").style.color = "#999999";
	document.getElementById("Q2coen").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	document.getElementById("Q2math").style.color = "#999999";
	document.getElementById("Q2math").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	
	//reset all checkboxes INCLUDING CALLING THE FUNCTIONS THE CORRESPOND TO
	$('#check1').attr('checked', false);
	$('#check2').attr('checked', false);
	$('#check3').attr('checked', false);
	$('#check14').attr('checked', false);
	$('#check15').attr('checked', false);
	$('#check5').attr('checked', false);
	$('#check6').attr('checked', false);
	$('#check7').attr('checked', false);
	$('#check8').attr('checked', false);
	$('#check9').attr('checked', false);
	$('#check10').attr('checked', false);
	$('#check11').attr('checked', false);
	$('#check12').attr('checked', false);
	$('#check13').attr('checked', false);
	MathSci();
	COEN();
	CTW(); //I am slightly concerned this may cause errors, but the concern is unfounded... I hope
	CalcFull();
	transferStrike(1);
	transferStrike(3);
}

function print_title(passer){
	if (passer == 0){
		$("#print_webTitle").hide();
		$("#print_coenTitle").show();
	}
	if (passer == 1){
		$("#print_webTitle").show();
		$("#print_coenTitle").hide();
	}
	//for totalRecall() use
	if (passer == 2){
		$("#print_webTitle").hide();
		$("#print_coenTitle").hide();
	}
}

function print_transferShower(){
	//if checked
	if (document.getElementById("check1").checked == true){
		$("#print_transfer1").show();
	}
	if (document.getElementById("check2").checked == true){
		$("#print_transfer2").show();
	}
	if (document.getElementById("check3").checked == true){
		$("#print_transfer3").show();
	}
	if (document.getElementById("check14").checked == true){
		$("#print_transfer14").show();
	}
	if (document.getElementById("check15").checked == true){
		$("#print_transfer15").show();
	}
	if (document.getElementById("check5").checked == true){
		$("#print_transfer5").show();
	}
	if (document.getElementById("check6").checked == true){
		$("#print_transfer6").show();
	}
	if (document.getElementById("check7").checked == true){
		$("#print_transfer7").show();
	}
	if (document.getElementById("check8").checked == true){
		$("#print_transfer8").show();
	}
	if (document.getElementById("check9").checked == true){
		$("#print_transfer9").show();
	}
	if (document.getElementById("check10").checked == true){
		$("#print_transfer10").show();
	}
	if (document.getElementById("check11").checked == true){
		$("#print_transfer11").show();
	}
	if (document.getElementById("check12").checked == true){
		$("#print_transfer12").show();
	}
	if (document.getElementById("check13").checked == true){
		$("#print_transfer13").show();
	}
	
	// if not checked
	if (document.getElementById("check1").checked == false){
		$("#print_transfer1").hide();
	}
	if (document.getElementById("check2").checked == false){
		$("#print_transfer2").hide();
	}
	if (document.getElementById("check3").checked == false){
		$("#print_transfer3").hide();
	}
	if (document.getElementById("check14").checked == false){
		$("#print_transfer14").hide();
	}
	if (document.getElementById("check15").checked == false){
		$("#print_transfer15").hide();
	}
	if (document.getElementById("check5").checked == false){
		$("#print_transfer5").hide();
	}
	if (document.getElementById("check6").checked == false){
		$("#print_transfer6").hide();
	}
	if (document.getElementById("check7").checked == false){
		$("#print_transfer7").hide();
	}
	if (document.getElementById("check8").checked == false){
		$("#print_transfer8").hide();
	}
	if (document.getElementById("check9").checked == false){
		$("#print_transfer9").hide();
	}
	if (document.getElementById("check10").checked == false){
		$("#print_transfer10").hide();
	}
	if (document.getElementById("check11").checked == false){
		$("#print_transfer11").hide();
	}
	if (document.getElementById("check12").checked == false){
		$("#print_transfer12").hide();
	}
	if (document.getElementById("check13").checked == false){
		$("#print_transfer13").hide();
	}
}

function printIt(){
	var divContents = $("#print_scheduleZone").html();
	var printWindow = window.open('', '', 'height=452,width=600');
	printWindow.document.write('<html><head><title>Your wonderful schedule</title><link href="styles.css" rel="stylesheet" type="text/css">');
	printWindow.document.write('</head><body >');
	printWindow.document.write(divContents);
	printWindow.document.write('</body></html>');
	//printWindow.document.close();
	//printWindow.print();
}


//
//
//
//THIS SECTION IS FOR SCORE SELECTION OF TESTS
//THE CODE IS SIMPLE BUT LONG
//SERIOUSLY LIKE WAY TOO LONG

//here's the test score global variables
var q_apCalcAbScore = 0;
var q_apCalcBcScore = 0;
var q_apChemScore = 0;
var q_apCompSciAScore = 0;
var q_apPhysCMechScore = 0;
var q_apPhysCElecScore = 0;
var q_apEnviroScore = 0;
var q_apGovtScore = 0;
var q_apMacroEconScore = 0;
var q_apMicroEconScore = 0;
var q_apPsychologyScore = 0;
var q_ibChemScore = 0;
var q_ibCompSciScore = 0;
var q_ibPhysScore = 0;
var q_ibEconScore = 0;

//call set same
function apCalcAbScore(score){
	q_apCalcAbScore = score;
	
	if (score != 0){
		document.getElementById("print_test1").innerHTML = "AP Calculus AB: " + score;
		$("#print_test1").show();
	} else if (score == 0){
		$("#print_test1").hide();
	}
	
	CalcFull();
	
	if (score == 0){
		document.getElementById("a1").style.color = "#999999";
		document.getElementById("a1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a2").style.color = "#999999";
		document.getElementById("a2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a3").style.color = "#999999";
		document.getElementById("a3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a4").style.color = "#999999";
		document.getElementById("a4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a5").style.color = "#999999";
		document.getElementById("a5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("a1").style.color = "#1580ea";
		document.getElementById("a1").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("a2").style.color = "#999999";
		document.getElementById("a2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a3").style.color = "#999999";
		document.getElementById("a3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a4").style.color = "#999999";
		document.getElementById("a4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a5").style.color = "#999999";
		document.getElementById("a5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("a2").style.color = "#1580ea";
		document.getElementById("a2").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("a1").style.color = "#999999";
		document.getElementById("a1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a3").style.color = "#999999";
		document.getElementById("a3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a4").style.color = "#999999";
		document.getElementById("a4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a5").style.color = "#999999";
		document.getElementById("a5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("a3").style.color = "#1580ea";
		document.getElementById("a3").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("a1").style.color = "#999999";
		document.getElementById("a1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a2").style.color = "#999999";
		document.getElementById("a2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a4").style.color = "#999999";
		document.getElementById("a4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a5").style.color = "#999999";
		document.getElementById("a5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("a4").style.color = "#1580ea";
		document.getElementById("a4").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("a1").style.color = "#999999";
		document.getElementById("a1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a2").style.color = "#999999";
		document.getElementById("a2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a3").style.color = "#999999";
		document.getElementById("a3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a5").style.color = "#999999";
		document.getElementById("a5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("a5").style.color = "#1580ea";
		document.getElementById("a5").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("a1").style.color = "#999999";
		document.getElementById("a1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a2").style.color = "#999999";
		document.getElementById("a2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a3").style.color = "#999999";
		document.getElementById("a3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("a4").style.color = "#999999";
		document.getElementById("a4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
}

//call set same
function apCalcBcScore(score){
	q_apCalcBcScore = score;
	
	if (score != 0){
		document.getElementById("print_test2").innerHTML = "AP Calculus BC: " + score;
		$("#print_test2").show();
	} else if (score == 0){
		$("#print_test2").hide();
	}
	
	CalcFull();
	
	if (score == 0){
		document.getElementById("b1").style.color = "#999999";
		document.getElementById("b1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b2").style.color = "#999999";
		document.getElementById("b2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b3").style.color = "#999999";
		document.getElementById("b3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b4").style.color = "#999999";
		document.getElementById("b4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b5").style.color = "#999999";
		document.getElementById("b5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("b1").style.color = "#1580ea";
		document.getElementById("b1").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("b2").style.color = "#999999";
		document.getElementById("b2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b3").style.color = "#999999";
		document.getElementById("b3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b4").style.color = "#999999";
		document.getElementById("b4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b5").style.color = "#999999";
		document.getElementById("b5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("b2").style.color = "#1580ea";
		document.getElementById("b2").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("b1").style.color = "#999999";
		document.getElementById("b1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b3").style.color = "#999999";
		document.getElementById("b3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b4").style.color = "#999999";
		document.getElementById("b4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b5").style.color = "#999999";
		document.getElementById("b5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("b3").style.color = "#1580ea";
		document.getElementById("b3").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("b1").style.color = "#999999";
		document.getElementById("b1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b2").style.color = "#999999";
		document.getElementById("b2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b4").style.color = "#999999";
		document.getElementById("b4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b5").style.color = "#999999";
		document.getElementById("b5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("b4").style.color = "#1580ea";
		document.getElementById("b4").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("b1").style.color = "#999999";
		document.getElementById("b1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b2").style.color = "#999999";
		document.getElementById("b2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b3").style.color = "#999999";
		document.getElementById("b3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b5").style.color = "#999999";
		document.getElementById("b5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("b5").style.color = "#1580ea";
		document.getElementById("b5").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("b1").style.color = "#999999";
		document.getElementById("b1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b2").style.color = "#999999";
		document.getElementById("b2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b3").style.color = "#999999";
		document.getElementById("b3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("b4").style.color = "#999999";
		document.getElementById("b4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
}

//call set same
function apChemScore(score){
	q_apChemScore = score;
	
	if (score != 0){
		document.getElementById("print_test3").innerHTML = "AP Chemistry: " + score;
		$("#print_test3").show();
	} else if (score == 0){
		$("#print_test3").hide();
	}
	
	MathSci();
	if (score == 0){
		document.getElementById("c1").style.color = "#999999";
		document.getElementById("c1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c2").style.color = "#999999";
		document.getElementById("c2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c3").style.color = "#999999";
		document.getElementById("c3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c4").style.color = "#999999";
		document.getElementById("c4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c5").style.color = "#999999";
		document.getElementById("c5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("c1").style.color = "#1580ea";
		document.getElementById("c1").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("c2").style.color = "#999999";
		document.getElementById("c2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c3").style.color = "#999999";
		document.getElementById("c3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c4").style.color = "#999999";
		document.getElementById("c4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c5").style.color = "#999999";
		document.getElementById("c5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("c2").style.color = "#1580ea";
		document.getElementById("c2").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("c1").style.color = "#999999";
		document.getElementById("c1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c3").style.color = "#999999";
		document.getElementById("c3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c4").style.color = "#999999";
		document.getElementById("c4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c5").style.color = "#999999";
		document.getElementById("c5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("c3").style.color = "#1580ea";
		document.getElementById("c3").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("c1").style.color = "#999999";
		document.getElementById("c1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c2").style.color = "#999999";
		document.getElementById("c2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c4").style.color = "#999999";
		document.getElementById("c4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c5").style.color = "#999999";
		document.getElementById("c5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("c4").style.color = "#1580ea";
		document.getElementById("c4").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("c1").style.color = "#999999";
		document.getElementById("c1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c2").style.color = "#999999";
		document.getElementById("c2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c3").style.color = "#999999";
		document.getElementById("c3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c5").style.color = "#999999";
		document.getElementById("c5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("c5").style.color = "#1580ea";
		document.getElementById("c5").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("c1").style.color = "#999999";
		document.getElementById("c1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c2").style.color = "#999999";
		document.getElementById("c2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c3").style.color = "#999999";
		document.getElementById("c3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("c4").style.color = "#999999";
		document.getElementById("c4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
}

//call set same
function apCompSciAScore(score){
	q_apCompSciAScore = score;
	
	if (score != 0){
		document.getElementById("print_test4").innerHTML = "AP Comp Sci A: " + score;
		$("#print_test4").show();
	} else if (score == 0){
		$("#print_test4").hide();
	}
	
	COEN();
	
	if (score == 0){
		document.getElementById("d1").style.color = "#999999";
		document.getElementById("d1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d2").style.color = "#999999";
		document.getElementById("d2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d3").style.color = "#999999";
		document.getElementById("d3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d4").style.color = "#999999";
		document.getElementById("d4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d5").style.color = "#999999";
		document.getElementById("d5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("d1").style.color = "#1580ea";
		document.getElementById("d1").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("d2").style.color = "#999999";
		document.getElementById("d2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d3").style.color = "#999999";
		document.getElementById("d3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d4").style.color = "#999999";
		document.getElementById("d4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d5").style.color = "#999999";
		document.getElementById("d5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("d2").style.color = "#1580ea";
		document.getElementById("d2").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("d1").style.color = "#999999";
		document.getElementById("d1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d3").style.color = "#999999";
		document.getElementById("d3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d4").style.color = "#999999";
		document.getElementById("d4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d5").style.color = "#999999";
		document.getElementById("d5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("d3").style.color = "#1580ea";
		document.getElementById("d3").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("d1").style.color = "#999999";
		document.getElementById("d1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d2").style.color = "#999999";
		document.getElementById("d2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d4").style.color = "#999999";
		document.getElementById("d4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d5").style.color = "#999999";
		document.getElementById("d5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("d4").style.color = "#1580ea";
		document.getElementById("d4").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("d1").style.color = "#999999";
		document.getElementById("d1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d2").style.color = "#999999";
		document.getElementById("d2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d3").style.color = "#999999";
		document.getElementById("d3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d5").style.color = "#999999";
		document.getElementById("d5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("d5").style.color = "#1580ea";
		document.getElementById("d5").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("d1").style.color = "#999999";
		document.getElementById("d1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d2").style.color = "#999999";
		document.getElementById("d2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d3").style.color = "#999999";
		document.getElementById("d3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("d4").style.color = "#999999";
		document.getElementById("d4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
}

//call set same
function apPhysCMechScore(score){
	q_apPhysCMechScore = score;
	
	if (score != 0){
		document.getElementById("print_test5").innerHTML = "AP Phys C Mech: " + score;
		$("#print_test5").show();
	} else if (score == 0){
		$("#print_test5").hide();
	}
	
	MathSci();
	
	if (score == 0){
		document.getElementById("e1").style.color = "#999999";
		document.getElementById("e1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e2").style.color = "#999999";
		document.getElementById("e2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e3").style.color = "#999999";
		document.getElementById("e3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e4").style.color = "#999999";
		document.getElementById("e4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e5").style.color = "#999999";
		document.getElementById("e5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("e1").style.color = "#1580ea";
		document.getElementById("e1").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("e2").style.color = "#999999";
		document.getElementById("e2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e3").style.color = "#999999";
		document.getElementById("e3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e4").style.color = "#999999";
		document.getElementById("e4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e5").style.color = "#999999";
		document.getElementById("e5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("e2").style.color = "#1580ea";
		document.getElementById("e2").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("e1").style.color = "#999999";
		document.getElementById("e1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e3").style.color = "#999999";
		document.getElementById("e3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e4").style.color = "#999999";
		document.getElementById("e4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e5").style.color = "#999999";
		document.getElementById("e5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("e3").style.color = "#1580ea";
		document.getElementById("e3").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("e1").style.color = "#999999";
		document.getElementById("e1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e2").style.color = "#999999";
		document.getElementById("e2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e4").style.color = "#999999";
		document.getElementById("e4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e5").style.color = "#999999";
		document.getElementById("e5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("e4").style.color = "#1580ea";
		document.getElementById("e4").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("e1").style.color = "#999999";
		document.getElementById("e1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e2").style.color = "#999999";
		document.getElementById("e2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e3").style.color = "#999999";
		document.getElementById("e3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e5").style.color = "#999999";
		document.getElementById("e5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("e5").style.color = "#1580ea";
		document.getElementById("e5").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		document.getElementById("e1").style.color = "#999999";
		document.getElementById("e1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e2").style.color = "#999999";
		document.getElementById("e2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e3").style.color = "#999999";
		document.getElementById("e3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("e4").style.color = "#999999";
		document.getElementById("e4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
}

//call set different, but same?
function apPhysCElecScore(score){
	q_apPhysCElecScore = score;
	
	if (score != 0){
		document.getElementById("print_test6").innerHTML = "AP Phys C Elec/Mag: " + score;
		$("#print_test6").show();
	} else if (score == 0){
		$("#print_test6").hide();
	}
	
	if (activeMajor == 0){
		SciCred();
	}
	
	if (activeMajor == 1){
		SciCred();
	}
	
	if (score == 0){
		document.getElementById("eX1").style.color = "#999999";
		document.getElementById("eX1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX2").style.color = "#999999";
		document.getElementById("eX2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX3").style.color = "#999999";
		document.getElementById("eX3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX4").style.color = "#999999";
		document.getElementById("eX4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX5").style.color = "#999999";
		document.getElementById("eX5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("eX1").style.color = "#1580ea";
		document.getElementById("eX1").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("eX2").style.color = "#999999";
		document.getElementById("eX2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX3").style.color = "#999999";
		document.getElementById("eX3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX4").style.color = "#999999";
		document.getElementById("eX4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX5").style.color = "#999999";
		document.getElementById("eX5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("eX2").style.color = "#1580ea";
		document.getElementById("eX2").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("eX1").style.color = "#999999";
		document.getElementById("eX1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX3").style.color = "#999999";
		document.getElementById("eX3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX4").style.color = "#999999";
		document.getElementById("eX4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX5").style.color = "#999999";
		document.getElementById("eX5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("eX3").style.color = "#1580ea";
		document.getElementById("eX3").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("eX1").style.color = "#999999";
		document.getElementById("eX1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX2").style.color = "#999999";
		document.getElementById("eX2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX4").style.color = "#999999";
		document.getElementById("eX4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX5").style.color = "#999999";
		document.getElementById("eX5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("eX4").style.color = "#1580ea";
		document.getElementById("eX4").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("eX1").style.color = "#999999";
		document.getElementById("eX1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX2").style.color = "#999999";
		document.getElementById("eX2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX3").style.color = "#999999";
		document.getElementById("eX3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX5").style.color = "#999999";
		document.getElementById("eX5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("eX5").style.color = "#1580ea";
		document.getElementById("eX5").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("eX1").style.color = "#999999";
		document.getElementById("eX1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX2").style.color = "#999999";
		document.getElementById("eX2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX3").style.color = "#999999";
		document.getElementById("eX3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("eX4").style.color = "#999999";
		document.getElementById("eX4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
}

//call set different
function apEnviroScore(score){
	q_apEnviroScore = score;
	
	if (score != 0){
		document.getElementById("print_test7").innerHTML = "AP Enviro Science: " + score;
		$("#print_test7").show();
	} else if (score == 0){
		$("#print_test7").hide();
	}
	
	if (activeMajor == 0){
		MathSci();
	}
	
	if (activeMajor == 1){
		MathSci();
	}
	
	if (score == 0){
		document.getElementById("f1").style.color = "#999999";
		document.getElementById("f1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f2").style.color = "#999999";
		document.getElementById("f2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f3").style.color = "#999999";
		document.getElementById("f3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f4").style.color = "#999999";
		document.getElementById("f4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f5").style.color = "#999999";
		document.getElementById("f5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("f1").style.color = "#1580ea";
		document.getElementById("f1").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("f2").style.color = "#999999";
		document.getElementById("f2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f3").style.color = "#999999";
		document.getElementById("f3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f4").style.color = "#999999";
		document.getElementById("f4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f5").style.color = "#999999";
		document.getElementById("f5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("f2").style.color = "#1580ea";
		document.getElementById("f2").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("f1").style.color = "#999999";
		document.getElementById("f1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f3").style.color = "#999999";
		document.getElementById("f3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f4").style.color = "#999999";
		document.getElementById("f4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f5").style.color = "#999999";
		document.getElementById("f5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("f3").style.color = "#1580ea";
		document.getElementById("f3").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("f1").style.color = "#999999";
		document.getElementById("f1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f2").style.color = "#999999";
		document.getElementById("f2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f4").style.color = "#999999";
		document.getElementById("f4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f5").style.color = "#999999";
		document.getElementById("f5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("f4").style.color = "#1580ea";
		document.getElementById("f4").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("f1").style.color = "#999999";
		document.getElementById("f1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f2").style.color = "#999999";
		document.getElementById("f2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f3").style.color = "#999999";
		document.getElementById("f3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f5").style.color = "#999999";
		document.getElementById("f5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("f5").style.color = "#1580ea";
		document.getElementById("f5").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("f1").style.color = "#999999";
		document.getElementById("f1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f2").style.color = "#999999";
		document.getElementById("f2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f3").style.color = "#999999";
		document.getElementById("f3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("f4").style.color = "#999999";
		document.getElementById("f4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
}

//call set same
function apGovtScore(score){
	q_apGovtScore = score;
	
	if (score != 0){
		document.getElementById("print_test8").innerHTML = "AP Government: " + score;
		$("#print_test8").show();
	} else if (score == 0){
		$("#print_test8").hide();
	}
	
	suggest();
	
	if (score == 0){
		document.getElementById("fW1").style.color = "#999999";
		document.getElementById("fW1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW2").style.color = "#999999";
		document.getElementById("fW2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW3").style.color = "#999999";
		document.getElementById("fW3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW4").style.color = "#999999";
		document.getElementById("fW4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW5").style.color = "#999999";
		document.getElementById("fW5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}

	if (score == 1){
		document.getElementById("fW1").style.color = "#1580ea";
		document.getElementById("fW1").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fW2").style.color = "#999999";
		document.getElementById("fW2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW3").style.color = "#999999";
		document.getElementById("fW3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW4").style.color = "#999999";
		document.getElementById("fW4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW5").style.color = "#999999";
		document.getElementById("fW5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("fW2").style.color = "#1580ea";
		document.getElementById("fW2").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fW1").style.color = "#999999";
		document.getElementById("fW1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW3").style.color = "#999999";
		document.getElementById("fW3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW4").style.color = "#999999";
		document.getElementById("fW4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW5").style.color = "#999999";
		document.getElementById("fW5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("fW3").style.color = "#1580ea";
		document.getElementById("fW3").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fW1").style.color = "#999999";
		document.getElementById("fW1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW2").style.color = "#999999";
		document.getElementById("fW2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW4").style.color = "#999999";
		document.getElementById("fW4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW5").style.color = "#999999";
		document.getElementById("fW5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("fW4").style.color = "#1580ea";
		document.getElementById("fW4").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fW1").style.color = "#999999";
		document.getElementById("fW1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW2").style.color = "#999999";
		document.getElementById("fW2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW3").style.color = "#999999";
		document.getElementById("fW3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW5").style.color = "#999999";
		document.getElementById("fW5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("fW5").style.color = "#1580ea";
		document.getElementById("fW5").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fW1").style.color = "#999999";
		document.getElementById("fW1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW2").style.color = "#999999";
		document.getElementById("fW2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW3").style.color = "#999999";
		document.getElementById("fW3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fW4").style.color = "#999999";
		document.getElementById("fW4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
}

//call set same
function apMacroEconScore(score){
	q_apMacroEconScore = score;
	
	if (score != 0){
		document.getElementById("print_test9").innerHTML = "AP Macro Econ: " + score;
		$("#print_test9").show();
	} else if (score == 0){
		$("#print_test9").hide();
	}
	
	suggest();
	
	if (score == 0){
		document.getElementById("fX1").style.color = "#999999";
		document.getElementById("fX1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX2").style.color = "#999999";
		document.getElementById("fX2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX3").style.color = "#999999";
		document.getElementById("fX3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX4").style.color = "#999999";
		document.getElementById("fX4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX5").style.color = "#999999";
		document.getElementById("fX5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}

	if (score == 1){
		document.getElementById("fX1").style.color = "#1580ea";
		document.getElementById("fX1").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fX2").style.color = "#999999";
		document.getElementById("fX2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX3").style.color = "#999999";
		document.getElementById("fX3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX4").style.color = "#999999";
		document.getElementById("fX4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX5").style.color = "#999999";
		document.getElementById("fX5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("fX2").style.color = "#1580ea";
		document.getElementById("fX2").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fX1").style.color = "#999999";
		document.getElementById("fX1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX3").style.color = "#999999";
		document.getElementById("fX3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX4").style.color = "#999999";
		document.getElementById("fX4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX5").style.color = "#999999";
		document.getElementById("fX5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("fX3").style.color = "#1580ea";
		document.getElementById("fX3").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fX1").style.color = "#999999";
		document.getElementById("fX1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX2").style.color = "#999999";
		document.getElementById("fX2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX4").style.color = "#999999";
		document.getElementById("fX4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX5").style.color = "#999999";
		document.getElementById("fX5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("fX4").style.color = "#1580ea";
		document.getElementById("fX4").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fX1").style.color = "#999999";
		document.getElementById("fX1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX2").style.color = "#999999";
		document.getElementById("fX2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX3").style.color = "#999999";
		document.getElementById("fX3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX5").style.color = "#999999";
		document.getElementById("fX5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("fX5").style.color = "#1580ea";
		document.getElementById("fX5").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fX1").style.color = "#999999";
		document.getElementById("fX1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX2").style.color = "#999999";
		document.getElementById("fX2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX3").style.color = "#999999";
		document.getElementById("fX3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fX4").style.color = "#999999";
		document.getElementById("fX4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
}

//call set same
function apMicroEconScore(score){
	q_apMicroEconScore = score;
	
	if (score != 0){
		document.getElementById("print_test10").innerHTML = "AP Micro Econ: " + score;
		$("#print_test10").show();
	} else if (score == 0){
		$("#print_test10").hide();
	}
	
	suggest();
	
	if (score == 0){
		document.getElementById("fY1").style.color = "#999999";
		document.getElementById("fY1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY2").style.color = "#999999";
		document.getElementById("fY2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY3").style.color = "#999999";
		document.getElementById("fY3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY4").style.color = "#999999";
		document.getElementById("fY4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY5").style.color = "#999999";
		document.getElementById("fY5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("fY1").style.color = "#1580ea";
		document.getElementById("fY1").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fY2").style.color = "#999999";
		document.getElementById("fY2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY3").style.color = "#999999";
		document.getElementById("fY3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY4").style.color = "#999999";
		document.getElementById("fY4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY5").style.color = "#999999";
		document.getElementById("fY5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("fY2").style.color = "#1580ea";
		document.getElementById("fY2").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fY1").style.color = "#999999";
		document.getElementById("fY1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY3").style.color = "#999999";
		document.getElementById("fY3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY4").style.color = "#999999";
		document.getElementById("fY4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY5").style.color = "#999999";
		document.getElementById("fY5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("fY3").style.color = "#1580ea";
		document.getElementById("fY3").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fY1").style.color = "#999999";
		document.getElementById("fY1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY2").style.color = "#999999";
		document.getElementById("fY2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY4").style.color = "#999999";
		document.getElementById("fY4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY5").style.color = "#999999";
		document.getElementById("fY5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("fY4").style.color = "#1580ea";
		document.getElementById("fY4").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fY1").style.color = "#999999";
		document.getElementById("fY1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY2").style.color = "#999999";
		document.getElementById("fY2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY3").style.color = "#999999";
		document.getElementById("fY3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY5").style.color = "#999999";
		document.getElementById("fY5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("fY5").style.color = "#1580ea";
		document.getElementById("fY5").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fY1").style.color = "#999999";
		document.getElementById("fY1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY2").style.color = "#999999";
		document.getElementById("fY2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY3").style.color = "#999999";
		document.getElementById("fY3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fY4").style.color = "#999999";
		document.getElementById("fY4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
}

//call set same
function apPsychologyScore(score){
	q_apPsychologyScore = score;
	
	if (score != 0){
		document.getElementById("print_test11").innerHTML = "AP Psychology: " + score;
		$("#print_test11").show();
	} else if (score == 0){
		$("#print_test11").hide();
	}
	
	suggest();
	
	if (score == 0){
		document.getElementById("fZ1").style.color = "#999999";
		document.getElementById("fZ1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ2").style.color = "#999999";
		document.getElementById("fZ2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ3").style.color = "#999999";
		document.getElementById("fZ3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ4").style.color = "#999999";
		document.getElementById("fZ4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ5").style.color = "#999999";
		document.getElementById("fZ5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 1){
		document.getElementById("fZ1").style.color = "#1580ea";
		document.getElementById("fZ1").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fZ2").style.color = "#999999";
		document.getElementById("fZ2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ3").style.color = "#999999";
		document.getElementById("fZ3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ4").style.color = "#999999";
		document.getElementById("fZ4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ5").style.color = "#999999";
		document.getElementById("fZ5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("fZ2").style.color = "#1580ea";
		document.getElementById("fZ2").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fZ1").style.color = "#999999";
		document.getElementById("fZ1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ3").style.color = "#999999";
		document.getElementById("fZ3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ4").style.color = "#999999";
		document.getElementById("fZ4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ5").style.color = "#999999";
		document.getElementById("fZ5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("fZ3").style.color = "#1580ea";
		document.getElementById("fZ3").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fZ1").style.color = "#999999";
		document.getElementById("fZ1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ2").style.color = "#999999";
		document.getElementById("fZ2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ4").style.color = "#999999";
		document.getElementById("fZ4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ5").style.color = "#999999";
		document.getElementById("fZ5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("fZ4").style.color = "#1580ea";
		document.getElementById("fZ4").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fZ1").style.color = "#999999";
		document.getElementById("fZ1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ2").style.color = "#999999";
		document.getElementById("fZ2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ3").style.color = "#999999";
		document.getElementById("fZ3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ5").style.color = "#999999";
		document.getElementById("fZ5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("fZ5").style.color = "#1580ea";
		document.getElementById("fZ5").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("fZ1").style.color = "#999999";
		document.getElementById("fZ1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ2").style.color = "#999999";
		document.getElementById("fZ2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ3").style.color = "#999999";
		document.getElementById("fZ3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("fZ4").style.color = "#999999";
		document.getElementById("fZ4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
}

//call set same
function ibChemScore(score){
	q_ibChemScore = score;
	
	if (score != 0){
		document.getElementById("print_test12").innerHTML = "IB Chemistry: " + score;
		$("#print_test12").show();
	} else if (score == 0){
		$("#print_test12").hide();
	}
	
	MathSci();
	
	if (score == 0){
		document.getElementById("g1").style.color = "#999999";
		document.getElementById("g1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g2").style.color = "#999999";
		document.getElementById("g2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g3").style.color = "#999999";
		document.getElementById("g3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g4").style.color = "#999999";
		document.getElementById("g4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g5").style.color = "#999999";
		document.getElementById("g5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g6").style.color = "#999999";
		document.getElementById("g6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g7").style.color = "#999999";
		document.getElementById("g7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}

	if (score == 1){
		document.getElementById("g1").style.color = "#1580ea";
		document.getElementById("g1").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("g2").style.color = "#999999";
		document.getElementById("g2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g3").style.color = "#999999";
		document.getElementById("g3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g4").style.color = "#999999";
		document.getElementById("g4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g5").style.color = "#999999";
		document.getElementById("g5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g6").style.color = "#999999";
		document.getElementById("g6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g7").style.color = "#999999";
		document.getElementById("g7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("g2").style.color = "#1580ea";
		document.getElementById("g2").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("g1").style.color = "#999999";
		document.getElementById("g1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g3").style.color = "#999999";
		document.getElementById("g3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g4").style.color = "#999999";
		document.getElementById("g4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g5").style.color = "#999999";
		document.getElementById("g5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g6").style.color = "#999999";
		document.getElementById("g6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g7").style.color = "#999999";
		document.getElementById("g7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("g3").style.color = "#1580ea";
		document.getElementById("g3").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("g1").style.color = "#999999";
		document.getElementById("g1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g2").style.color = "#999999";
		document.getElementById("g2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g4").style.color = "#999999";
		document.getElementById("g4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g5").style.color = "#999999";
		document.getElementById("g5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g6").style.color = "#999999";
		document.getElementById("g6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g7").style.color = "#999999";
		document.getElementById("g7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("g4").style.color = "#1580ea";
		document.getElementById("g4").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("g1").style.color = "#999999";
		document.getElementById("g1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g2").style.color = "#999999";
		document.getElementById("g2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g3").style.color = "#999999";
		document.getElementById("g3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g5").style.color = "#999999";
		document.getElementById("g5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g6").style.color = "#999999";
		document.getElementById("g6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g7").style.color = "#999999";
		document.getElementById("g7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("g5").style.color = "#1580ea";
		document.getElementById("g5").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("g1").style.color = "#999999";
		document.getElementById("g1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g2").style.color = "#999999";
		document.getElementById("g2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g3").style.color = "#999999";
		document.getElementById("g3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g4").style.color = "#999999";
		document.getElementById("g4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g6").style.color = "#999999";
		document.getElementById("g6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g7").style.color = "#999999";
		document.getElementById("g7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 6){
		document.getElementById("g6").style.color = "#1580ea";
		document.getElementById("g6").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("g1").style.color = "#999999";
		document.getElementById("g1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g2").style.color = "#999999";
		document.getElementById("g2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g3").style.color = "#999999";
		document.getElementById("g3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g4").style.color = "#999999";
		document.getElementById("g4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g5").style.color = "#999999";
		document.getElementById("g5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g7").style.color = "#999999";
		document.getElementById("g7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 7){
		document.getElementById("g7").style.color = "#1580ea";
		document.getElementById("g7").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("g1").style.color = "#999999";
		document.getElementById("g1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g2").style.color = "#999999";
		document.getElementById("g2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g3").style.color = "#999999";
		document.getElementById("g3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g4").style.color = "#999999";
		document.getElementById("g4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g5").style.color = "#999999";
		document.getElementById("g5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("g6").style.color = "#999999";
		document.getElementById("g6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
}

//call set same
function ibCompSciScore(score){
	q_ibCompSciScore = score;
	
	if (score != 0){
		document.getElementById("print_test13").innerHTML = "IB Comp Sci: " + score;
		$("#print_test13").show();
	} else if (score == 0){
		$("#print_test13").hide();
	}
	
	COEN();
	
	if (score == 0){
		document.getElementById("h1").style.color = "#999999";
		document.getElementById("h1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h2").style.color = "#999999";
		document.getElementById("h2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h3").style.color = "#999999";
		document.getElementById("h3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h4").style.color = "#999999";
		document.getElementById("h4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h5").style.color = "#999999";
		document.getElementById("h5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h6").style.color = "#999999";
		document.getElementById("h6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h7").style.color = "#999999";
		document.getElementById("h7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}

	if (score == 1){
		document.getElementById("h1").style.color = "#1580ea";
		document.getElementById("h1").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("h2").style.color = "#999999";
		document.getElementById("h2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h3").style.color = "#999999";
		document.getElementById("h3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h4").style.color = "#999999";
		document.getElementById("h4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h5").style.color = "#999999";
		document.getElementById("h5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h6").style.color = "#999999";
		document.getElementById("h6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h7").style.color = "#999999";
		document.getElementById("h7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("h2").style.color = "#1580ea";
		document.getElementById("h2").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("h1").style.color = "#999999";
		document.getElementById("h1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h3").style.color = "#999999";
		document.getElementById("h3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h4").style.color = "#999999";
		document.getElementById("h4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h5").style.color = "#999999";
		document.getElementById("h5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h6").style.color = "#999999";
		document.getElementById("h6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h7").style.color = "#999999";
		document.getElementById("h7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("h3").style.color = "#1580ea";
		document.getElementById("h3").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("h1").style.color = "#999999";
		document.getElementById("h1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h2").style.color = "#999999";
		document.getElementById("h2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h4").style.color = "#999999";
		document.getElementById("h4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h5").style.color = "#999999";
		document.getElementById("h5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h6").style.color = "#999999";
		document.getElementById("h6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h7").style.color = "#999999";
		document.getElementById("h7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("h4").style.color = "#1580ea";
		document.getElementById("h4").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("h1").style.color = "#999999";
		document.getElementById("h1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h2").style.color = "#999999";
		document.getElementById("h2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h3").style.color = "#999999";
		document.getElementById("h3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h5").style.color = "#999999";
		document.getElementById("h5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h6").style.color = "#999999";
		document.getElementById("h6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h7").style.color = "#999999";
		document.getElementById("h7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("h5").style.color = "#1580ea";
		document.getElementById("h5").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("h1").style.color = "#999999";
		document.getElementById("h1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h2").style.color = "#999999";
		document.getElementById("h2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h3").style.color = "#999999";
		document.getElementById("h3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h4").style.color = "#999999";
		document.getElementById("h4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h6").style.color = "#999999";
		document.getElementById("h6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h7").style.color = "#999999";
		document.getElementById("h7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 6){
		document.getElementById("h6").style.color = "#1580ea";
		document.getElementById("h6").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("h1").style.color = "#999999";
		document.getElementById("h1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h2").style.color = "#999999";
		document.getElementById("h2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h3").style.color = "#999999";
		document.getElementById("h3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h4").style.color = "#999999";
		document.getElementById("h4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h5").style.color = "#999999";
		document.getElementById("h5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h7").style.color = "#999999";
		document.getElementById("h7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 7){
		document.getElementById("h7").style.color = "#1580ea";
		document.getElementById("h7").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("h1").style.color = "#999999";
		document.getElementById("h1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h2").style.color = "#999999";
		document.getElementById("h2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h3").style.color = "#999999";
		document.getElementById("h3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h4").style.color = "#999999";
		document.getElementById("h4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h5").style.color = "#999999";
		document.getElementById("h5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("h6").style.color = "#999999";
		document.getElementById("h6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
}

//call set WebDesign Only
function ibPhysScore(score){
	q_ibPhysScore = score;
	
	if (score != 0){
		document.getElementById("print_test14").innerHTML = "IB Physics: " + score;
		$("#print_test14").show();
	} else if (score == 0){
		$("#print_test14").hide();
	}
	
	if (activeMajor == 1){
		SciCred();
	}
	
	if (score == 0){
		document.getElementById("i1").style.color = "#999999";
		document.getElementById("i1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i2").style.color = "#999999";
		document.getElementById("i2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i3").style.color = "#999999";
		document.getElementById("i3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i4").style.color = "#999999";
		document.getElementById("i4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i5").style.color = "#999999";
		document.getElementById("i5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i6").style.color = "#999999";
		document.getElementById("i6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i7").style.color = "#999999";
		document.getElementById("i7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}

	if (score == 1){
		document.getElementById("i1").style.color = "#1580ea";
		document.getElementById("i1").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("i2").style.color = "#999999";
		document.getElementById("i2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i3").style.color = "#999999";
		document.getElementById("i3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i4").style.color = "#999999";
		document.getElementById("i4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i5").style.color = "#999999";
		document.getElementById("i5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i6").style.color = "#999999";
		document.getElementById("i6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i7").style.color = "#999999";
		document.getElementById("i7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("i2").style.color = "#1580ea";
		document.getElementById("i2").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("i1").style.color = "#999999";
		document.getElementById("i1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i3").style.color = "#999999";
		document.getElementById("i3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i4").style.color = "#999999";
		document.getElementById("i4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i5").style.color = "#999999";
		document.getElementById("i5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i6").style.color = "#999999";
		document.getElementById("i6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i7").style.color = "#999999";
		document.getElementById("i7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("i3").style.color = "#1580ea";
		document.getElementById("i3").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("i1").style.color = "#999999";
		document.getElementById("i1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i2").style.color = "#999999";
		document.getElementById("i2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i4").style.color = "#999999";
		document.getElementById("i4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i5").style.color = "#999999";
		document.getElementById("i5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i6").style.color = "#999999";
		document.getElementById("i6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i7").style.color = "#999999";
		document.getElementById("i7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("i4").style.color = "#1580ea";
		document.getElementById("i4").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("i1").style.color = "#999999";
		document.getElementById("i1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i2").style.color = "#999999";
		document.getElementById("i2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i3").style.color = "#999999";
		document.getElementById("i3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i5").style.color = "#999999";
		document.getElementById("i5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i6").style.color = "#999999";
		document.getElementById("i6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i7").style.color = "#999999";
		document.getElementById("i7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("i5").style.color = "#1580ea";
		document.getElementById("i5").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("i1").style.color = "#999999";
		document.getElementById("i1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i2").style.color = "#999999";
		document.getElementById("i2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i3").style.color = "#999999";
		document.getElementById("i3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i4").style.color = "#999999";
		document.getElementById("i4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i6").style.color = "#999999";
		document.getElementById("i6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i7").style.color = "#999999";
		document.getElementById("i7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 6){
		document.getElementById("i6").style.color = "#1580ea";
		document.getElementById("i6").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("i1").style.color = "#999999";
		document.getElementById("i1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i2").style.color = "#999999";
		document.getElementById("i2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i3").style.color = "#999999";
		document.getElementById("i3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i4").style.color = "#999999";
		document.getElementById("i4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i5").style.color = "#999999";
		document.getElementById("i5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i7").style.color = "#999999";
		document.getElementById("i7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 7){
		document.getElementById("i7").style.color = "#1580ea";
		document.getElementById("i7").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("i1").style.color = "#999999";
		document.getElementById("i1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i2").style.color = "#999999";
		document.getElementById("i2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i3").style.color = "#999999";
		document.getElementById("i3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i4").style.color = "#999999";
		document.getElementById("i4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i5").style.color = "#999999";
		document.getElementById("i5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("i6").style.color = "#999999";
		document.getElementById("i6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
}

//call set same
function ibEconScore(score){
	q_ibEconScore = score;
	
	if (score != 0){
		document.getElementById("print_test15").innerHTML = "IB Economics: " + score;
		$("#print_test15").show();
	} else if (score == 0){
		$("#print_test15").hide();
	}
	
	suggest();
	
	if (score == 0){
		document.getElementById("j1").style.color = "#999999";
		document.getElementById("j1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j2").style.color = "#999999";
		document.getElementById("j2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j3").style.color = "#999999";
		document.getElementById("j3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j4").style.color = "#999999";
		document.getElementById("j4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j5").style.color = "#999999";
		document.getElementById("j5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j6").style.color = "#999999";
		document.getElementById("j6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j7").style.color = "#999999";
		document.getElementById("j7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}

	if (score == 1){
		document.getElementById("j1").style.color = "#1580ea";
		document.getElementById("j1").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("j2").style.color = "#999999";
		document.getElementById("j2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j3").style.color = "#999999";
		document.getElementById("j3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j4").style.color = "#999999";
		document.getElementById("j4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j5").style.color = "#999999";
		document.getElementById("j5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j6").style.color = "#999999";
		document.getElementById("j6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j7").style.color = "#999999";
		document.getElementById("j7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 2){
		document.getElementById("j2").style.color = "#1580ea";
		document.getElementById("j2").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("j1").style.color = "#999999";
		document.getElementById("j1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j3").style.color = "#999999";
		document.getElementById("j3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j4").style.color = "#999999";
		document.getElementById("j4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j5").style.color = "#999999";
		document.getElementById("j5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j6").style.color = "#999999";
		document.getElementById("j6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j7").style.color = "#999999";
		document.getElementById("j7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 3){
		document.getElementById("j3").style.color = "#1580ea";
		document.getElementById("j3").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("j1").style.color = "#999999";
		document.getElementById("j1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j2").style.color = "#999999";
		document.getElementById("j2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j4").style.color = "#999999";
		document.getElementById("j4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j5").style.color = "#999999";
		document.getElementById("j5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j6").style.color = "#999999";
		document.getElementById("j6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j7").style.color = "#999999";
		document.getElementById("j7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 4){
		document.getElementById("j4").style.color = "#1580ea";
		document.getElementById("j4").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("j1").style.color = "#999999";
		document.getElementById("j1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j2").style.color = "#999999";
		document.getElementById("j2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j3").style.color = "#999999";
		document.getElementById("j3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j5").style.color = "#999999";
		document.getElementById("j5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j6").style.color = "#999999";
		document.getElementById("j6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j7").style.color = "#999999";
		document.getElementById("j7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 5){
		document.getElementById("j5").style.color = "#1580ea";
		document.getElementById("j5").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("j1").style.color = "#999999";
		document.getElementById("j1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j2").style.color = "#999999";
		document.getElementById("j2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j3").style.color = "#999999";
		document.getElementById("j3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j4").style.color = "#999999";
		document.getElementById("j4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j6").style.color = "#999999";
		document.getElementById("j6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j7").style.color = "#999999";
		document.getElementById("j7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 6){
		document.getElementById("j6").style.color = "#1580ea";
		document.getElementById("j6").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("j1").style.color = "#999999";
		document.getElementById("j1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j2").style.color = "#999999";
		document.getElementById("j2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j3").style.color = "#999999";
		document.getElementById("j3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j4").style.color = "#999999";
		document.getElementById("j4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j5").style.color = "#999999";
		document.getElementById("j5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j7").style.color = "#999999";
		document.getElementById("j7").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
	
	if (score == 7){
		document.getElementById("j7").style.color = "#1580ea";
		document.getElementById("j7").style.fontFamily = "HelveticaNeue-Bold, Arial-Bold, sans-serif";
		
		document.getElementById("j1").style.color = "#999999";
		document.getElementById("j1").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j2").style.color = "#999999";
		document.getElementById("j2").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j3").style.color = "#999999";
		document.getElementById("j3").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j4").style.color = "#999999";
		document.getElementById("j4").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j5").style.color = "#999999";
		document.getElementById("j5").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
		document.getElementById("j6").style.color = "#999999";
		document.getElementById("j6").style.fontFamily = "HelveticaNeue-Thin, HelveticaNeue-Light, Arial, sans-serif";
	}
}


//
//END OF frontScript.js SECTION
//


//the course type variables have been moved to the top.  Sincerly, The Management

//whats curently in the aray
var Fall = [];
var Winter = [];
var Spring = [];

//Nomenclature:
/*
for coen...
gold - completed coen function, NO direct inputs
platinum - completed coen funciton, direct inputs


for both...
diamond - completed identical funciton for both web design and coen


for web design...
red - incomplete web design function, NO direct inputs
ruby - completed web design function, NO direct inputs

blue - incomplete web design function, direct inputs
sapphire - completed web design function, direct inputs

stoneless - not used for web design
*/

//gold
//ruby
//diamond
function removeCore(){
	for (i=0; i<4; i++){
		for(j=0; j<11; j++){
			if (Fall[i] == coreS[j]){
				Fall[i] = "CORE";
			}
			if (Winter[i] == coreS[j]){
				Winter[i] = "CORE";
			}
			if (Spring[i] == coreS[j]){
				Spring[i] = "CORE";
			}
		}
	}
}

//gold
//ruby
//diamond
function MathSci(){
	CalcFull();
	SciCred();
	COEN();	
}

//platinum
//sapphire
function CalcFull(){

	//set the scores
	var APCalcScoreAB = q_apCalcAbScore;
	var APCalcScoreBC = q_apCalcBcScore;
	var APEnvSci = q_apEnviroScore;
	var APChem = q_apChemScore;
	
	//other variables
	var start;
	var natSci = 0;
	
	var envisci = document.getElementById("check15").checked;
	var chem11 = document.getElementById("check1").checked;
	var math11 = document.getElementById("check9").checked;
	var math12 = document.getElementById("check10").checked;
	var math13 = document.getElementById("check11").checked;
	var math14 = document.getElementById("check12").checked;
	var amth106 = document.getElementById("check13").checked;
	
	
	
	if (activeMajor == 0){
		if (chem11 == true){
			APChem = 3;
		}
		if (envisci == true){
			APEnvSci = 5;
		}
		if (math11 == true && APCalcScoreBC < 3){
			APCalcScoreBC = 3;
		}
		if (math12 == true){
			APCalcScoreBC = 5;
		}
		if (math13 == true){
			APCalcScoreBC = 6;
		}
		if (math14 == true){
			APCalcScoreBC = 7;
		}
		if (amth106 == true){
			APCalcScoreBC = 8;
		}
		
		//END SECTION
		
		//BC score of 3+ overides any AB score.  CRE is below all them
		if (crePF != 1) {
			start = 0;
		} else if(APCalcScoreBC == 8){
			start = 6;
		} else if(APCalcScoreBC == 7){
			start = 5;
		} else if(APCalcScoreBC == 6){
			start = 4;
		} else if(APCalcScoreBC >= 3) {		if(APCalcScoreBC > 3){
				start = 3;
			} else if (APCalcScoreBC == 3) {
				start = 2;
			}
		} else if (APCalcScoreAB >= 4) {
			start = 2
		} else {
			start = 1;
		}
		
		if(APEnvSci > 3 && APChem > 2){
			natSci = 1;
		} else if(APChem > 3){
			natSci = 1;
		}
		
		if(natSci){
			var Fall0 = math2[start];
			var Winter0 = math2[start+1];
			var Spring0 = math2[start+2];
		} else{
			var Fall0 = math1[start];
			var Winter0 = math1[start+1];
			var Spring0 = math1[start+2];
		}
		
		Fall[0] = Fall0;
		Winter[0] = Winter0;
		Spring[0] = Spring0;
		
		addCI();
		suggest();
		build();
	}
	
	if (activeMajor == 1){
		if (math11 == true && APCalcScoreBC < 3){
			APCalcScoreBC = 3;
		}
		if (math12 == true){
			APCalcScoreBC = 5;
		}
		if (math13 == true){
			APCalcScoreBC = 6;
		}
		if (math14 == true){
			APCalcScoreBC = 7;
		}
		
		//BC score of 3+ overides any AB score.  CRE is below all them
		if (crePF != 1) {
			start = 0;
		} else if(APCalcScoreBC == 7){
			start = 5;
		} else if(APCalcScoreBC == 6){
			start = 4;
		} else if(APCalcScoreBC >= 3) {		if(APCalcScoreBC > 3){
				start = 3;
			} else if (APCalcScoreBC == 3) {
				start = 2;
			}
		} else if (APCalcScoreAB >= 4) {
			start = 2
		} else {
			start = 1;
		}
		
		var Fall0 = math[start];
		var Winter0 = math[start+1];
		var Spring0 = math[start+2];
		
		Fall[0] = Fall0;
		Winter[0] = Winter0;
		Spring[0] = Spring0;
		
		suggest();
		build();
	}
}

//platinum
//sapphire
function SciCred(){
	//set test scores
	var APChem = q_apChemScore;
	var APphysics = q_apPhysCMechScore;
	var IBChem = q_ibChemScore;
	
	//plus some extras for web design
	var APEnvSci = q_apEnviroScore;
	var APphysicEM = q_apPhysCElecScore;
	var IBphysics = q_ibPhysScore;
	
	//other variables
	var Transfer32 = 0;
	var start = 0;

  	var envisci = document.getElementById("check15").checked;
  	var chem11 = document.getElementById("check1").checked;
	var phys31 = document.getElementById("check2").checked;
	var phys32 = document.getElementById("check3").checked;
	var phys33 = document.getElementById("check14").checked;
	
	
	if (envisci == true){
		APEnvSci = 5;
	}
	if (chem11 == true){
		APChem = 5;
	}
	if (phys31 == true){
		APphysics = 5;
	}
	if (phys32 == true){
		Transfer32 = 1;
	}
	if (phys33 == true){
		APphysicEM = 5;
	}
	//END SECTION
	
	if (activeMajor == 0){
		//logic
		if(APChem > 2 || IBChem > 5 || APEnvSci > 3){
			Fall2 = replace;
		} else{
			Fall2 = sci[0];
		}
		
		if(APphysics > 3){
			Winter2 = replace;
		} else{
			Winter2 = sci[1];
		}
		if(Transfer32 == 1){
		//ask custumer about 32 also replaceing 31
			Spring2 = replace;
		} else{
			Spring2 = sci[2];
		}
		
		Fall[2] = Fall2;
		Winter[2] = Winter2;
		Spring[2] = Spring2;
		
		//AddPhys();//adds Phys 33 if appropriate
		addCI();
		suggest();
		build();
	}
	
	if (activeMajor == 1){
		if(APChem > 2 || IBChem > 5){
			start = 1;
		}else if(APphysics > 3){
			start = 1;
		}else if(Transfer32 == 1){
			start = 1;
		} else if(APEnvSci > 3){
			start = 1;
		} else if(APphysicEM > 3 || IBphysics > 5){
			start = 1;
		}
		
		
		Fall2 = sci[start];
		Winter2 = CI[0];
		Spring2 = CI[1];
		
		Fall[2] = Fall2;
		Winter[2] = Winter2;
		Spring[2] = Spring2;
		suggest();
		build();
	}
}

//platinum
//stoneless complete
function AddPhys(){

	//do not run for web design major
	if (activeMajor == 1){
		return;
	}

	removeCore();
	
	//this is for AP Physics C Electrical & Magnets or whatever
	var phycsEM = q_apPhysCElecScore;
	
	//TRANSFER SYSTEM UPDATED NEEDED
	var phys33 = document.getElementById("check14").checked;
	
	//var phys33 = false; //Delete this after transfer implemenation
	//END TRANSFER SECTION
	
	
	var SciExemp = [];
	SciExemp[0] = Fall[2];
	SciExemp[1] = Winter[2];
	SciExemp[2] = Spring[2];
	
	var i;
	var flag = 0;
	
	//get value from Phys E&M test score
	
	if (phys33 == true){
		phycsEM = 5;
	}  	  	  
	
	for (i=0;i<3;i++){
		if (SciExemp[i] == "CORE"){
			flag++;
		}
	}
	if(flag == 3){
		if(phycsEM > 3){
			Fall[2] = replace;
		} else{
			Fall[2] = "PHYS 33";
		}
	}
}

//gold
//ruby i believe
function MoveCoen(){
	var APCompSci = q_apCompSciAScore;
	var IBCompSci = q_ibCompSciScore;
	var coen11 = document.getElementById("check6").checked;
	
	removeCore();
	
	var i;
	var flagW = 0;
	var flagF = 0;
	
	for (i=0;i<4;i++){
		if (Winter[i] == "CORE"){
			flagW++;
		} else if(Winter[i] == "CTW1" || Winter[i] == "CTW2" ){
			flagW++;
		}

	}
	
	if( flagW > 2){
		//move COEN 12 the winter if more than 2 CORE is Winter
		Winter[1] = coen2;
		Spring[1] = replace;
		return;
	}
	
	for (i=0;i<4;i++){
		if (Fall[i] == "CORE"){
			flagF++;
		} else if(Fall[i] == "CTW1" || Fall[i] == "CTW2" ){
			flagF++;
		}

	}
	
	if( flagF > 2){
		//move COEN 12 the winter if more than 2 CORE is Winter
		Fall[1] = coen2;
		Spring[1] = replace;
	}	
}

//platinum
//sapphire
//diamond w/ one exception
function COEN(){
	if (activeMajor == 0){
		//set test scores
		var APCompSci = q_apCompSciAScore;
		var IBCompSci = q_ibCompSciScore;
		
	  	//TRANSFER CREDIT SECTION
	  	//NEEDS UPDATE
	  	var coen10 = document.getElementById("check5").checked;
		var coen11 = document.getElementById("check6").checked;
		var coen12 = document.getElementById("check7").checked;
		
		//not part of transfer
		if ((cProgConfidence == 1) && APCompSci < 3){
			APCompSci = 3;
		}
		
		
		if (coen10 == true  && APCompSci < 3){
			APCompSci = 3;
		}
		if (coen11 == true){
			APCompSci = 5;
		}
		if (coen12 == true){
			APCompSci = 6;
		}
		//END SECTION
		
		
		//these will be the output variables, these are the classes that go in the matrix
		var Fall1;
		var Winter1;
		var Spring1;
		
		if(APCompSci == 6){
			//no COEN 12
			Fall1 = coen1[2];
			Winter1 = coen1[3];
			Spring1 = replace;
		} else if (APCompSci < 3 && IBCompSci < 6){
			//no credit follow the suggested plan
			Fall1 = coen1[0];
			Winter1 = coen1[1];
			Spring1 = coen2;
		} else if (APCompSci >= 4 || IBCompSci >= 6){
			//no COEN 11
			Fall1 = coen1[2];
			Winter1 = coen1[3];
			Spring1 = coen2[1];
		} else if (APCompSci == 3){
			//no COEN 10
			Fall1 = coen1[1];
			Winter1 = coen1[2];
			Spring1 = coen2;
		}
		
		Fall[1] = Fall1;
		Winter[1] = Winter1;
		Spring[1] = Spring1;
		
		if(APCompSci < 6){
			//Move COEN12 to a different quarter
			MoveCoen();
		}
		
		addCI();
		suggest();
		build();
	}
	
	if (activeMajor == 1){
		//these will be the input variables
		//set these it be the test scores
		var APCompSci = q_apCompSciAScore;
		var IBCompSci = q_ibCompSciScore;
		
		//let's set some goddamn checkboxes brother!
	  	var coen10 = document.getElementById("check5").checked;
		var coen11 = document.getElementById("check6").checked;
		var coen12 = document.getElementById("check7").checked;
		
		if (cProgConfidence == 1){
			APCompSci = 3;
		}
		if (coen10 == true  && APCompSci < 3){
			APCompSci = 3;
		}
		if (coen11 == true){
			APCompSci = 5;
		}
		if (coen12 == true){
			APCompSci = 6;
		}
		
		//these will be the output variables, these are the classes that go in the matrix
		var Fall1;
		var Winter1;
		var Spring1;
		if(APCompSci == 6){
			//no COEN 12
			Fall1 = coen1[1];
			Winter1 = coen1[2];
			Spring1 = replace;
		} else if (APCompSci < 3 && IBCompSci < 6){
			//no credit follow the suggested plan
			Fall1 = coen1[0];
			Winter1 = coen2[0];
			Spring1 = coen2[1];
		} else if (APCompSci >= 4 || IBCompSci >= 6){
			//no COEN 11
			Fall1 = coen1[1];
			Winter1 = coen1[2];
			Spring1 = coen2[1];
		} else if (APCompSci == 3){
			//no COEN 10
			Fall1 = coen1[1];
			Winter1 = coen2[0];
			Spring1 = coen2[1];
		}
		Fall[1] = Fall1;
		Winter[1] = Winter1;
		Spring[1] = Spring1;
		//THERE IS A PROBLEM WITH THIS IF STATEMENT
		if(APCompSci < 6){
			//Move COEN12 to a different quarter
			MoveCoen();
		}
		suggest();
		build();
	}
}

//platinum
//ruby
function CTW(){
	if (activeMajor == 0){
		var transfer19 = 0; // have they trnasfered out of COEN19
		
		//TRANSFER SECTION
		//replace this with transfer system
		var coen19 = document.getElementById("check8").checked;	
		if (coen19 == true){
			transfer19 = 1;
		}
		//END TRANSFER SECTION
		
		var Fall3 = core[0];
		var Winter3 = core[1];
		
		if(transfer19){
			var Spring3 = replace;
		} else{
			var Spring3 = core[2];
		}
		
		Fall[3] = Fall3;
		Winter[3] = Winter3;
		Spring[3] = Spring3;
		
		addCI();
		suggest();
		build();
	}
	
	if (activeMajor == 1){
		Fall[3] = core[0];
		Winter[3] = core[1];
		Spring[3] = core[2];
	}
}

//gold
//stoneless complete
function addCI(){
	
	//do not run for web design major
	if (activeMajor == 1){
		return;
	}
	
	removeCore();

	var flag = 9;
	var i;
	
	for (i=0;i<4;i++){
		if (Winter[i] == "CORE"){
			flag = i;
		}
		if (Winter[i] == "CI2" || Winter[i] == "CI1"){
			return;
		}
	}
	
	//this means that there is no core in the winter
	//and you will not add C&I
	if (flag == 9){
		return;
	}
	
	for (i=0;i<4;i++){
		if (Fall[i] == "CORE"){
			Fall[i]= "CI1";//this needs to change the class in the matrix
			Winter[flag] = "CI2";//this needs to change the class in the matrix
			
			if (flag == 0){
				Winter[0] = "CI2";
			} else if (flag == 1) {
				Winter[1] = "CI2";
			} else if (flag == 2) {
				Winter[2] = "CI2";
			} else if (flag == 3) {
				Winter[3] = "CI2";
			}
			
			if (i == 0){
				Fall[0] = "CI1";
			} else if (i == 1) {
				Fall[1] = "CI1";
			} else if (i == 2) {
				Fall[2] = "CI1";
			} else if (i == 3) {
				Fall[3] = "CI1";
			}
			
			return;			
		}
	}	
	for (i=0;i<4;i++){
		if (Spring[i] == "CORE"){
			Spring[i]= "CI2";//this needs to change the class in the matrix
			Winter[flag] = "CI1";//this needs to change the class in the matrix
			
			if (flag == 0){
				Winter[0] = "CI1";
			} else if (flag == 1) {
				Winter[1] = "CI1";
			} else if (flag == 2) {
				Winter[2] = "CI1";
			} else if (flag == 3) {
				Winter[3] = "CI1";
			}
			
			if (i == 0){
				Spring[0] = "CI2";
			} else if (i == 1) {
				Spring[1] = "CI2";
			} else if (i == 2) {
				Spring[2] = "CI2";
			} else if (i == 3) {
				Spring[3] = "CI2";
			}
			
			return;			
		}
	}
}

//gold
//ruby
//diamond
function engr1(){	
	var x = majorConfidence;
	
	if (x == true){
		Winter[4] = "ENGR 1";
		Fall[4] = "";
	} else{
		Fall[4] = "ENGR 1";
		Winter[4] = "";
	}
	build();

}

//gold
//ruby
//diamond
function suggest(){

	removeCore();
	addCI();

	var coreCred = [];
	var coreCount = 0;
	var i;
	
	var GovAP = q_apGovtScore;
	var MacroAP = q_apMacroEconScore;
	var MicroAP = q_apMicroEconScore;
	var PsychAP = q_apPsychologyScore;
	var EconIB = q_ibEconScore;
	
	for(i=0; i<11; i++){
		coreCred[i] = 0;
	}
	
	if(GovAP > 3 || MacroAP > 3 || MicroAP > 3 || PsychAP > 3 || EconIB > 5){
		coreCred[1] = 1;
	} else{
		coreCred[1] = 0;
	}
	
	for (i=0; i<4; i++){
		if(coreCred[coreCount]){
			coreCount++;
		}
		if (Fall[i] == "CORE"){
			Fall[i] = coreS[coreCount];
			coreCount++;
		}
	}
	for (i=0; i<4; i++){
		if(coreCred[coreCount]){
			coreCount++;
		}
		if (Winter[i] == "CORE"){
			Winter[i] = coreS[coreCount];
			coreCount++;
		}
	}
	for (i=0; i<4; i++){
		if(coreCred[coreCount]){
			coreCount++;
		}
		if (Spring[i] == "CORE"){
			Spring[i] = coreS[coreCount];
			coreCount++;
		}
	}
	build();	
}


//builds the table you see on screen
function build(){
	document.getElementById("rowA1").style.backgroundImage = buildToImage(Fall[0]);
	document.getElementById("rowB1").style.backgroundImage = buildToImage(Fall[1]);
	document.getElementById("rowC1").style.backgroundImage = buildToImage(Fall[2]);
	document.getElementById("rowD1").style.backgroundImage = buildToImage(Fall[3]);
	document.getElementById("rowE1").style.backgroundImage = buildToImage(Fall[4]);
	document.getElementById("rowA2").style.backgroundImage = buildToImage(Winter[0]);
	document.getElementById("rowB2").style.backgroundImage = buildToImage(Winter[1]);
	document.getElementById("rowC2").style.backgroundImage = buildToImage(Winter[2]);
	document.getElementById("rowD2").style.backgroundImage = buildToImage(Winter[3]);
	document.getElementById("rowE2").style.backgroundImage = buildToImage(Winter[4]);
	document.getElementById("rowA3").style.backgroundImage = buildToImage(Spring[0]);
	document.getElementById("rowB3").style.backgroundImage = buildToImage(Spring[1]);
	document.getElementById("rowC3").style.backgroundImage = buildToImage(Spring[2]);
	document.getElementById("rowD3").style.backgroundImage = buildToImage(Spring[3]);
	
	buildBlack();
}

//this function translates logic array notation into variables containing the image urls
function buildToImage(passer){
	//pairs image url with variables
	var amth106PNG = "url('images/classes/amth106.png')";
	var amth108PNG = "url('images/classes/amth108.png')";
	var BLANKPNG = "url('images/classes/BLANK.png')";
	var chem11PNG = "url('images/classes/chem11.png')";
	var coen10PNG = "url('images/classes/coen10.png')";
	var coen11PNG = "url('images/classes/coen11.png')";
	var coen12PNG = "url('images/classes/coen12.png')";
	var coen19PNG = "url('images/classes/coen19.png')";
	var core = "url('images/classes/core.png')";
	var ctw1PNG = "url('images/classes/ctw1.png')";
	var ctw2PNG = "url('images/classes/ctw2.png')";
	var engr1PNG = "url('images/classes/engr1.png')";
	var math9PNG = "url('images/classes/math9.png')";
	var math11PNG = "url('images/classes/math11.png')";
	var math12PNG = "url('images/classes/math12.png')";
	var math13PNG = "url('images/classes/math13.png')";
	var math14PNG = "url('images/classes/math14.png')";
	var math53PNG = "url('images/classes/math53.png')";
	var phys31PNG = "url('images/classes/phys31.png')";
	var phys32PNG = "url('images/classes/phys32.png')";
	var phys33PNG = "url('images/classes/phys33.png')";
	var ci1PNG = "url('images/classes/core/ci1.png')";
	var ci2PNG = "url('images/classes/core/ci2.png')";
	var ci3PNG = "url('images/classes/core/ci3.png')";
	var diversityPNG = "url('images/classes/core/diversity.png')";
	var elsjPNG = "url('images/classes/core/elsj.png')";
	var ethicsPNG = "url('images/classes/core/ethics.png')";
	var rtc1PNG = "url('images/classes/core/rtc1.png')";
	var rtc2PNG = "url('images/classes/core/rtc2.png')";
	var rtc3PNG = "url('images/classes/core/rtc3.png')";
	var seeAdvisorPNG = "url('images/classes/core/seeAdvisor.png')";
	var socSciPNG = "url('images/classes/core/socSci.png')";
	var comm2PNG = "url('images/classes/comm2.png')";
	
	//set logic array notation to variables with urls
	if (passer == "AMTH 106"){
		return amth106PNG;
	}
	if (passer == "AMTH 108"){
		return amth108PNG;
	}
	if (passer == ""){
		return BLANKPNG;
	}
	if (passer == "CHEM 11"){
		return chem11PNG;
	}
	if (passer == "COEN 10"){
		return coen10PNG;
	}
	if (passer == "COEN 11"){
		return coen11PNG;
	}
	if (passer == "COEN 12"){
		return coen12PNG;
	}
	if (passer == "COEN 19"){
		return coen19PNG;
	}
	if (passer == "CORE"){
		return core;
	}
	if (passer == "CTW1"){
		return ctw1PNG;
	}
	if (passer == "CTW2"){
		return ctw2PNG;
	}
	if (passer == "ENGR 1"){
		return engr1PNG;
	}
	if (passer == "MATH 9"){
		return math9PNG;
	}
	if (passer == "MATH 11"){
		return math11PNG;
	}
	if (passer == "MATH 12"){
		return math12PNG;
	}
	if (passer == "MATH 13"){
		return math13PNG;
	}
	if (passer == "MATH 14"){
		return math14PNG;
	}
	if (passer == "MATH 53"){
		return math53PNG;
	}
	if (passer == "PHYS 31"){
		return phys31PNG;
	}
	if (passer == "PHYS 32"){
		return phys32PNG;
	}
	if (passer == "PHYS 33"){
		return phys33PNG;
	}
	if (passer == "CI1"){
		return ci1PNG;
	}
	if (passer == "CI2"){
		return ci2PNG;
	}
	if (passer == "CI3"){
		return ci3PNG;
	}
	if (passer == "Diversity"){
		return diversityPNG;
	}
	if (passer == "ELSJ"){
		return elsjPNG;
	}
	if (passer == "Ethics"){
		return ethicsPNG;
	}
	if (passer == "RTC1"){
		return rtc1PNG;
	}
	if (passer == "RTC2"){
		return rtc2PNG;
	}
	if (passer == "RTC3"){
		return rtc3PNG;
	}
	if (passer == "SeeAdvisor"){
		return seeAdvisorPNG;
	}
	if (passer == "SocSci"){
		return socSciPNG;
	}
	if (passer == "COMM 2"){
		return comm2PNG;
	}
}



//builds the table you see on screen
function buildBlack(){
	$("#print_rowA1").attr("src", buildToImageBlack(Fall[0]));
	$("#print_rowB1").attr("src", buildToImageBlack(Fall[1]));
	$("#print_rowC1").attr("src", buildToImageBlack(Fall[2]));
	$("#print_rowD1").attr("src", buildToImageBlack(Fall[3]));
	$("#print_rowE1").attr("src", buildToImageBlack(Fall[4]));
	$("#print_rowA2").attr("src", buildToImageBlack(Winter[0]));
	$("#print_rowB2").attr("src", buildToImageBlack(Winter[1]));
	$("#print_rowC2").attr("src", buildToImageBlack(Winter[2]));
	$("#print_rowD2").attr("src", buildToImageBlack(Winter[3]));
	$("#print_rowE2").attr("src", buildToImageBlack(Winter[4]));
	$("#print_rowA3").attr("src", buildToImageBlack(Spring[0]));
	$("#print_rowB3").attr("src", buildToImageBlack(Spring[1]));
	$("#print_rowC3").attr("src", buildToImageBlack(Spring[2]));
	$("#print_rowD3").attr("src", buildToImageBlack(Spring[3]));
}

//this function translates logic array notation into variables containing the image urls
function buildToImageBlack(passer){
	//pairs image url with variables
	var amth106PNG = "images/black/classes/amth106.png";
	var amth108PNG = "images/black/classes/amth108.png";
	var BLANKPNG = "images/black/classes/BLANK.png";
	var chem11PNG = "images/black/classes/chem11.png";
	var coen10PNG = "images/black/classes/coen10.png";
	var coen11PNG = "images/black/classes/coen11.png";
	var coen12PNG = "images/black/classes/coen12.png";
	var coen19PNG = "images/black/classes/coen19.png";
	var core = "images/black/classes/core.png";
	var ctw1PNG = "images/black/classes/ctw1.png";
	var ctw2PNG = "images/black/classes/ctw2.png";
	var engr1PNG = "images/black/classes/engr1.png";
	var math9PNG = "images/black/classes/math9.png";
	var math11PNG = "images/black/classes/math11.png";
	var math12PNG = "images/black/classes/math12.png";
	var math13PNG = "images/black/classes/math13.png";
	var math14PNG = "images/black/classes/math14.png";
	var math53PNG = "images/black/classes/math53.png";
	var phys31PNG = "images/black/classes/phys31.png";
	var phys32PNG = "images/black/classes/phys32.png";
	var phys33PNG = "images/black/classes/phys33.png";
	var ci1PNG = "images/black/classes/core/ci1.png";
	var ci2PNG = "images/black/classes/core/ci2.png";
	var ci3PNG = "images/black/classes/core/ci3.png";
	var diversityPNG = "images/black/classes/core/diversity.png";
	var elsjPNG = "images/black/classes/core/elsj.png";
	var ethicsPNG = "images/black/classes/core/ethics.png";
	var rtc1PNG = "images/black/classes/core/rtc1.png";
	var rtc2PNG = "images/black/classes/core/rtc2.png";
	var rtc3PNG = "images/black/classes/core/rtc3.png";
	var seeAdvisorPNG = "images/black/classes/core/seeAdvisor.png";
	var socSciPNG = "images/black/classes/core/socSci.png";
	var comm2PNG = "images/black/classes/comm2.png";
	
	//set logic array notation to variables with urls
	if (passer == "AMTH 106"){
		return amth106PNG;
	}
	if (passer == "AMTH 108"){
		return amth108PNG;
	}
	if (passer == ""){
		return BLANKPNG;
	}
	if (passer == "CHEM 11"){
		return chem11PNG;
	}
	if (passer == "COEN 10"){
		return coen10PNG;
	}
	if (passer == "COEN 11"){
		return coen11PNG;
	}
	if (passer == "COEN 12"){
		return coen12PNG;
	}
	if (passer == "COEN 19"){
		return coen19PNG;
	}
	if (passer == "CORE"){
		return core;
	}
	if (passer == "CTW1"){
		return ctw1PNG;
	}
	if (passer == "CTW2"){
		return ctw2PNG;
	}
	if (passer == "ENGR 1"){
		return engr1PNG;
	}
	if (passer == "MATH 9"){
		return math9PNG;
	}
	if (passer == "MATH 11"){
		return math11PNG;
	}
	if (passer == "MATH 12"){
		return math12PNG;
	}
	if (passer == "MATH 13"){
		return math13PNG;
	}
	if (passer == "MATH 14"){
		return math14PNG;
	}
	if (passer == "MATH 53"){
		return math53PNG;
	}
	if (passer == "PHYS 31"){
		return phys31PNG;
	}
	if (passer == "PHYS 32"){
		return phys32PNG;
	}
	if (passer == "PHYS 33"){
		return phys33PNG;
	}
	if (passer == "CI1"){
		return ci1PNG;
	}
	if (passer == "CI2"){
		return ci2PNG;
	}
	if (passer == "CI3"){
		return ci3PNG;
	}
	if (passer == "Diversity"){
		return diversityPNG;
	}
	if (passer == "ELSJ"){
		return elsjPNG;
	}
	if (passer == "Ethics"){
		return ethicsPNG;
	}
	if (passer == "RTC1"){
		return rtc1PNG;
	}
	if (passer == "RTC2"){
		return rtc2PNG;
	}
	if (passer == "RTC3"){
		return rtc3PNG;
	}
	if (passer == "SeeAdvisor"){
		return seeAdvisorPNG;
	}
	if (passer == "SocSci"){
		return socSciPNG;
	}
	if (passer == "COMM 2"){
		return comm2PNG;
	}
}