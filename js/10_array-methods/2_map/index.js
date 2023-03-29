console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map((card) => {
  console.log(card["answer"]);
  return card["answer"].toLowerCase();
});
const questionsAndAnswersTogether = cards.map((card) => {
  console.log(`${card["question"]}:  ${card["answer"]}`);
  return `${card["question"]}:  ${card["answer"]}`;
});

const questionAndAnswer = cards.map((card) => {
  console.log(`question: ${card["question"]}, answer:${card["answer"]}`);
  return `question: ${card["question"]}, answer:${card["answer"]}`;
});

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
