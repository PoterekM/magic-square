var text1, text2, text3, text4, text5, text6, text7, text8, text9, box1Win, box2Win, box3Win, box4Win, box5Win, box6Win, box7Win, box8Win, box9Win;
var boxes3 = [text1, text2, text3, text4, text5, text6, text7, text8, text9];
var boxesArr = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
var answers3 = [8, 1, 6, 3, 5, 7, 4, 9, 2];

function Square(boxes, squareSize) {
  this.boxes = boxesArr;
  this.squareSize = squareSize;
};

function Box(full, val, answer, correct) {
  this.full = full;
  this.val = val;
  this.answer = answer;
  this.correct = false;
};



var box1 = new Box(false, text1, 8, false);
var box2 = new Box(false, text2, 1, false);
var box3 = new Box(false, text3, 6, false);
var box4 = new Box(false, text4, 3, false);
var box5 = new Box(false, text5, 5, false);
var box6 = new Box(false, text6, 7, false);
var box7 = new Box(false, text7, 4, false);
var box8 = new Box(false, text8, 9, false);
var box9 = new Box(false, text9, 2, false);


function isCorrect(_val, _answer) {
  if (_val === _answer) {
    return true;
  } else {
    return false;
  };
};

function allFilled() {
  if (box1.full && box2.full && box3.full && box4.full && box5.full && box6.full && box7.full && box8.full && box9.full) {
    return true;
  } else {
    return false;
  };
};

function allCorrect() {
  if (box1.correct && box2.correct && box3.correct && box4.correct && box5.correct && box6.correct && box7.correct && box8.correct && box9.correct) {
    return true;
  } else {
    return false;
  };
};



/////////////////////line in the sand/////////////////////////
$(document).ready(function() {
  var text1, text2, text3, text4, text5, text6, text7, text8, text9, winner;
  var boxesArr;

  var newSquare = new Square(boxesArr, 3);
  console.log("newSquare = " + newSquare);


  $("#form1").submit(function(event) {
    event.preventDefault();
    text1 = parseInt($("input#text1").val());
    if (isCorrect(text1, box1.answer)) {
      console.log(isCorrect(text1, box1.answer));
      $("input#text1").addClass("right");  // change box border to green
      box1.correct = true;
      box1.full = true;
      if ((newSquare.totalCorrect === 9) && (allFilled() === true)) {
        $("#win-message").text("Victory!");
      };
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
      box2.correct = true;
      box2.full = true;
      if ((allCorrect() === true) && (allFilled() === true)) {
        $("#win-message").text("Victory!");
      };
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
      box3.correct = true;
      box3.full = true;
      if ((allCorrect() === true) && (allFilled() === true)) {
        $("#win-message").text("Victory!");
      };
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
      box4.correct = true;
      box4.full = true;
      if ((allCorrect() === true) && (allFilled() === true)) {
        $("#win-message").text("Victory!");
      };
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
      box5.correct = true;
      box5.full = true;
      if ((allCorrect() === true) && (allFilled() === true)) {
        $("#win-message").text("Victory!");
      };
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
      box6.correct = true;
      box6.full = true;
      if ((allCorrect() === true) && (allFilled() === true)) {
        $("#win-message").text("Victory!");
      };
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
      box7.correct = true;
      box7.full = true;
      if ((allCorrect() === true) && (allFilled() === true)) {
        $("#win-message").text("Victory!");
      };
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
      box8.correct = true;
      box8.full = true;
      if ((allCorrect() === true) && (allFilled() === true)) {
        $("#win-message").text("Victory!");
      };
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
      box9.correct = true;
      box9.full = true;
      if ((allCorrect() === true) && (allFilled() === true)) {
        $("#win-message").text("Victory!");
      };
    } else {
      console.log(isCorrect(text9, box9.answer));
      $("input#text9").addClass("wrong");
      $("#text9").val("");
    };
    var box9Win = isCorrect(text9, box9.answer);
    console.log(box9Win);
  });
});
