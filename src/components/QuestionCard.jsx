import { useEffect, useState } from "react";

function QuestionCard() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [data, setData] = useState({});
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    fetch("/data/questions.json")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      });
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-start">
      <QuestionBlock fetchData={data[questionNumber]} />
      <div className="my-4 h-24 w-full bg-slate-400">
        <AnswerBlock fetchData={data[questionNumber]} reveal={reveal} />
      </div>
      <div className="mt-24 flex w-10/12 flex-wrap justify-evenly">
        <button
          className="button"
          onClick={() => {
            if (questionNumber > 0) {
              setQuestionNumber(questionNumber - 1);
              setReveal(false);
            }
          }}
        >
          Previous Question
        </button>

        <button className="button" onClick={() => setReveal(!reveal)}>
          Click to reveal Answer
        </button>
        <button
          className="button"
          onClick={() => {
            if (data.length - 1 > questionNumber) {
              setQuestionNumber(questionNumber + 1);
              setReveal(false);
            }
          }}
        >
          Next Question
        </button>
      </div>
    </div>
  );
}

function QuestionBlock({ fetchData }) {
  if (!fetchData) {
    return null;
  }

  const arr = [];
  let str = "";

  for (let i = 0; i < fetchData.question.length; i++) {
    if (fetchData.question[i] === " ") {
      arr.push(str);
      str = "";
    } else if (i === fetchData.question.length - 1) {
      str += fetchData.question[i];
      arr.push(str);
      str = "";
    } else {
      str += fetchData.question[i];
    }
  }

  return (
    <ul className="flex h-32 w-full flex-row-reverse items-center justify-evenly bg-slate-700 px-2 py-8 font-arabic text-4xl tracking-wide text-white lg:py-28 lg:text-8xl">
      {arr.map((element, index) => (
        <li className="w-64 text-center" key={index}>
          {element}
        </li>
      ))}
    </ul>
  );
}

function AnswerBlock({ reveal, fetchData }) {
  if (!fetchData) {
    return null;
  }
  const answersObj = {
    1: "فِعْلٌ",
    2: "فَاعِلٌ",
    3: "مَفْعُوْلٌ بِهِ",
    4: "مَفْعُوْلٌ بِهِ ثَانٍ",
    5: "مَفْعُوْلٌ فِيْهِ",
    6: "مَفْعُوْلٌ مُطْلَقٌ",
    7: "مَفْعُوْلٌ لَهُ",
    8: "حَالٌ",
    9: "تَمْيِيْزٌ",
    10: "حَرْفُ الاسْتِثْنَاءِ",
    11: "مُسْتَثْنًى مِنَ الْفِاعِلِ",
    12: "حَرْفُ نَفْيٍ",
  };

  const answerArray = [];

  const data = fetchData.answer;

  data.forEach((item) => {
    for (let key in answersObj) {
      if (Number(key) === item) {
        answerArray.push(answersObj[key]);
      }
    }
  });

  return !reveal ? null : (
    <ul className="flex h-24 w-full items-center justify-evenly bg-slate-400 py-8 font-arabic text-xl text-zinc-200 lg:py-24 lg:text-6xl">
      {answerArray.reverse().map((element, index) => (
        <li className="w-64 text-center" key={index}>
          {element}
        </li>
      ))}
    </ul>
  );
}

export default QuestionCard;
export { QuestionBlock };
