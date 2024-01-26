import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Tarkeeb() {
  const [block, setBlock] = useState(Array(4).fill(0));
  const [questionNumber, setQuestionNumber] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/data/questions.json")
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }, []);

  if (!data[questionNumber]) {
    return <div>Loading...</div>;
  }

  function handleAnswerChecker() {
    answerChecker(block, data[questionNumber].answer, updateQuestionNumber);
  }

  const colors = [
    "#264653",
    "#e76f51",
    "#2a9d8f",
    "#e9c46a",
    "#f4a261",
    "#219ebc",
    "#8ecae6",
    "#023047",
    "#ffb703",
    "#fb8500",
    "#7678ed",
    "#a1c181",
  ];

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

  function handleDrag(e) {
    e.dataTransfer.setDragImage(new Image(), 0, 0);
    e.target.style.cursor = "grabbing";
  }

  function handleOnDragOver(e) {
    e.preventDefault();
  }

  function handleOnDrop(e, index) {
    const blockType = e.dataTransfer.getData("blockType");
    const blockArr = [...block];
    blockArr[index] = Number(blockType);
    setBlock(blockArr);

    e.target.innerHTML = answersObj[blockType];
    if (answersObj[blockType].length > 8) {
      e.target.style.fontSize = "20px";
      e.target.style.paddingTop = "4px";
    }
    if (answersObj[blockType].length > 20) {
      e.target.style.fontSize = "14px";
      e.target.style.paddingTop = "0px";
      e.target.style.fontWeight = "bold";
    }
  }

  function clearInput() {
    setBlock(Array(4).fill(0));
    document
      .querySelectorAll(".answer-block")
      .forEach((element) => (element.innerHTML = ""));
  }

  function updateQuestionNumber() {
    clearInput();
    setQuestionNumber(questionNumber + 1);
  }

  return (
    <div className="h-full w-full font-arabic">
      <div className="flex flex-col justify-around px-4 py-8 lg:px-16 lg:py-32">
        <TarkeebQuestionBlock fetchData={data[questionNumber]} />
        <div className="grid grid-flow-col">
          {data[questionNumber].answer.map((value, index) => (
            <div
              key={index}
              onTouchStart={(e) => handleTouchStart(e, index)}
              onTouchMove={(e) => handleTouchMove(e, index)}
              onDrop={(e) => handleOnDrop(e, index)}
              onDragOver={handleOnDragOver}
              className="answer-block mx-auto my-4 h-20 w-16 border-2 border-gray-900 bg-gray-100 py-2 text-center text-2xl lg:h-32 lg:w-44"
            ></div>
          ))}
        </div>
        <TarkeebBlock data={data[questionNumber].answer} />
        <div className="flex justify-center">
          <button onClick={clearInput} className="button mr-6 bg-red-400">
            Clear Answer
          </button>
          <button className="button bg-green-400" onClick={handleAnswerChecker}>
            Check Answer
          </button>
        </div>
      </div>
    </div>
  );
}

function TarkeebQuestionBlock({ fetchData }) {
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
    <ul className="flex flex-row-reverse">
      {arr.map((element, index) => (
        <li className="w-1/2 text-center text-4xl lg:text-8xl" key={index}>
          {element}
        </li>
      ))}
    </ul>
  );
}

function answerChecker(input, answer, updateQuestionNumber) {
  if (
    input.length !== answer.length ||
    input.toString() !== answer.reverse().toString()
  ) {
    return alert("Try Again!");
  }
  updateQuestionNumber();
  return alert("Congratulations!");
}

function TarkeebBlock(data) {
  const [answerArray, setAnswerArray] = useState([]);

  useEffect(() => {
    setAnswerArray(data.data);
  }, [data]);

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

  function handleDrag(e, data) {
    e.dataTransfer.setData("blockType", data);
  }

  return (
    Array.isArray(answerArray) && (
      <ul className="mx-auto mb-16 mt-16 flex flex-wrap gap-8 text-2xl">
        {answerArray.map((value, index) => (
          <li
            className="cursor-grab rounded-lg bg-slate-400 p-4"
            key={index}
            draggable
            onDragStart={(e) => handleDrag(e, value)}
          >
            {answersObj[value]}
          </li>
        ))}
      </ul>
    )
  );
}

export default Tarkeeb;

// <ul
//   className="scrollbar order-1 col-span-1 flex h-full flex-col items-center overflow-y-scroll pb-16 transition-all lg:order-first"
//   id="style-2"
// >
//   {Object.entries(answersObj).map(([key, value]) => (
//     <li
//       className="mb-8 w-4/5 cursor-grab border-2 border-black py-4 text-center text-4xl transition-all active:bg-gray-800 active:text-white active:opacity-10"
//       // style={{ backgroundColor: colors[key - 1] }}
//       key={key}
//
//     >
//       {value}
//     </li>
//   ))}
// </ul>
