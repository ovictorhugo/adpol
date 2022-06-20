$(document).ready(function(){
    $('.input-section').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("#" + inputValue);
        $(".section").not(targetBox).hide();
        $(targetBox).show();

        console.log("teste")
    });
});