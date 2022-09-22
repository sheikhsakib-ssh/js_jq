
// jquery started 

$(document).ready(function () {

// alert area start
$(".click").click(function () { 
    alert("Leave from here");  
});
// alert area end

// hide area start 
$(".hide").click(function () { 
    $(".h_hide").hide();
});
// hide area end

// show area start 
$(".show").click(function () { 
    $(".h_hide").show();
});
// show area end

// toggle area start 
$(".toggle").click(function () { 
    $(".h_hide").toggle();
});
// toggle area end
// fadeout area start 
$(".fade_out").click(function () { 
    $("h3").fadeOut(800);
});
// fadeout area end

// fadein area start 
$(".fade_in").click(function () { 
    $("h3").fadeIn(800);
});
// fadein area end

// fade toggle area start 
$(".fade_toggle").click(function () { 
    $("h3").fadeToggle(800);
});
// fade toggle area end

// slider area started 
$(".box1").click(function () { 
    $(".box2").slideToggle(600);
});
// slider area finished

// accordion area started
$( "#accordion" ).accordion();
// accordion area finished

// draggable area started 
$( "#draggable" ).draggable();
// draggable area finished

// droppable area started 
$( "#draggable1" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
// droppable area finished

// date picker area started 
$( "#datepicker" ).datepicker();
// date picker area finished

// dialog area started 
$( "#dialog" ).dialog();
// dialog area finished


});
// jquery finished