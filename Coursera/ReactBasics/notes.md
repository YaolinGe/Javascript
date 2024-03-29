# React Basics notes

## What to do when old packages get outdated, and got error when launching the app?
- `rm node_modules` to remove the node_modules folder.
- `rm package_lock.json` to remove the package_lock.json file.
- `npm install -g npm-check-updates` to install the npm-check-updates package globally.
- `ncu -u` to update the package.json file.
- `npm install` to install the updated packages.
- `npm start` then to start the development server.

## Module imports and exports 
- `export default function addTwoNumbers(a, b) { return a + b; }` to perform a default export. 
- `export {addTwo, addThree};` to perform a named export for multiple functions.

## React Components
- `virtual DOM` is a lightweight copy of the actual DOM.
- `functional component` is a simple JavaScript function that returns a React element.
- `import React from 'react'; import ReactDOM from 'react-dom/client'; import App from './App.js'; ReactDOM.createRoot(document.querySelector('#root')).render(<App />);` to render a component.
- JSX is a syntax extension for JavaScript that looks similar to XML.
- `npm init react-app .` to create a new React app.
- `npm install react-scripts --save` to install the react-scripts package.
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
- `const handleClick = () => {console.log('Button clicked')}; <button onClick={handleClick}>Click me</button>` is an example of event handling using function expressions with arrow functions.

## Data and State
- `props` are outside the component and are fixed throughout the component's lifecycle.
- `state` is inside the component and can be changed throughout the component's lifecycle.
- `hooks` are used to add state to functional components.
- `setSomeFunc` cannot be directly called to change the state. It can only be called inside a function.
- `prop drilling` is the process of passing props from parent to child components.
- `context provider` and `context consumer` are used to pass props to child components without prop drilling.
- `stateful` and `stateless` components are used to manage state in a component.
    - `stateful` has its own state. 
    - `stateless` does not have its own state.
    - Parent component are usually stateful and child components are usually stateless.

## Linking and Routing 
- `npm i react-router-dom` to install the react-router-dom package.
- `import {BrowserRouter} from 'react-router-dom';` to use the BrowserRouter component.
- `<BrowserRouter><App /></BrowserRouter>` need to wrap the app with the BrowserRouter component.


## Assets in React 
- `<img src={require('./assets/images/cat.jpg')}>` to add images in React if I don't want to use `import` statement. 
- `npm install react-player` to install the react-player package.
- 