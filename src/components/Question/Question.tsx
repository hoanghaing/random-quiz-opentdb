import { useState } from 'react';
import Answer from '../Answer/Answer';
import {
  TypeQuestion
} from '../../types'
import './Question.css';
import { useAtom } from 'jotai';
import { answersAtom } from '../../stores';

function Question(props: TypeQuestion) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useAtom(answersAtom)

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index);
    const updatedAnswers = { ...answers };
    updatedAnswers[`${props?.questionIndex}`] = index;
    setAnswers(updatedAnswers)
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
          <Answer
            key={index}
            text={answer}
            isSelected={selectedAnswer === index}
            // isDanger={dangerAnswer === index}
            onClick={() => handleAnswerClick(index)}
          />
        ))}
      </div>
      {/* { JSON.stringify(answers) } */}
    </div>
  )
}

export default Question
