$(document).ready(function() {
    var url;
    var title;

    // get the image URL and caption for each image
    $("#image_list a").each(function () {
        url=$(this).attr("href");
        title = $(this).attr("title");
    });

    // preload the image for each link
    (new Image()).src = this;

    // set up the event handlers for each link
    $("#image_list a").click(function(evt){

        // cancel the default action of each link
        url = $(this).attr("href");
        title = $(this).attr("title");

        $("#caption").fadeOut(2000,
            function(){
                $("#caption").text(title).fadeIn(2000);
            });
        $("#image").fadeOut(2000,
            function(){
                $("#image").attr("src",url).fadeIn(2000);
            });




        evt.preventDefault();
    });
    // move the focus to the first link
    $("a:eq(0)").focus();

}); // end ready