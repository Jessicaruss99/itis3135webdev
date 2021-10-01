// $(document).ready(function() {
//
// }); // end ready
// var nav = $("#nav_list a");
// var h1 = document.getElementById("h1");
// var h2 = document.getElementById("h2");
// var h3 = document.getElementById("h3");
// var img = document.getElementById("img");
// var p = document.getElementById("p");
// var xhr = new XMLHttpRequest();
//
// xhr.addEventListener("click", function(){
//     xhr.open("GET", 'http://webpages.uncc.edu/jruss8/Exercise/json_files/toobin.json');
// });
//
// $("#nav_list a").click(function(evt){
//
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open("GET", 'http://webpages.uncc.edu/jruss8/Exercise/json_files/'+$("#title")+'.json');
//     ourRequest.onload = function(){
//         $.getJSON($("#title")+".json", )
//         var ourData = JSON.parse(ourRequest.response);
//         renderHTML(ourData);
//     };
//     // ourRequest.open("GET", 'http://webpages.uncc.edu/jruss8/Exercise/json_files/toobin.json');
//     ourRequest.send();
//
// });
//


//within click event handlers for <a> elements, use title attribute to build name of JSON file
//get data for speaker and put in html elements provided and put those in the main element
//clear the elements from main before you put new data
$(document).ready(function() {
$("#nav_list a").click(function(evt) {
    var title = $(this).attr("title");
    console.log(title);
    var url = '../Exercise/json_files/'+title+'.json'
    var html = "";
    $.getJSON(url, function(data){
        $.each(data,function(){
            $.each(this,function(key,value){
                $("#main").html(html);
                html += "<h1>" + value.title +"</h1>";
                html += "<h2>" + value.month +"</h2>";
                html += "<h3>" + value.speaker +"</h3>";
                html += "<img src =\"" + value.image + "\"";
                html += "<p>" + value.text +"</p>";
                $("#main").html(html);
            });
        });

    });

});
});



