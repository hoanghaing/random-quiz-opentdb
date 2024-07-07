import { Button } from '@mui/material';
import Question from '../Question/Question'
import { questionsAtom, answersAtom } from '../../stores';
import { useAtom } from 'jotai';
import {
  NUM_OF_QUESTION
} from '../../constants'
import './QuestionList.css';

function QuestionList() {
  const [questions,] = useAtom(questionsAtom);
  const [answers,] = useAtom(answersAtom);

  const renderQuestionList = () => {
    const renderList: React.ReactNode[] = [];

    questions.forEach((item, index) => {
      renderList.push(
        <Question
          key={`question-${index}`}
          questionIndex={index}
          question={item.question}
          answers={item.answers}
        />
      )
    })
    return renderList;
  }
  const renderSubmitButton = () => {
    return Object.keys(answers).length === NUM_OF_QUESTION && <Button className="submit-button" variant="contained" fullWidth={true} disableElevation>
      Submit
    </Button>
  }
  return (
    <>
      {renderQuestionList()}
      {renderSubmitButton()}
    </>
  )
}

export default QuestionList
