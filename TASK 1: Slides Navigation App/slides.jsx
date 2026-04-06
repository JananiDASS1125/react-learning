import { useState } from "react";

function Slides({ slides }) {
  const [index, setIndex] = useState(0);

  function handleNext() {
    setIndex((prev) => prev + 1);
  }

  function handlePrev() {
    setIndex((prev) => prev - 1);
  }

  function handleRestart() {
    setIndex(0);
  }

  return (
    <div>
      <div className="text-center">
        <button
          onClick={handleRestart}
          disabled={index === 0}
        >
          Restart
        </button>

        <button
          onClick={handlePrev}
          disabled={index === 0}
        >
          Prev
        </button>

        <button
          onClick={handleNext}
          disabled={index === slides.length - 1}
        >
          Next
        </button>
      </div>

      <div>
        <h1>{slides[index].title}</h1>
        <p>{slides[index].text}</p>
      </div>
    </div>
  );
}

export default Slides;
