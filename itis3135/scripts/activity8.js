var days = ["Monday", "Tuesday"];
var temperature = [80,70];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
    $("display_results").onclick = displayResults;
    $("add_temperature").onclick = addTemperature;
    $("display_temperature").onclick = displayTemperature;
    $("days").focus();
};

function addTemperature(){
    var dayInput = document.getElementById("days").value;
    var temperatureInput = document.getElementById("temperature").value;
    
   if(temperatureInput>150 || temperatureInput<-30 || temperatureInput == ""){
       alert("You must enter a day and a valid temperature");
       temperatureInput = "";
       $("days").focus();
   }
   else{
       temperatureInput = parseInt(temperatureInput);
       days.push(dayInput);
       temperature.push(temperatureInput);
       $("temperature").innerHTML = "" ;
       $("days").focus();
   }



  

}
function displayResults(){
    var average =0;
    var sum =0;
    var highest;
    var max =0;

    for(i=0; i<temperature.length-1;i++){
        sum += temperature[i];
    }
    average = (sum/temperature.length);

    for(j=0;j<temperature.length;j++){
        if(temperature[j]>max){
            max =temperature[j];
            highest=j;
        }
    }


    $("results").innerHTML = "<h2>Results</h2>" + "<p>Average Temperature for the week =" + average
        +"</p>" + "<p>The highest temperature was on " +days[highest] + " with a temp of " + max + "</p>" ;


    
}

function displayTemperature(){
    
   
    var html = "";
    html += "<tr><th>Days</th> <th>Temperatures</th></tr>"
    for(k=0;k<temperature.length;k++){
        html+="<tr><td>" + days[k] + "</td><td>" + temperature[k]+"</td></tr>";
    }
    html+="</table>";
    $("temperature_table").innerHTML = "<h2>Temperatures</h2>" + html;
    

}
