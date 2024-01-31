import { FormLabel } from "@mui/material";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";

export default function Vocab() {
  const [userAnswer, setUserAnswer] = useState("");

  return (
    <div className="flex flex-col items-center justify-center dark:bg-gray-900">
      <div className="w-full max-w-md space-y-6 p-4">
        <div className="aspect-w-16 aspect-h-9 flex justify-center overflow-hidden rounded-lg bg-gray-200 shadow-lg">
          <img
            alt="Vocabulary Image"
            className="object-cover"
            height={360}
            src="assets/house.png"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <FormLabel htmlFor="answer">Your Answer</FormLabel>
            <Input
              id="answer"
              placeholder="Type your answer here in Arabic"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
          </div>
          <Button
            className="h-12 w-full"
            onClick={() => checkAnswer(userAnswer)}
          >
            Check Answer
          </Button>
        </div>
      </div>
    </div>
  );
}

function checkAnswer(answer) {
  return answer === "البيت" || answer == "بيت"
    ? alert("Well Done!!")
    : alert("Try Again");
}
