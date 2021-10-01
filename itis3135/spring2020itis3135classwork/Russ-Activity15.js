$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "team15.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,

        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#team").html("");
            $.each(data,function(){
                $.each(this,function(key,value){
                    var xmlDoc = $(this);
                    console.log(value.first_name);
                    $("#team").append(
                        "<img src =\"" + value.image + "\">" +  "<br>"
                        +
                        "<h2>" + value.first_name +"</h2>"+
                        "<h3>" + value.title +"</h3>"  +
                        "<p>" + value.bio +"</p>"
                    );


                });
            });

        }
    });
});