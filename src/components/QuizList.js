import QuizItem from './QuizItem'
import Card from '../UI/Card';
import classes from './Quizlist.module.css'
//const i = 0;
function Quizlist(props){
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
  const  quizes =props.quiz
const quizItem =quizes.map((quiz, index)=>(
    <section className={classes.quizes}><Card> <QuizItem
    id = {index+1}
    question ={quiz.question}
    correctAns={quiz.correct_answer}
    options ={shuffle([...quiz.incorrect_answers, quiz.correct_answer])}
    ></QuizItem> </Card>
    </section>
));

return(
        <ul>
    {quizItem}
    </ul>

)

}
export default Quizlist;