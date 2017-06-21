var text1, text2, text3, text4, text5, text6, text7, text8, text9, box1Win, box2Win, box3Win, box4Win, box5Win, box6Win, box7Win, box8Win, box9Win;
var boxes3 = [text1, text2, text3, text4, text5, text6, text7, text8, text9];
var boxesArr = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
var answers3 = [8, 1, 6, 3, 5, 7, 4, 9, 2];

function Square(boxes, totalCorrect, numFilled, squareSize, solved) {
  this.boxes = boxesArr;
  // this.answer = answer;
  this.totalCorrect = 0;
  console.log(this.totalCorrect);
  this.numFilled = 0;
  this.squareSize = squareSize;
  this.solved = false;
  console.log(this.solved);
};

function Box(full, val, answer) {
  this.full = full;
  this.val = val;
  this.answer = answer;
};



var box1 = new Box(false, text1, 8);
var box2 = new Box(false, text2, 1);
var box3 = new Box(false, text3, 6);
var box4 = new Box(false, text4, 3);
var box5 = new Box(false, text5, 5);
var box6 = new Box(false, text6, 7);
var box7 = new Box(false, text7, 4);
var box8 = new Box(false, text8, 9);
var box9 = new Box(false, text9, 2);

// Square.prototype.victory = function() {
//   if ((box1Win === true) && (box2Win === true) && (box3Win === true) && (box4Win === true) && (box5Win === true) && (box6Win === true) && (box7Win === true) && (box8Win === true) && (box9Win === true)) {
//     this.solved = true;
//     return this.solved;
//   };
// };

// Square.prototype.victory = function() {
//   if (box1Win && box2Win && box3Win && box4Win && box5Win && box6Win && box7Win && box8Win && box9Win) {
//     console.log("Box Wins: " + box1Win, box2Win, box3Win, box4Win, box5Win, box6Win, box7Win, box8Win, box9Win);
//     this.solved = true;
//     console.log(this.solved);
//     return this.solved;
//   } else {
//     console.log(this.solved);
//     return this.solved;
//   };
// };

Square.prototype.victory = function() {
  if (this.totalCorrect === 9) {
    this.solved = true;
    console.log("this.solved = " + this.solved);
    return this.solved;
  } else {
    this.solved = false;
    console.log("this.solved = " + this.solved);
    return this.solved;
  };
};

// Square.prototype.onchange(this.solved) = function(){
//   alert(newSquare.victory());
// };

// answers3 = {text1: 8, text2: 1, text3: 6, text4: 3, text5: 5, text6: 7, text7: 4, text8: 9, text9: 2};


function isCorrect(_val, _answer) {
  if (_val === _answer) {
    return true;
  } else {
    return false;
  };
};

// function allFilled() {
//   for (var i = 1; i == boxesArr.length; i++) {
//     boxesArr[i].empty = false;
//     console.log(boxesArr[i]);
//   };
//
//   if ((box1.empty === false) && (box2.empty === false) && (box3.empty === false) && (box4.empty === false) && (box5.empty === false) && (box6.empty === false) && (box7.empty === false) && (box8.empty === false) && (box9.empty === false)) {
//     return true;
//   };
// };
//
// function victory() {
//   if ((box1Win === true) && (box2Win === true) && (box3Win === true) && (box4Win === true) && (box5Win === true) && (box6Win === true) && (box7Win === true) && (box8Win === true) && (box9Win === true)) {
//     return true;
//   };
// };



/////////////////////line in the sand/////////////////////////
$(document).ready(function() {
  var text1, text2, text3, text4, text5, text6, text7, text8, text9, winner;
  var boxesArr;
  var totalCorrect = 0;

  var newSquare = new Square(boxesArr, 0, 0, 3, false);
  console.log(newSquare.numFilled);
  console.log(newSquare.totalCorrect);
  console.log("newSquare = " + newSquare);

  // if (newSquare.totalCorrect !== 9) {
  //   console.log("totalCorrect = " + newSquare.totalCorrect);

  // if (! newSquare.victory()) {
  //   alert(newSquare.victory());

  // do {

    $("#form1").submit(function(event) {
      event.preventDefault();
      text1 = parseInt($("input#text1").val());
      console.log(text1);
      console.log(box1.answer);
      if (isCorrect(text1, box1.answer)) {
        console.log(isCorrect(text1, box1.answer));
        $("input#text1").addClass("right");  // change box border to green
        newSquare.totalCorrect ++;
        box1.full = true;
        newSquare.numFilled ++;
        if ((newSquare.totalCorrect === 9) && (newSquare.numFilled === 9)) {
          $("#win-message").text("Victory!");
        };
        console.log(newSquare.totalCorrect);
      } else {
        console.log(isCorrect(text1, box1.answer));
        $("input#text1").addClass("wrong");  // change box border to red
        $("#text1").val("");
      };
      var box1Win = isCorrect(text1, box1.answer);
      // return newSquare.totalCorrect;
      console.log(box1Win);
    });

    $("#form2").submit(function(event) {
      event.preventDefault();
      text2 = parseInt($("input#text2").val());
      if (isCorrect(text2, box2.answer)) {
        console.log(isCorrect(text2, box2.answer));
        $("input#text2").addClass("right");
        newSquare.totalCorrect ++;
        box2.full = true;
        newSquare.numFilled ++;
        if ((newSquare.totalCorrect === 9) && (newSquare.numFilled === 9)) {
          $("#win-message").text("Victory!");
        };
        console.log(newSquare.totalCorrect);
      } else {
        console.log(isCorrect(text2, box2.answer));
        $("input#text2").addClass("wrong");
        $("#text2").val("");
      };
      var box2Win = isCorrect(text2, box2.answer);
      // return newSquare.totalCorrect;
      console.log(box2Win);
    });

    $("#form3").submit(function(event) {
      event.preventDefault();
      text3 = parseInt($("input#text3").val());
      if (isCorrect(text3, box3.answer)) {
        console.log(isCorrect(text3, box3.answer));
        $("input#text3").addClass("right");
        newSquare.totalCorrect ++;
        box3.full = true;
        newSquare.numFilled ++;
        if ((newSquare.totalCorrect === 9) && (newSquare.numFilled === 9)) {
          $("#win-message").text("Victory!");
        };
        console.log(newSquare.totalCorrect);
      } else {
        console.log(isCorrect(text3, box3.answer));
        $("input#text3").addClass("wrong");
        $("#text3").val("");
      };
      var box3Win = isCorrect(text3, box3.answer);
      // return newSquare.totalCorrect;
      console.log(box3Win);
    });

    $("#form4").submit(function(event) {
      event.preventDefault();
      text4 = parseInt($("input#text4").val());
      if (isCorrect(text4, box4.answer)) {
        console.log(isCorrect(text4, box4.answer));
        $("input#text4").addClass("right");
        newSquare.totalCorrect ++;
        box4.full = true;
        newSquare.numFilled ++;
        if ((newSquare.totalCorrect === 9) && (newSquare.numFilled === 9)) {
          $("#win-message").text("Victory!");
        };
        console.log(newSquare.totalCorrect);
      } else {
        console.log(isCorrect(text4, box4.answer));
        $("input#text4").addClass("wrong");
        $("#text4").val("");
      };
      var box4Win = isCorrect(text4, box4.answer);
      // return newSquare.totalCorrect;
      console.log(box4Win);
    });

    $("#form5").submit(function(event) {
      event.preventDefault();
      text5 = parseInt($("input#text5").val());
      if (isCorrect(text5, box5.answer)) {
        console.log(isCorrect(text5, box5.answer));
        $("input#text5").addClass("right");
        newSquare.totalCorrect ++;
        box5.full = true;
        newSquare.numFilled ++;
        if ((newSquare.totalCorrect === 9) && (newSquare.numFilled === 9)) {
          $("#win-message").text("Victory!");
        };
        console.log(newSquare.totalCorrect);
      } else {
        console.log(isCorrect(text5, box5.answer));
        $("input#text5").addClass("wrong");
        $("#text5").val("");
      };
      var box5Win = isCorrect(text5, box5.answer);
      // return newSquare.totalCorrect;
      console.log(box5Win);
    });

    $("#form6").submit(function(event) {
      event.preventDefault();
      text6 = parseInt($("input#text6").val());
      if (isCorrect(text6, box6.answer)) {
        console.log(isCorrect(text6, box6.answer));
        $("input#text6").addClass("right");
        newSquare.totalCorrect ++;
        box6.full = true;
        newSquare.numFilled ++;
        if ((newSquare.totalCorrect === 9) && (newSquare.numFilled === 9)) {
          $("#win-message").text("Victory!");
        };
        console.log(newSquare.totalCorrect);
      } else {
        console.log(isCorrect(text6, box6.answer));
        $("input#text6").addClass("wrong");
        $("#text6").val("");
      };
      var box6Win = isCorrect(text6, box6.answer);
      // return newSquare.totalCorrect;
      console.log(box6Win);
    });

    $("#form7").submit(function(event) {
      event.preventDefault();
      text7 = parseInt($("input#text7").val());
      if (isCorrect(text7, box7.answer)) {
        console.log(isCorrect(text7, box7.answer));
        $("input#text7").addClass("right");
        newSquare.totalCorrect ++;
        box7.full = true;
        newSquare.numFilled ++;
        if ((newSquare.totalCorrect === 9) && (newSquare.numFilled === 9)) {
          $("#win-message").text("Victory!");
        };
        console.log(newSquare.totalCorrect);
      } else {
        console.log(isCorrect(text7, box7.answer));
        $("input#text7").addClass("wrong");
        $("#text7").val("");
      };
      var box7Win = isCorrect(text7, box7.answer);
      // return newSquare.totalCorrect;
      console.log(box7Win);
    });

    $("#form8").submit(function(event) {
      event.preventDefault();
      text8 = parseInt($("input#text8").val());
      if (isCorrect(text8, box8.answer)) {
        console.log(isCorrect(text8, box8.answer));
        $("input#text8").addClass("right");
        newSquare.totalCorrect ++;
        box8.full = true;
        newSquare.numFilled ++;
        if ((newSquare.totalCorrect === 9) && (newSquare.numFilled === 9)) {
          $("#win-message").text("Victory!");
        };
        console.log(newSquare.totalCorrect);
      } else {
        console.log(isCorrect(text8, box8.answer));
        $("input#text8").addClass("wrong");
        $("#text8").val("");
      };
      var box8Win = isCorrect(text8, box8.answer);
      // return newSquare.totalCorrect;
      console.log(box8Win);
    });

    $("#form9").submit(function(event) {
      event.preventDefault();
      text9 = parseInt($("input#text9").val());
      if (isCorrect(text9, box9.answer)) {
        console.log(isCorrect(text9, box9.answer));
        $("input#text9").addClass("right");
        newSquare.totalCorrect ++;
        box9.full = true;
        newSquare.numFilled ++;
        if ((newSquare.totalCorrect === 9) && (newSquare.numFilled === 9)) {
          $("#win-message").text("Victory!");
        };
        console.log(newSquare.totalCorrect);
      } else {
        console.log(isCorrect(text9, box9.answer));
        $("input#text9").addClass("wrong");
        $("#text9").val("");
      };
      var box9Win = isCorrect(text9, box9.answer);
      // return newSquare.totalCorrect;
      console.log(box9Win);
    });

    // console.log(newSquare.boxes.box2.val);
    // console.log(newSquare["boxes"]["box2"]["val"]);
  // } else if (newSquare.totalCorrect === 9) {
  // }
  // while (newSquare.victory()) {
  // };
  // var winner = (newSquare.victory());
  // console.log(newSquare.victory());
  // if (winner) {
  //   $("#win-message").text("Victory!");
  // };
  // };
});
