var names = ["Tom", "Lily", "Jose", "Sarah"];
var height = [65, 60, 72, 68];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
    $("show_results").onclick = showResult;
    $("add").onclick = addHeight;
    $("display_height").onclick = displayHeight;
    $("name").focus();
};

function showResult(){
    var average =0;
    var sum =0;
    var highest;
    var max =0;

    for(i=0; i<height.length-1;i++){
        sum += height[i];
    }
    average = (sum/height.length);

    for(j=0;j<height.length;j++){
        if(height[j]>max){
            max =height[j];
            highest=j;
        }
    }


    $("result").innerHTML = "<h2>Results</h2>" + "<p>Average Height =" + average
        +"</p>" + "<p>Highest Height =" +names[highest] + " with a height of " + max + "</p>" ;



}

function displayHeight(){
    var html = "";
    html += "<tr><th>Names</th> <th>Heights</th></tr>"
    for(k=0;k<height.length;k++){
        html+="<tr><td>" + names[k] + "</td><td>" + height[k]+"</td></tr>";
    }
    html+="</table>";
    $("height_table").innerHTML = "<h2>Heights</h2>" + html;
}

function addHeight(){
    var nameInput = document.getElementById("name").value;
    var heightInput = document.getElementById("height").value;
    heightInput = parseInt(heightInput);
   if(heightInput>100 || heightInput<0 || nameInput == NaN){
       alert("You must enter a name and a valid height");
       nameInput = "";
       heightInput = "";

       $("name").focus();
   }
   else{
       names.push(nameInput);
       height.push(heightInput);
       $("name").innerHTML = "" ;
       $("height").innerHTML = "" ;
       $("name").focus();
   }


}
