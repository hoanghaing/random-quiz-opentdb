import { useState } from 'react';
import Answer from '../Answer/Answer';
import {
  TypeQuestion
} from '../../types'
import './Question.css';
import { useAtom } from 'jotai';
import { questionsAtom, choicesAtom } from '../../stores';

function Question(props: TypeQuestion) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [choices, setChoices] = useAtom(choicesAtom)
  const [questions, ] = useAtom(questionsAtom);

  const handleAnswerClick = (index: number) => {
    if (props.blockClick) return;
    setSelectedAnswer(index);
    const updatedChoices = { ...choices };
    updatedChoices[`${props?.questionIndex}`] = index;
    setChoices(updatedChoices)
  };

  return (
    <div className='question-container'>
      <span className='question-title'>
        {
          props.question ? props.question : ''
        }
      </span>
      <div className="answer-group">
        {props.answers?.map((answer, index) => (
          (<Answer
            key={index}
            text={answer}
            isSelected={selectedAnswer === index || props?.submittedAnswers && props?.submittedAnswers[props.questionIndex] === index}
            isDanger={props?.submittedAnswers && answer == questions[props.questionIndex].correct_answer}
            onClick={() => handleAnswerClick(index)}
          />
          )
        ))}
      </div>
    </div>
  )
}

export default Question
