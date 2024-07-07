import { atom } from "jotai";
import {
  ConvertedQuizItem
} from '../types';
export const questionsAtom = atom<ConvertedQuizItem[]>([]);