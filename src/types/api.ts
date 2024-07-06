export interface CreateQuestionsParams {
  amount: number;
  categoryId: string;
  difficultyLevel: string;
}

export interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface ResponseData {
  results: Question[];
  response_code: number
}