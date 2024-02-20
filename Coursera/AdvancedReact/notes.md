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
