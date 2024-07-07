export type CategoryItem = {
  id: number,
  name: string
}

export type DifficultyItem = {
  value: string,
  title: string,
}

export type PageTitleType = {
  title: string,
}

export interface AnswerProps {
  text: string;
  isSelected?: boolean;
  isDanger?: boolean;
  onClick: () => void;
}

export type TypeQuestion = {
  questionIndex: number,
  question: string,
  answers: string[]
}

export type AnswerSelections = {
  [key: number]: number;
};


