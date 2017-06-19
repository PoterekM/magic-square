var text1, text2, text3, text4, text5, text6, text7, text8, text9;
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
  });
});
