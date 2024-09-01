// Adding Questions

var questions = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 2,
  },
  {
   question: "What is the capital of Italy?",
   choices: [Rome, Milan, Naples, Venice],
   correctAnswer: 1,
  },
  {
   question: "What is the capital of Spain?",
   choices: [Barcelona, Madrid, Valencia, Seville],
   correctAnswer: 2,
  },
  {question: "What is the capital of Germany?",
   choices: [Munich, Berlin, Frankfurt, Hamburg],
   correctAnswer: 2,
  },
  {
   question: "What is the capital of Russia?",
   choices: [Moscow, Saint-Petersburg, Kazan, Novosibirsk],
   correctAnswer: 1,
  },
  {
   question: "What is the capital of the United Kingdom?",
   choices: [London, Edinburgh, Birmingham, Manchester],
   correctAnswer: 1,
  },
  {
   questionuestion: "What is the capital of China?",
   choices: [Beijing, Shanghai, Guangzhou, Shenzhen],
   correctAnswer: 1,
  },
  {
   questionuestion: "What is the capital of Japan?",
   choices: [Tokyo, Osaka, Kyoto, Nagoya],
   correctAnswer: 1,
  },
  {
    question: "What is the capital of India?",
   choices: [Delhi, Mumbai, Kolkata, Chennai],
   correctAnswer: 1,
  },
];

let currentQuestionIndex = 0;
let score = 0;
