export class QuestionsModel {
    categoryName: string;
    questions: [
      {question: string;
      options: [
        {option: string, correct: boolean},
        {option: string, correct: boolean},
        {option: string, correct: boolean},
        {option: string, correct: boolean}
      ]}
    ]
}
