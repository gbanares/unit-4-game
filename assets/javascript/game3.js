var counter = 0;
var wins = 0;
var losses = 0;



var newGame = function() {
    var targetNumber = Math.floor(Math.random() * (120-19)+19);
    // console.log(targetNumber);
    $("#bushelCount").text("Bushel Count: " + targetNumber)
    $("#apples").empty
    // Step 2: create random numbers for each apple (4 values)
    var apple1 = Math.floor(Math.random() * (12-1) + 1);
    var apple2 = Math.floor(Math.random() * (12-1) + 1);
    var apple3 = Math.floor(Math.random() * (12-1) + 1);
    var apple4 = Math.floor(Math.random() * (12-1) + 1);
    // console.log(apple1, apple2, apple3, apple4);
    
    
    // Step 3: create multiple apples each with their own unique value
    var numberOptions = [apple1, apple2, apple3, apple4];
    
    // Step 4: create a for loop to create apples for every numberOption.
    for (var i = 0; i < numberOptions.length; i++) {
        // For each iteration, we will create an imageApple
        var imageApple = $("<img>");
        // each apple is ".apple-image".
        imageApple.addClass("apple-image");
        // link to the apple image
        imageApple.attr("src","assets/images/apple.png");
        // give imageApple a data attribute called data-appleValue (equal to array value).
        imageApple.attr("data-applevalue", numberOptions[i]);
        // add each apple image to the page
        $("#apples").append(imageApple);
    }
    console.log(apple1, apple2, apple3, apple4);
    $(".apple-image").on("click", function () {

        var appleValue = ($(this).attr("data-applevalue"));
        appleValue = parseInt(appleValue);
        // add the apple count to the counter (a global variable)
        counter += appleValue;
        $("#userApples").html("Number of Apples collected: " + counter);
    // alert("New score: " + counter);
    if (counter === targetNumber) {
        wins++;
        $("#wins").html("Game Wins: " + wins);
        if (confirm("You won! Play again?")) {
            newGame();
        } else {
            alert("Goodbye!");
        }
        
    }
    else if (counter >= targetNumber) {
        alert("You lose!!");
        losses++;
        $("#losses").html("Game Losses: " + losses);
        if (confirm("You lost! Play again?")) {
            newGame();
        } else {
            alert("Bye!");
        }
    }
    });
}
// Step 1: create a target number of apples in bushel

// the value of the targetNumber should be between 19 - 120 see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random



// Step 5: click events for apples
newGame();

// var targetNumber = Math.floor(Math.random() * (120-19)+19);
//     console.log(targetNumber);
//     $("#bushelCount").text("Bushel Count: "+targetNumber);

