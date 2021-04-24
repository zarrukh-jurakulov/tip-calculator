


function submitButton() {

 // input for entering bill
 let bill = document.getElementById("inputBill").value;
 bill = parseInt(bill);

 // Selecting percent for service 
 let selectedValue = document.getElementById("mySelect").value;
 console.log(selectedValue)



 // Calculating percent of tip
 let totalOfTip = bill * selectedValue;

 //  input for entering amount of people
 let peopleSharing = document.getElementById("amountPeople").value;
 peopleSharing = parseInt(peopleSharing);

 // Calculate sharing  Price for each people
 let totalShare = totalOfTip / peopleSharing;
 let roundNum = Math.round(totalShare, 2);
 // Show on display Total percent
 document.getElementById("totalBill").innerHTML = "Total : $ " + totalOfTip;

 // Show on dislplay Percent for each people
 document.getElementById("total").innerHTML = "for each : $ " + roundNum;
}