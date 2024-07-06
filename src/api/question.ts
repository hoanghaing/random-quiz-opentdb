import axios from 'axios'
import {
  CreateQuestionsParams,
  ResponseData
} from '../types'
const BASE_URL = "https://opentdb.com/api.php"
// https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple

const createQuestions = async ({ amount, categoryId, difficultyLevel }: CreateQuestionsParams): Promise<ResponseData> => {
  try {
    const response = await axios.get<ResponseData>(`${BASE_URL}?amount=${amount}&category=${categoryId}&difficulty=${difficultyLevel}&type=multiple`)
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};

export {
  createQuestions
};