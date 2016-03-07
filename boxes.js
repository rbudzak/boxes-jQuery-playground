$(document).ready(function(){
  console.log("hello world");

  //Exercise 1
  alert("All systems are go.");

  // Exercise 2
  // $('#secretBox').css('background-color', 'white');
  // $('#secretBox').append('<h1> MY SECRET IS OUT</h1>');
  // $('#row1').children().removeClass().addClass('box boxType3');
  // $('#row4 div').last().css('display', 'none');
  // $('.boxType1').css('background-color', 'white');
  // $('#row2').children().slice(0,2).removeClass();
  // $('.box').not('#secretBox').css('width','2px');

  //Exercise 3
  $('#container').click(function(e){
    console.log(e.pageX + ", " + e.pageY);
    return e.pageX + ", " + e.pageY;
  });
  $('.boxType1').append("<a href=\"http://galvanize.com\">Galvanize</a>");
  $('a').click(function (e){
    e.preventDefault();
    alert("YOU SHALL NOT PASS!");
  });

});
