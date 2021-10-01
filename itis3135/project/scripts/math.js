$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "scripts/math.json",
        beforeSend: function() {
            $("#baby").html("Loading...");
        },
        timeout: 10000,

        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#baby").html("");
            $.each(data,function(){
                $.each(this,function(key,value){
                    var xmlDoc = $(this);
                    $("#baby").append("<div><a href="+value.href+
                        "><img src=\" " +value.src+
                        "\" alt=" +value.alt+"</a></div>");
                });
            });

        }
    });
});