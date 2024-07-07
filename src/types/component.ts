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


export type ChoicesSelections = {
  [key: number]: number;
};

export type TypeQuestion = {
  questionIndex: number,
  question: string,
  answers: string[]
  submittedAnswers?: ChoicesSelections
  blockClick?: boolean
}



