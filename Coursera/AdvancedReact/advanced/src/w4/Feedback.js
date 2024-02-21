import { useState } from "react";

function FeedbackForm({ onSubmit }) {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const isDisabled = Number(score) < 5 && comment.length <= 10;

  const textAreaPlaceholder = isDisabled
    ? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters "
    : "Optional feedback";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ score, comment });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div>
            <label>Score: {score} ⭐</label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div>
            <label>Comment: </label>
            <textarea
              placeholder={textAreaPlaceholder}
              name="comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>
          </div>
          <button type="submit" disabled={isDisabled}>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default function App() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}
