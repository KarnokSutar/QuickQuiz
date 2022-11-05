import Card from '../UI/Card';
import classes from './Quizlist.module.css'
import { useContext } from 'react';
import QuizContext from '../store/quiz-context';
import AnswersItem from './AnswersItem';
import FabButton from './FabButton';
import { useNavigate } from 'react-router-dom'


function AnswersList() {
  const quizCtx = useContext(QuizContext);
  console.log(quizCtx.questions);
  const navigate = useNavigate()
  const ansItem = quizCtx.questions.map((quiz) => (
    <section className={classes.quizes}><Card> <AnswersItem
      id={quiz.id}
      question={quiz.question}
      correctAns={quiz.correct_answer}
      options={quiz.options}
    ></AnswersItem> </Card>
    </section>
  ))
  function returnToHomeHandler() {
    navigate('/')
  }
  console.log(quizCtx.questions);
  return (
    <div className={classes.container}>
      {quizCtx.quizLoading ? <div className={classes.loader}></div> : <ul>{ansItem}</ul>}
      <FabButton onClick={returnToHomeHandler} />
    </div>

  )

}
export default AnswersList;