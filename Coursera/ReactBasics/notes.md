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
- `npm start` to start the development server.

## Folder structure 
- `node_modules` contains all the dependencies.
- `public` contains the essential assets like index.html and other images or icons.
- `src` contains the source code of the application.
- `package.json` contains the metadata of the project.
- `package-lock.json` contains the exact version of the dependencies.
- `className` is special in JSX syntax to define the class attribute.
- `default export` when the filename is the same as the function name. 
- `named export` when the filename is different from the function name.
- `props` are used to pass data from parent to child components.
- `<> </>` is a shorthand for React.Fragment, can be used to replace `div` tags.
- `props.children` is used to access the children of a component.
- `<Parent> <Child /> </Parent>` is an example of a parent-child relationship.
- inline styles can be added using `style={{color: 'red'}}`.
- `index.html` can be used to add style as well. 
- `const styles={color: 'red'}; <h1 style={styles}>Hello World</h1>` is an example of inline styles.
- `=>` is used to define an arrow function.
- `const Nav = props => {}` when props only have one component. 
- `const Nav = () => {}` when props are not used, i.e. a stateless component, it does not accept any props.
- `const Nav = () => <ul><li>Home</li></ul>` to create an implicit return. But it only works if the component has a single line of code. No need for the return keyword or curly braces.
- `comparison ? true : false` is a ternary operator. 
- There are three ways of defining a function: `function declaration`, `function expression`, and `arrow function`.
    - `function Max() {}` is a function declaration.
    - `const Max = function() {}` is a function expression.
    - `const Max = () => {}` is an arrow function.

## Event Handling
- `event groups`: 
    - `clipboard events`
    - `composition events`
    - `keyboard events`
    - `mouse events`
    - `selection events`
    - `touch events`
    - `wheel events`
    - `animation events`
    - etc. 
- `onClick` is a special attribute in JSX to handle click events.

