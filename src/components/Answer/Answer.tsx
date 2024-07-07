import {
  AnswerProps
} from '../../types'
import './Answer.css'

const Answer  = (props: AnswerProps) => {
  let className = 'answer';

  if (props.isSelected) {
    className += ' selected';
  } else if (props.isDanger) {
    className += ' danger';
  }

  return (
    <button className={className} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Answer;
