var words = [
    "hello",
    "picture",
    "lion",
    "aardvark",
    "angst",
    "bagpipes",
    "banjo",
    "croquet",
    "crypt",
    "fervid",
    "fishhook",
    "fjord",
    "fractal",
    "gazebo",
    "gypsy",
    "haiku",
    "haphazard",
    "hyphen",
    "ivory",
    "jinx",
    "jukebox",
    "kayak",
    "kiosk",
    "klutz",
    "numbskull",
    "ostracize",
    "phlegm",
    "pixel",
    "polka",
    "quip",
    "rhythmic",
    "rogue",
    "sphinx",
    "swivel",
    "twelfth",
    "turtle",
    "unzip",
    "waxy",
    "wildebeest",
    "yacht",
    "zealous",
    "zombie"
  ];
  
  var chosen;
  var chosenArray = [];
  var wronglist = " 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ * ) - + = ] | > < ` ~ ? { \ _ (  } [ /  ";
  var guesses_left;
  var wrongArray = [];
  
  function Uppp() {
      var x = document.getElementById("letter");
      x.value = x.value.toUpperCase();
  }
  function chooseRandomWord() {
    chosen = words[Math.floor(Math.random() * words.length)];
    console.log(chosen);
    var result = [];
    for (var i = 0; i < chosen.length; i++) {
      result.push("_ ");
    }
    chosenArray = result;
    guesses_left = Math.round(chosen.length / 2 + chosen.length);
    document.getElementById("guesses-left").innerHTML = guesses_left;
    appendChosenArrayToDOM(result);
  }
  
  function processLetter() {
    var letter = (document.getElementById("letter").value).toLowerCase();
    var index = chosen.indexOf(letter);
    if (chosen.indexOf(letter) > -1) {
      addChosenLetter(letter, index);
    } else if (wronglist.indexOf(letter) >= 0) {
      wronglist += letter + " ";
      return;
    } else {
      wronglist += letter + " ";
      addWrongLetter(letter);
    }
    document.getElementById("letter").value = null;
  }
  
  function addChosenLetter(letter, index) {
    chosenArray[index] = letter;
    appendChosenArrayToDOM(chosenArray);
    if (chosenArray.indexOf("_ ") === -1) {
      var game = document.getElementById("game");
      game.innerHTML = "";
      var game_result = document.getElementById("game_result");
      game_result.innerHTML = "Congratulations! You won!";
    }
  }
  
  function addWrongLetter(letter) {
    wrongArray.push(letter);
    var element = document.getElementById("game_result");
    element.innerHTML = wrongArray.join(", ");
    guesses_left -= 1;
    document.getElementById("guesses-left").innerHTML = guesses_left;
    nextStepHanging();
  }
  
  function appendChosenArrayToDOM(array) {
    var element = document.getElementById("chosen-word");
    element.innerHTML = array.join("");
  }
  
  function nextStepHanging() {
    if (guesses_left === 0) {
      var game = document.getElementById("game");
      game.innerHTML = "";
      var game_result = document.getElementById("game_result");
      game_result.innerHTML = "You lost. The word was: " + chosen;
    }
  }
  
  chooseRandomWord();