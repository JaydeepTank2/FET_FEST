// $( ".tile" ).on("click", function(){
//     $(".modal-title").text($(this).data("item"));
//     $(".scss-value").text($(this).data("scss"));

//     $(".css-value").text($(this).data("css"));

//     $(".js-value").text($(this).data("js"));

//     $(".xml-value").text($(this).data("xml"));

// });

$(document).on("click", ".tile", function () {
    
        $(".modal-title").text($(this).data("item"));
        $(".scss-value").text($(this).data("scss"));
    
        $(".css-value").text($(this).data("css"));
    
        $(".js-value").text($(this).data("js"));
    
        $(".xml-value").text($(this).data("xml"));
    });