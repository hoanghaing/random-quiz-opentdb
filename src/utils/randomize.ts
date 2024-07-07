import {
  ResponseQuestionItemType,
  ConvertedQuizItem
} from '../types'
import { shuffle } from 'lodash';

     
export const randomizeAndGenerateQuestion = (response: ResponseQuestionItemType[]): ConvertedQuizItem[] => {
  return response.map(item => {
    const allAnswers = shuffle([item.correct_answer, ...item.incorrect_answers]);
    return {
      question: item.question,
      correct_answer: item.correct_answer,
      answers: allAnswers
    };
  });
}