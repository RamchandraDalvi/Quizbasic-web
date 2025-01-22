import './App.css'
import { useState, useEffect } from 'react';
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';
function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0");
  const [username, setUsername] = useState(null)

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answer: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answer: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answer: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];


  const moneypyramid = [
    { id: 1, amount: "10,000" },
    { id: 2, amount: "40,000" },
    { id: 3, amount: "80,000" },
    { id: 4, amount: "1,20,000" },
    { id: 5, amount: "3,20,000" },
    { id: 6, amount: "6,20,000" },
    { id: 7, amount: "12,60,000" },
    { id: 8, amount: "25,00,000" },
    { id: 9, amount: "50,00,000" },
    { id: 10, amount: "75,00,000" },
    { id: 11, amount: "1,00,00,00" }
  ].reverse();

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneypyramid.find((m) => m.id === questionNumber - 1).amount)
  }, [moneypyramid, questionNumber])

  return (
    <div className="App">
      {username ? (
        <>
          <div className="main">
            {stop ? (<h1 className="endtext">You earned: {earned}</h1>) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop}
                      questionNumber={questionNumber}
                    /></div>
                </div>
                <div className="bottom">
                  <Trivia
                    setStop={setStop}
                    setQuestionNumber={setQuestionNumber}
                    data={data}
                    questionNumber={questionNumber}
                  /></div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className='moneyList'>
              {moneypyramid.map((m) => (
                <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className='moneyListItemNumber'>{m.id}.</span>
                  <span className='moneyListItemAmount'>{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>

      ) : <Start setUsername={setUsername}/>}

    </div>
  );
}

export default App;
