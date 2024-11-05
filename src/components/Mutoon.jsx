import { useState } from "react";

export default function Mutoon() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVerse, setCurrentVerse] = useState(false);

  function handleClick(number) {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="flex h-full w-full flex-wrap justify-center">
      <div className="mb-4 flex flex-wrap justify-center border-8 border-primary p-4">
        <img src="assets/test/part-1.jpg" className="w-full" />
        <audio src="assets/poem-audio/part-1.mp4" controls={true} loop={true} />
      </div>
      <div className="mb-4 flex flex-wrap justify-center border-8 border-primary p-4">
        <img src="assets/test/part-2.jpg" className="w-full" />
        <audio src="assets/poem-audio/part-2.mp4" controls={true} loop={true} />
      </div>
      <div className="mb-4 flex flex-wrap justify-center border-8 border-primary p-4">
        <img src="assets/test/part-3.jpg" className="w-full" />
        <audio src="assets/poem-audio/part-3.mp4" controls={true} loop={true} />
      </div>
      <div className="mb-4 flex flex-wrap justify-center border-8 border-primary p-4">
        <img src="assets/test/part-4.jpg" className="w-full" />
        <audio src="assets/poem-audio/part-4.mp4" controls={true} loop={true} />
      </div>
      <div className="mb-4 flex flex-wrap justify-center border-8 border-primary p-4">
        <img src="assets/test/part-5.jpg" className="w-full" />
        <audio src="assets/poem-audio/part-5.mp4" controls={true} loop={true} />
      </div>
      <div className="mb-4 flex flex-wrap justify-center border-8 border-primary p-4">
        <img src="assets/test/part-6.jpg" className="w-full" />
        <audio src="assets/poem-audio/part-6.mp4" controls={true} loop={true} />
      </div>
      <div className="mb-4 flex flex-wrap justify-center border-8 border-primary p-4">
        <img src="assets/test/part-7.jpg" className="w-full" />
        <audio src="assets/poem-audio/part-7.mp4" controls={true} loop={true} />
      </div>
      <div className="mb-4 flex flex-wrap justify-center border-8 border-primary p-4">
        <img src="assets/test/part-8.jpg" className="w-full" />
        <audio src="assets/poem-audio/part-8.mp4" controls={true} loop={true} />
      </div>
      <div className="mb-4 flex flex-wrap justify-center border-8 border-primary p-4">
        <img src="assets/test/part-9.jpg" className="w-full" />
        <audio src="assets/poem-audio/part-9.mp4" controls={true} loop={true} />
      </div>
    </div>
  );
}
