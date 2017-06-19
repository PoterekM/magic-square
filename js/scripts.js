var text1, text2, text3, text4, text5, text6, text7, text8, text9, box1Win, box2Win, box3Win, box4Win, box5Win, box6Win, box7Win, box8Win, box9Win;
var boxes3 = [text1, text2, text3, text4, text5, text6, text7, text8, text9];
var answers3 = [8, 1, 6, 3, 5, 7, 4, 9, 2];

function Square(squareSize, solved) {
  this.boxes = boxes3;
  // this.answer = answer;
  this.squareSize = squareSize;
  this.solved = solved;
};

function Box(empty, val, answer) {
  this.empty = empty;
  this.val = val;
  this.answer = answer;
};

// answers3 = {text1: 8, text2: 1, text3: 6, text4: 3, text5: 5, text6: 7, text7: 4, text8: 9, text9: 2};

var box1 = new Box(true, text1, 8);
var box2 = new Box(true, text2, 1);
var box3 = new Box(true, text3, 6);
var box4 = new Box(true, text4, 3);
var box5 = new Box(true, text5, 5);
var box6 = new Box(true, text6, 7);
var box7 = new Box(true, text7, 4);
var box8 = new Box(true, text8, 9);
var box9 = new Box(true, text9, 2);

function isCorrect(_val, _answer) {
  if (_val === _answer) {
    return true;
  } else {
    return false;
  };
};

function victory() {
  if ((box1Win === true) && (box2Win === true) && (box3Win === true) && (box4Win === true) && (box5Win === true) && (box6Win === true) && (box7Win === true) && (box8Win === true) && (box9Win === true))
  return true;
}



/////////////////////line in the sand/////////////////////////
$(document).ready(function() {
  var text1, text2, text3, text4, text5, text6, text7, text8, text9;

  $("#form1").submit(function(event) {
    event.preventDefault();
    text1 = parseInt($("input#text1").val());
    console.log(text1);
    console.log(box1.answer);
    if (isCorrect(text1, box1.answer)) {
      console.log(isCorrect(text1, box1.answer));
      $("input#text1").addClass("right");  // change box border to green
    } else {
      console.log(isCorrect(text1, box1.answer));
      $("input#text1").addClass("wrong");  // change box border to red
      $("#text1").val("");
    };
    var box1Win = isCorrect(text1, box1.answer);
    console.log(box1Win);
  });

  $("#form2").submit(function(event) {
    event.preventDefault();
    text2 = parseInt($("input#text2").val());
    if (isCorrect(text2, box2.answer)) {
      console.log(isCorrect(text2, box2.answer));
      $("input#text2").addClass("right");
    } else {
      console.log(isCorrect(text2, box2.answer));
      $("input#text2").addClass("wrong");
      $("#text2").val("");
    };
    var box2Win = isCorrect(text2, box2.answer);
    console.log(box2Win);
  });

  $("#form3").submit(function(event) {
    event.preventDefault();
    text3 = parseInt($("input#text3").val());
    if (isCorrect(text3, box3.answer)) {
      console.log(isCorrect(text3, box3.answer));
      $("input#text3").addClass("right");
    } else {
      console.log(isCorrect(text3, box3.answer));
      $("input#text3").addClass("wrong");
      $("#text3").val("");
    };
    var box3Win = isCorrect(text3, box3.answer);
    console.log(box3Win);
  });

  $("#form4").submit(function(event) {
    event.preventDefault();
    text4 = parseInt($("input#text4").val());
    if (isCorrect(text4, box4.answer)) {
      console.log(isCorrect(text4, box4.answer));
      $("input#text4").addClass("right");
    } else {
      console.log(isCorrect(text4, box4.answer));
      $("input#text4").addClass("wrong");
      $("#text4").val("");
    };
    var box4Win = isCorrect(text4, box4.answer);
    console.log(box4Win);
  });

  $("#form5").submit(function(event) {
    event.preventDefault();
    text5 = parseInt($("input#text5").val());
    if (isCorrect(text5, box5.answer)) {
      console.log(isCorrect(text5, box5.answer));
      $("input#text5").addClass("right");
    } else {
      console.log(isCorrect(text5, box5.answer));
      $("input#text5").addClass("wrong");
      $("#text5").val("");
    };
    var box5Win = isCorrect(text5, box5.answer);
    console.log(box5Win);
  });

  $("#form6").submit(function(event) {
    event.preventDefault();
    text6 = parseInt($("input#text6").val());
    if (isCorrect(text6, box6.answer)) {
      console.log(isCorrect(text6, box6.answer));
      $("input#text6").addClass("right");
    } else {
      console.log(isCorrect(text6, box6.answer));
      $("input#text6").addClass("wrong");
      $("#text6").val("");
    };
    var box6Win = isCorrect(text6, box6.answer);
    console.log(box6Win);
  });

  $("#form7").submit(function(event) {
    event.preventDefault();
    text7 = parseInt($("input#text7").val());
    if (isCorrect(text7, box7.answer)) {
      console.log(isCorrect(text7, box7.answer));
      $("input#text7").addClass("right");
    } else {
      console.log(isCorrect(text7, box7.answer));
      $("input#text7").addClass("wrong");
      $("#text7").val("");
    };
    var box7Win = isCorrect(text7, box7.answer);
    console.log(box7Win);
  });

  $("#form8").submit(function(event) {
    event.preventDefault();
    text8 = parseInt($("input#text8").val());
    if (isCorrect(text8, box8.answer)) {
      console.log(isCorrect(text8, box8.answer));
      $("input#text8").addClass("right");
    } else {
      console.log(isCorrect(text8, box8.answer));
      $("input#text8").addClass("wrong");
      $("#text8").val("");
    };
    var box8Win = isCorrect(text8, box8.answer);
    console.log(box8Win);
  });

  $("#form9").submit(function(event) {
    event.preventDefault();
    text9 = parseInt($("input#text9").val());
    if (isCorrect(text9, box9.answer)) {
      console.log(isCorrect(text9, box9.answer));
      $("input#text9").addClass("right");
    } else {
      console.log(isCorrect(text9, box9.answer));
      $("input#text9").addClass("wrong");
      $("#text9").val("");
    };
    var box9Win = isCorrect(text9, box9.answer);
    console.log(box9Win);
  });

  var winner = victory();
  if (winner === true);
    return "You win!";

  $(".win-message").text(winner);
});
