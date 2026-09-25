export const questions = [
  {
    id: 1,
    category: "React",
    difficulty: "Easy",
    question: "What is the Virtual DOM in React?",
    options: [
      "A copy of the browser",
      "A lightweight representation of the UI",
      "A database used by React",
      "A CSS rendering engine"
    ],
    answer: 1,
    explanation:
      "The Virtual DOM is a lightweight JavaScript representation of the UI. React compares changes and updates the real DOM efficiently."
  },
  {
    id: 2,
    category: "JavaScript",
    difficulty: "Medium",
    question: "What is the purpose of a closure in JavaScript?",
    options: [
      "To create CSS classes",
      "To preserve access to an outer function's variables",
      "To remove an object",
      "To stop asynchronous code"
    ],
    answer: 1,
    explanation:
      "A closure allows a function to retain access to variables from its lexical scope even after the outer function has finished."
  },
  {
    id: 3,
    category: "React",
    difficulty: "Medium",
    question: "Why is useEffect commonly used in React?",
    options: [
      "For side effects",
      "For writing CSS",
      "For declaring routes only",
      "For creating HTML files"
    ],
    answer: 0,
    explanation:
      "useEffect is used for side effects such as data fetching, subscriptions, timers, and synchronizing with external systems."
  },
  {
    id: 4,
    category: "HR",
    difficulty: "Easy",
    question: "What is a good approach when answering 'Tell me about yourself'?",
    options: [
      "Tell your entire life story",
      "Give a concise professional introduction",
      "Only state your name",
      "Avoid mentioning skills"
    ],
    answer: 1,
    explanation:
      "A concise answer should cover your current background, relevant skills, projects, and what role you are targeting."
  }
];
