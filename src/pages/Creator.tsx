import PageTitle from '../components/PageTitle';
import QuestionForm from '../components/QuestionForm/QuestionForm';
import QuestionList from '../components/QuestionList/QuestionList';

function Creator() {

  return (
    <>
      <PageTitle title={'Quiz Maker'}/>
      <QuestionForm />
      <QuestionList />
    </>
  )
}

export default Creator
