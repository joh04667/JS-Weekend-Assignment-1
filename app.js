var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

// more claims
var claim6 = new claim("Kyle Johnson", "Primary Care", 350);
var claim7 = new claim("Squanto Squishy", "Emergency", 2580);
var claim8 = new claim("Johnny Jones", "Optical", 260);
var claim9 = new claim("Hal Jordan", "Specialist", 700);
var claim10 = new claim("Wade Wilson", "Emergency", 6000);

var initialList = [claim1, claim2, claim3, claim4, claim5]

var totalPayedOut = 0;

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//add claims to array
initialList.push(claim6, claim7, claim8, claim9, claim10);


//function to determine percent covered
function coveragePercent(claim) {
switch(claim.visitType) {
	case "Optical":
	return 0;
	case "Specialist":
  return 0.1;
	case "Emergency":
  return 1;
	case "Primary Care":
	return 0.5;
	default:
	throw("Invalid care type input");
 }
}

//function to determine amount covered
function amountCovered(claim) {
	var covered = Math.round(claim.visitCost * coveragePercent(claim));
	console.log("Paid out $" + covered + " for " + claim.patientName);
	totalPayedOut += covered;
	return covered;
}

// loop through whole array and log totalPayedOut
initialList.forEach(s => amountCovered(s));
console.log("Total amount paid out: $" + totalPayedOut.toLocaleString({style: 'currency', currency: 'USD'}));
