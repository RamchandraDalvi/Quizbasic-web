import React, { useEffect, useState } from 'react'
import './Trivia.css'
import useSound from 'use-sound';
import correct from '../sounds/correct.mp3'
import play from '../sounds/play.mp3'
import wrong from '../sounds/wrong.mp3'

const Trivia = (props) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay])

  useEffect(() => {
    setQuestion(props.data[props.questionNumber - 1])
  }, [props.data, props.questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  }

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () => setClassName(a.correct ? "answer correct" : "answer wrong"))
    delay(6000, () => {
      if (a.correct) {
        correctAnswer();
        delay(1000, () => {
          props.setQuestionNumber((current) => current + 1);
          setSelectedAnswer(null);
          delay(1000,()=>{
            letsPlay();
          })
        })
      }
      else {
        wrongAnswer();
        delay(1000, () => {
          props.setStop(true);
        })
      }
    })
  }
 
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answer.map((a) => (
          <div className={selectedAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>{a.text}</div>
        ))}
      </div>
    </div>
  )
}

export default Trivia
