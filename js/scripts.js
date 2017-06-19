function Square(answer,squareSize) {
  this.answer = answer;
  this.squareSize = squareSize;
  this.solved = solved;
};

function Box(empty, userInput) {
  this.empty = empty;
  this.userInput = userInput;
}

answers3 = [8, 1, 6, 3, 5, 7, 4, 9, 2];

// answers3 = {text1: 8, text2: 1, text3: 6, text4: 3, text5: 5, text6: 7, text7: 4, text8: 9, text9: 2};


/////////////////////line in the sand/////////////////////////
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var text1 = $("input#text1").val();
  });

  $("#form2").submit(function(event) {
    event.preventDefault();
    var text2 = $("input#text2").val();
  });

  $("#form3").submit(function(event) {
    event.preventDefault();
    var text3 = $("input#text3").val();
  });

  $("#form4").submit(function(event) {
    event.preventDefault();
    var text4 = $("input#text4").val();
  });

  $("#form5").submit(function(event) {
    event.preventDefault();
    var text5 = $("input#text5").val();
  });

  $("#form6").submit(function(event) {
    event.preventDefault();
    var text6 = $("input#text6").val();
  });

  $("#form7").submit(function(event) {
    event.preventDefault();
    var text7 = $("input#text7").val();
  });

  $("#form8").submit(function(event) {
    event.preventDefault();
    var text8 = $("input#text8").val();
  });

  $("#form9").submit(function(event) {
    event.preventDefault();
    var text9 = $("input#text9").val();
  });
});
