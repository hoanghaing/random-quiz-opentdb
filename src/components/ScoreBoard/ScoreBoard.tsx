import {
  NUM_OF_QUESTION
} from '../../constants';
import './ScoreBoard.css';
import { useAtom } from 'jotai';
import {
  choicesAtom,
  questionsAtom
} from '../../stores';
import { useState, useEffect } from 'react';

function ScoreBoard() {
  const [choices, ] = useAtom(choicesAtom)
  const [questions, ] = useAtom(questionsAtom);
  const [correct, setCorrect] = useState(0);
  
  useEffect(() => {
    let correctCount = 0;
    questions.forEach((item, index) => {
      if (item.correct_answer === item.answers[choices[index]]) {
        correctCount += 1;
      }
    });
    setCorrect(correctCount);
  }, [questions, choices]);

  const getClassName = () => {
    let elementClass = 'score-span';
    if (correct > 3) elementClass += ' success';
    else if (correct > 1) elementClass += ' warning';
    else elementClass += ' danger';
    return elementClass;
  };
  
  return (
    <span className={getClassName()}>
      {`You score ${correct} out of ${NUM_OF_QUESTION}`}
    </span>
  )

}

export default ScoreBoard
