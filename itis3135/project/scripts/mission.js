$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "mission.json",
        beforeSend: function() {
            $("#mission").html("Loading...");
        },
        timeout: 10000,

        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#mission").html("");
            $.each(data,function(){
                $.each(this,function(key,value){
                    var xmlDoc = $(this);
                    $("#mission").append("<p>"+ value.text +"</p>");
                });
            });

        }
    });
});