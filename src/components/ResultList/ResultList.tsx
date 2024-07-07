import { Button } from '@mui/material'
import ScoreBoard from '../ScoreBoard/ScoreBoard'
import Question from '../Question/Question'
import './ResultList.css'
import { questionsAtom, choicesAtom } from '../../stores';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

function ResultList() {
  const [questions, clearQuestions] = useAtom(questionsAtom);
  const [submittedAnswers, clearChoices] = useAtom(choicesAtom);
  const navigate = useNavigate();
  
  const handleCreateNewQuestion = () => {
    clearQuestions([]);
    clearChoices({});
    navigate('/');
  }

  const renderResultList = () => {
    const renderList: React.ReactNode[] = [];
    questions.forEach((item, index) => {
      renderList.push(
        <Question
          key={`question-${index}`}
          questionIndex={index}
          question={item.question}
          answers={item.answers}
          submittedAnswers={submittedAnswers}
          blockClick
        />
      )
    })
    return renderList;
  }

  const renderScoreList = () => {
    return questions.length > 0 && <ScoreBoard></ScoreBoard>
  }

  const renderCreateQuestionButton = () => {
    return <Button
      className="submit-button"
      variant="contained"
      fullWidth={true}
      disableElevation
      onClick={handleCreateNewQuestion}
    >
      Create a new quiz 
    </Button>
  }

  return (
    <>
      {renderResultList()}
      {renderScoreList()}
      {renderCreateQuestionButton()}
    </>
  )
}

export default ResultList
