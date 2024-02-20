import { useRef, useState } from "react";

// const Form = () => {
//     const inputRef = useRef(null);

//     const handleSubmit = () => {
//         const inputValue = inputRef.current.value;
//         console.log(inputValue);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input ref={inputRef} type="text" />
//         </form>
//     )
// }

// const Form = () => {
//   const [value, setValue] = useState("");

//   const handleChange = (e) => {
//     setValue(e.target.value);
//     console.log(e.target.value)
//   };

//   return (
//     <form>
//       <input value={value} onChange={handleChange} type="text" />
//     </form>
//   );
// };

// const Form = () => {
//     const fileInput = useRef(null);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const files = fileInput.current.files;
//         console.log(files);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//              ref={fileInput}
//              type="file"
//              />
//              <p>{console.log(fileInput)}</p>
//         </form>
//     )
// }

// const Form = () => {
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setName("")
//     console.log("Form submitted: ", e.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <label htmlFor="name">Type a name: </label>
//           <input name="name" id="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//           <button disable={!name} type="submit">
//             Submit
//           </button>
//         </fieldset>
//       </form>
//     </div>
//   );
// };

const Form = () => {
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", score);
    console.log(comment); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="score">Score: {score} ⭐</label>
            <div>
              <input
                name="score"
                id="score"
                type="range"
                min="1"
                max="10"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="comment">Comment: </label>
            <textarea name="comment" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
