function checkAnswer() {
    const feedback = document.getElementById("feedback");
    const correctAnswer = "4";
    const userAnswer = document.querySelector('[name="quiz"]:checked').value;
    console.log(userAnswer);
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done."
    } else {
        feedback.textContent = "That's incorrect. Try again!"
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer)