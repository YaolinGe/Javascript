import { useState } from 'react';
import { useRef } from 'react';

// function Hooks() {
//     const [inputText, setText] = useState('hello');

//     function handleChange(event) {
//         setText(event.target.value);
//     }

//     return (
//         <>
//         <input value={inputText} onChange={handleChange} />
//         <p>you typed: {inputText}</p>
//         <button onClick={() => setText('hello')}>Reset</button>
//         </>
//     )    
// }

function Hooks() {
    const [form, setForm] = useState (
        {
            firstName: "Luke", 
            lastName: "Jones", 
            email: "someemail@gmail.com",
        }
    ); 

    return (
        <>
            <label>
                First name: 
                <input value={form.firstName} onChange={(e=>{
                    setForm({
                        ...form, 
                        firstName: e.target.value
                    })
                })}/>
            </label>
            <label>
                Last name: 
                <input value={form.lastName} onChange={(e=>{
                    setForm({
                        ...form, 
                        lastName: e.target.value
                    })
                })}/>
            </label>
            <label>
                Email: 
                <input value={form.email} onChange={(e=>{
                    setForm({
                        ...form, 
                        email: e.target.value
                    })
                })}/>
            </label>
            <p>First name: {form.firstName}</p>
            <p>Last name: {form.lastName}</p>
            <p>Email: {form.email}</p>
        </>
    )
}

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}


// export default Hooks;
export {Hooks, TextInputWithFocusButton};