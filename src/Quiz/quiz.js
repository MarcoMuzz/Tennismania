class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }
  let questions = [
    new Question("Quale impugnatura è maggiormente utilizzata dai professionisti per il diritto? ", ["Eastern", "Semi-Eastern", "Western", "Semi-Western"], "Semi-Western"),
    new Question("Quale tra questi tornei non fa parte della categoria Grande Slam?", ["Wimbledon","US Open", "Miami Open", "Roland Garros"], "Miami Open"),
    new Question("Quale tra questi colpi da avvio alla partita?", ["Servizio","Lob", "Rovescio", "Diritto"], "Servizio"),
    new Question("Di cosa è rivestita una pallina da tennis?", ["Gomma","Pietra", "Lana", "Feltro"], "Feltro"),
    new Question("Quale tra queste qualità non è  imprescindibile per una buona prestazione?", ["Forza", "Resistenza", "Velocità", "Elasticità"], "Elasticità"),
    new Question("Quale tra le seguenti impugnature è indicata per un rovescio tagliato?", ["Continental", "A Due Mani", "Eastern", "Western"], "Continental"),
    new Question("Su quale superficie si giocano le partite di Wimbledon?", ["Mateco", "Erba", "Terra Battuta", "Cemento"], "Erba"),
    new Question("In quale mese si svolge il Roland Garros?", ["Gennaio", "Dicembre", "Maggio", "Settembre"], "Maggio"),
    new Question("Quale evento è soprannominato Happy Slam?", ["Australian Open", "Wimbledon", "Internazionali BNL d'Italia", "Mercedes Cup"], "Australian Open") 
  ];
  
  console.log(questions);
  
  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
      }
      this.currentQuestionIndex++;
    }
    hasEnded() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  }
  
  // Regroup all  functions relative to the App Display
  const display = {
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },
    endQuiz: function() {
      endQuizHTML = `
        <h1>Quiz Terminato !</h1>
        <h3>Il tuo punteggio finale è: ${quiz.score} / ${quiz.questions.length}</h3>`;
      this.elementShown("quiz", endQuizHTML);
    },
    question: function() {
      this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
      let choices = quiz.getCurrentQuestion().choices;
  
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
      // display choices and handle guess
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", "Domanda n° " + currentQuestionNumber + "/" + quiz.questions.length);
    },
  };
  
  // Game logic
  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }
  // Create Quiz
  let quiz = new Quiz(questions);
  quizApp();
  
  console.log(quiz);
  
  