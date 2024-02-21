# Advanced React 

## Rendering lists in react 
- `map()` function is used to render lists in react.
- `key` prop is used to uniquely identify each element in the list, they are unique to the list and not the entire application.
- `index` can be used as `key`, but it is not recommended as it can cause performance issues.
- `controlled component` is a component that renders a list and also controls the data that is being rendered.
- `uncontrolled component` is a component that renders a list but does not control the data that is being rendered.
- `uncontrolled component` can be changed to `controlled component` by adding `value` and `onChange` props to the input element.
- `password, setPassword = useState({value:"", isTouched: false})` is used to store the value of the input element and also to check if the input element has been touched or not. BE CAREFUL with this object type, since it cause issues with rendering in the UI later. 
- `useMemo` is used to memoize the value of a variable, so that it is not recalculated every time the component is re-rendered.
- `memo()` is used to memoize the value of a component, so that it is not re-rendered every time the parent component is re-rendered.

## Hooks
- `[e.target.name]` is used to get the name of the input element.
- `e.target.value` is used to get the value of the input element.
- `pure function` does not have side effects. 
- `impure function` does have side effects, as it needs to invoke an API or change the state of the application.
- `useEffect(() => {document.title = 'little lemon, v${version}';}, [version])` to only rerun if the version number changes, [version] is the dependency array which controls whether or not the effect runs and dom renders. 
- only call hooks from the top level of the function component, not from nested functions or loops.
- only call hooks from react functions, not from regular javascript functions.
- `fetch` is used to make a request to an API.
- `API` needs to have a type safe interface, so that the data that is being returned can be type checked.
- `useReducer` is a more advanced version of `useState` as it provides more control over the state of the application.
- `useState` is suitable for less complex data, while `useReducer` is suitable for more complex data.
- `console.log` should be invoked inside `useEffect` to avoid infinite loops.


## JSX Deep Dive 
- `element` are used to produce a virtual DOM, which is just a javascript representation of the actual DOM. 
- `containment` is used to pass a component as a prop to another component.
- `specialization` is used to pass a component
- `<></>` is the same as `<React.Fragment></React.Fragment>` are essentially the same. 
- `<div />`, `<div></div>`, `<div>{false}</div>`, `<div>{null}</div>`, `<div>{false}</div>`, `<div>{undefined}</div>`, `<div>{true}</div>` are all the same.
- `React.cloneElement` is used to clone a component and pass new props to it, it is employed on the element level, meaning that it is used to operate on a single element, not JSX syntax, but the actual element.
- `React.cloneElement(element, [props])` to clone a component and pass new props to it.
- `React.Children.map(children, callback)` is used to map over the children of a component and apply a callback function to each child.

## Reusing behaviour 
- `cross cutting concerns` can be employed to reuse behaviour across multiple components.
    - `custom hook`can be used to address that issue, but it is not a good solution for cross cutting concerns.
        - needs to alternate each individual component, and thus leading to stateful component. 
    - `HOC` can be used to address this issue as well, HOC stands for higher order component. 
        - `const EnhancedComponent = higherOrderComponent(WrappedComponent)` is used to wrap a component with a higher order component.
        - `const withSubscription = (WrappedComponent, selectData) => {return (props) => {<WrappedComponent data={data} {...props}>}}` is used to create a higher order component.
    - `Render props pattern` can be used to address this issue as well, it is a pattern that uses a prop to pass a function to a component.

## Testing 
- avoid implementtaion details in tests
- test work with DOM nodes 
- resemble software usage
