export interface CreateQuestionsParams {
  amount: number;
  categoryId: string;
  difficultyLevel: string;
}

export interface ResponseData {
  results: ResponseQuestionItemType[];
  response_code: number
}

export interface ResponseQuestionItemType {
  type: string,
  difficulty: string,
  category: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

export interface ConvertedQuizItem {
  question: string;
  correct_answer: string;
  answers: string[];
}