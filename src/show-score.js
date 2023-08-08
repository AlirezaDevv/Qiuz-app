

function showScore() {
    resetState();
    question.innerHTML = `Your Score is ${score} of ${questions.length} `;
  
    next.innerHTML = "play again";
    next.style.display = "block";
  }