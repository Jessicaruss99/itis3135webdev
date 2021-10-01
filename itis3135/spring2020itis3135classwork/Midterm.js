var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var expenditure = [ 20, 12, 15, 10, 30, 25, 40 ];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers

    $("update").onclick = updateExpenditure;

    $("showtotal").onclick = showTotalExp;
    $("show_max").onmouseover = showMax;

};
function updateExpenditure() {

     var dayInput = document.getElementById("days").value;

    var expenditureInput = document.getElementById("expenditure").value;
    expenditureInput = parseInt(expenditureInput);

    if (isNaN(expenditureInput)) {
        alert("Enter a valid number");
    }

    else {


        if (dayInput == "Monday") {
            expenditure[0] = expenditureInput;
        }
        if (dayInput == "Tuesday") {
            expenditure[1] = expenditureInput;
        }
        if (dayInput == "Wednesday") {
            expenditure[2] = expenditureInput;
        }
        if (dayInput == "Thursday") {
            expenditure[3] = expenditureInput;
        }
        if (dayInput == "Friday") {
            expenditure[4] = expenditureInput;
        }
        if (dayInput == "Saturday") {
            expenditure[5] = expenditureInput;
        }
        if (dayInput == "Sunday") {
            expenditure[6] = expenditureInput;
        }


        alert("Your updated expenditures are:" + expenditure);

    }
    expenditureInput = "";

}
    function showTotalExp(){
        var sum = 0;
        for (var i = 0; i < expenditure.length; i++) {
            sum += expenditure[i]
        }
        $("showtotal").innerHTML = "<p>sum<p>" ;
        }




    function showMax(){
        var dayInput = document.getElementById("days").value;


        if(dayInput=="Monday"){
            $("showMax").innerHTML = "<p>Your maximum expenditure is $ " + expenditure[0] + " on Monday</p>";
        }
        if(dayInput=="Tuesday"){
            $("showMax").innerHTML = "<p>Your maximum expenditure is $ " + expenditure[1] + " on Tuesday</p>";
        }
        if(dayInput=="Wednesday"){
            $("showMax").innerHTML = "<p>Your maximum expenditure is $ " + expenditure[2] + " on Wednesday</p>";
        }
        if(dayInput=="Thursday"){
            $("showMax").innerHTML = "<p>Your maximum expenditure is $ " + expenditure[3] + " on Thursday</p>";
        }
        if(dayInput=="Friday"){
            $("showMax").innerHTML = "<p>Your maximum expenditure is $ " + expenditure[4] + " on Friday</p>";
        }
        if(dayInput=="Saturday"){
            $("showMax").innerHTML = "<p>Your maximum expenditure is $ " + expenditure[5] + " on Saturday</p>";
        }
        if(dayInput=="Sunday"){
            $("showMax").innerHTML = "<p>Your maximum expenditure is $ " + expenditure[6] + " on Sunday</p>";
        }

}