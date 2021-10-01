$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "contact.json",
        beforeSend: function() {
            $("#contact").html("Loading...");
        },
        timeout: 10000,

        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#contact").html("");
            $.each(data,function(){
                $.each(this,function(key,value){
                    var xmlDoc = $(this);
                    $("#contact").append("<ul><li>"+ value.email+"</li><li>"+value.number+"</li></ul><p>" +
                    value.p1+"</p><p>"
                    +value.p2+"</p><p>"
                    +value.p3+"</p><p>"+
                        value.p4+"</p><p><a href="
                    +value.href+">Click here to visit our school website</a></p>");
                });
            });

        }
    });
});