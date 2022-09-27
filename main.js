//$("h1").hide();
/*$(document).ready(function(){
});*/

$(function(){
    $("#Segundo").css({"background-color" : "red"});
    $("#boton-hide").click(function(){
        $("#Segundo").hide()
    });

    $("#boton-show").dblclick(function(){
        $("#Segundo").show()
    });

    /*$("#Segundo").mouseenter(function(){
        $("#Segundo").hide()
    });

    $("#Segundo").mouseleave(function(){
        $("#Segundo").show()
    });*/

    //$("#Segundo").animate({width:"300px"});

    $("#boton-alert").click(function(){
        alert($("#Segundo").attr("title"));
    });
});