


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

function runGame(params) {
    
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