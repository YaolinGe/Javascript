# React Basics notes

## Module imports and exports 
- `export default function addTwoNumbers(a, b) { return a + b; }` to perform a default export. 
- `export {addTwo, addThree};` to perform a named export for multiple functions.

## React Components
- `virtual DOM` is a lightweight copy of the actual DOM.
- `functional component` is a simple JavaScript function that returns a React element.
- `import React from 'react'; import ReactDOM from 'react-dom/client'; import App from './App.js'; ReactDOM.createRoot(document.querySelector('#root')).render(<App />);` to render a component.
- JSX is a syntax extension for JavaScript that looks similar to XML.
- `npm init react-app .` to create a new React app.
- `npm install react-scripts --save` to 