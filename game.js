// alert("javascript test");

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

$(document).on("keypress", start);

$(".start").on("click", start);

function nextSequence() {
    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random()*4);
       
    // console.log(gamePattern);
    var randomChosenColour = buttonColours[randomNumber];
    // console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern);

    // $("#"+randomChosenColour);
    // console.log($("#"+randomChosenColour));
    $("#"+randomChosenColour).fadeOut().fadeIn();

    playSound(randomChosenColour);

    level += 1;

    $("h1").text("Level " + level);
}


$(".btn").on("click", function(event) {
    // console.log(event.target.id);
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(event.target.id);
    animatePress(event.target.id);
    // console.log(userClickedPattern);

    checkAnswer(userClickedPattern.length - 1);
});


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){$("#" + currentColour).removeClass("pressed");}, 100);
}

function start () {
    $("h1").text("Level " + level);
    if (level === 0) {
        nextSequence();
    } else {
        console.log(event.key);
    }
}

function checkAnswer (currentLevel) {
    console.log(gamePattern);
    console.log(userClickedPattern);
    console.log(currentLevel);
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("correct");
        
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence, 1000);
        } 
    } else {
        console.log("wrong choice");
        $("body").addClass("game-over");
        var ohNo = new Audio("sounds/wrong.mp3");
        ohNo.play();
        setTimeout(function(){$("body").removeClass("game-over");}, 100);
        $("h1").text("GAME OVER!\n\nPress any key to play again.");   
        startOver();     
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
}
