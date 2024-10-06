function checkAnswer() {
    const feedback = document.getElementById("feedback");
    const correctAnswer = "4";
    const userAnswer = document.querySelector('[name="quiz"]:checked').value;
    console.log(userAnswer);
    if (userAnswer !== correctAnswer) {
        feedback.textContent = "That's incorrect. Try again!"
    } else {
        feedback.textContent = "Correct! Well done."
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer)