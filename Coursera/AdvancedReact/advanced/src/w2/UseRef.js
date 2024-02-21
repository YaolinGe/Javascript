import React from 'react'; 

export default function UseRef() {
    const formInputRef = React.useRef(null); 

    const focusInput = () => {
        formInputRef.current.focus();
    }

    return (
        <div>
            <h1>Use a Ref to access the underlying DOM</h1>
            <input ref={formInputRef} type="text" />
            <button onClick={focusInput}>Focus</button>
        </div>
    )
}