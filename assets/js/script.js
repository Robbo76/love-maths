
document.addEventListener("DOMContentLoaded", function() {
      let buttons = document.getElementsByTagName("button");

      for (let button of buttons) {
          button.addEventListener("click", function() {
              if (this.getAttribute("data-type") == "submit") {
                  alert("You clicked Submit!");
                    } else {
                        let gameType = this.getAttribute("data-type");
                        alert(`You clicked ${gameType}`);

                    }
          })
      }
})

/**
 * The main game "loop", called when the script is first loaded 
 * and after the user's answer has benn processed 
 */
function runGame() {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer(params) {
    
}

function calculateCorrectAnswer(params) {
    name
}

function incrementScore(params) {
    name
}

function incrementWrongAnswer(params) {
    name
}

function displayAdditionQuestion(params) {
    name
}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(params) {
    
}