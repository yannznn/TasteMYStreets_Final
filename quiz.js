    const quizData = [
      {
        question: "What is not part of the Gurney Drive Food Court Signature Dishes?",
        options: [
          "Cendol",
          "Nasi Lemak",
          "Char Kway Teow",
          "Assam Laksa"
        ],
        correct: 1
      },
      {
        question: "Whats feature makes SS2 Wai Sek Kai a unique place to visit?",
        options: [
          "Affordable",
          "Premium",
          "Luxury",
          "Pricy"
        ],
        correct: 0
      },
      {
        question: "What isnt part of the Malaysian cuisines?",
        options: [
          "Nasi Kerabu",
          "Nasi Kukus",
          "Hokkien Mee",
          "Char Koay Teow"
        ],
        correct: 1
      },
            {
        question: "What is not part of the local Delicacies in Johor?",
        options: [
          "Laksa Johor",
          "Otak-otak",
          "Murtabak",
		  "Mee Rebus Johor"
        ],
        correct: 2
      },
      {
        question: "Which variety of Laksa does not exist?",
        options: [
          "Laksa Sarawak",
          "Laksa Perlis",
          "Assam Laksa",
          "Laksa Penang"
        ],
        correct: 3
      }
    ];

    // DOM elements
    const welcomeScreen = document.querySelector('.detail-box');
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const questionNumber = document.getElementById('question-number');
    const scoreDisplay = document.getElementById('score');
    const finalScore = document.getElementById('final-score');
    const totalQuestions = document.getElementById('total-questions');
    const correctAnswers = document.getElementById('correct-answers');
    const incorrectAnswers = document.getElementById('incorrect-answers');
    const resultMessage = document.getElementById('result-message');
    const progressBar = document.getElementById('progress');
    const storageStatus = document.getElementById('storage-status');

    // Quiz state
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];

    // Initialize the quiz
    function initQuiz() {
      // Check if quiz was already in progress in session storage
      const quizStarted = sessionStorage.getItem('quizStarted');
      
      if (quizStarted === 'true') {
        // Load state from session storage
        currentQuestionIndex = parseInt(sessionStorage.getItem('currentQuestionIndex')) || 0;
        score = parseInt(sessionStorage.getItem('score')) || 0;
        userAnswers = JSON.parse(sessionStorage.getItem('userAnswers') || '[]');
        
        // If we've completed all questions, show results
        if (currentQuestionIndex >= quizData.length) {
          showResults();
          return;
        }
        
        // Otherwise continue the quiz
        showQuestion(currentQuestionIndex);
        showQuizScreen();
      }
      
      updateStorageStatus();
    }

    // Start the quiz
    function startQuiz() {
      resetQuiz();
      showQuestion(currentQuestionIndex);
      showQuizScreen();
      updateStorageStatus();
    }

    // Reset quiz state
    function resetQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      userAnswers = [];
      
      // Initialize session storage
      sessionStorage.setItem('quizStarted', 'true');
      sessionStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
      sessionStorage.setItem('score', score.toString());
      sessionStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    }

    // Display a question
    function showQuestion(index) {
      const question = quizData[index];
      questionText.textContent = question.question;
      questionNumber.textContent = `Question ${index + 1}/${quizData.length}`;
      scoreDisplay.textContent = `Score: ${score}`;
      
      // Update progress bar
      progressBar.style.width = `${((index) / quizData.length) * 100}%`;
      
      // Clear previous options
      optionsContainer.innerHTML = '';
      
      // Add new options
      question.options.forEach((option, i) => {
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
        optionElement.classList.add('option');
        
        // Check if this option was previously selected
        if (userAnswers[index] === i) {
          optionElement.classList.add('selected');
        }
        
        optionElement.addEventListener('click', () => selectOption(i));
        optionsContainer.appendChild(optionElement);
      });
      
      // Show/hide next button based on whether an option is selected
      nextBtn.style.display = userAnswers[index] !== undefined ? 'block' : 'none';
    }

    // Handle option selection
    function selectOption(optionIndex) {
      // Mark the selected option
      const options = document.querySelectorAll('.option');
      options.forEach(option => option.classList.remove('selected'));
      options[optionIndex].classList.add('selected');
      
      // Record the user's answer
      userAnswers[currentQuestionIndex] = optionIndex;
      
      // Enable the next button
      nextBtn.style.display = 'block';
      
      // Update session storage
      sessionStorage.setItem('userAnswers', JSON.stringify(userAnswers));
      updateStorageStatus();
    }

    // Move to the next question
    function nextQuestion() {
      // Check if the answer is correct
      const currentQuestion = quizData[currentQuestionIndex];
      if (userAnswers[currentQuestionIndex] === currentQuestion.correct) {
        score++;
        sessionStorage.setItem('score', score.toString());
        scoreDisplay.textContent = `Score: ${score}`;
      }
      
      // Move to next question
      currentQuestionIndex++;
      sessionStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
      
      // Check if we've reached the end of the quiz
      if (currentQuestionIndex >= quizData.length) {
        showResults();
      } else {
        showQuestion(currentQuestionIndex);
      }
      
      updateStorageStatus();
    }

    // Show the results screen
    function showResults() {
      // Calculate results
      const correctCount = score;
      const incorrectCount = quizData.length - score;
      
      // Update results screen
      finalScore.textContent = score;
      totalQuestions.textContent = quizData.length;
      correctAnswers.textContent = correctCount;
      incorrectAnswers.textContent = incorrectCount;
      
      // Set result message based on score
      if (score === quizData.length) {
        resultMessage.textContent = "Perfect! You're a Malaysian street food expert!";
      } else if (score >= quizData.length * 0.7) {
        resultMessage.textContent = "Great job! You know your Malaysian street food well!";
      } else if (score >= quizData.length * 0.5) {
        resultMessage.textContent = "Good effort! You know some Malaysian street food.";
      } else {
        resultMessage.textContent = "Keep learning about Malaysian street food!";
      }
      
      // Show results screen
      resultsScreen.classList.add('active');
      quizScreen.classList.remove('active');
      welcomeScreen.style.display = 'none';
      
      // Clear session storage
      sessionStorage.removeItem('quizStarted');
      sessionStorage.removeItem('currentQuestionIndex');
      sessionStorage.removeItem('score');
      sessionStorage.removeItem('userAnswers');
      
      updateStorageStatus();
    }

    // Show quiz screen
    function showQuizScreen() {
      quizScreen.classList.add('active');
      welcomeScreen.style.display = 'none';
      resultsScreen.classList.remove('active');
    }

    // Update session storage status display
    function updateStorageStatus() {
      const quizStarted = sessionStorage.getItem('quizStarted');
      
      if (quizStarted === 'true') {
        const currentIndex = sessionStorage.getItem('currentQuestionIndex');
        const score = sessionStorage.getItem('score');
        const answers = JSON.parse(sessionStorage.getItem('userAnswers') || '[]');
        
        storageStatus.textContent = 
          `Session Storage: Question ${parseInt(currentIndex) + 1}, Score: ${score}, Answers: [${answers.join(', ')}]`;
      } else {
        storageStatus.textContent = 'Session Storage: No data stored';
      }
    }

    // Event listeners
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', startQuiz);

    // Initialize the quiz when the page loads
    document.addEventListener('DOMContentLoaded', initQuiz);