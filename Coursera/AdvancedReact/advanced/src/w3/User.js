const Button = ({children, backgroundColor}) => {
    return <button style={{backgroundColor}}>{children}</button>
}

const Alert = ({children}) => {
    return (
        <>
        <div className="Overlay" />
        <div className="Alert">{children}</div> 
        </>
    )
}

const DeleteButton = () => {
    return <Button backgroundColor="red">Delete</Button>
}



export default function App() {
    return (
        <div className="App">
            <header>Little Lemon Restaurant 🍕</header>
            <Alert>
                <h4>Delete Account</h4>
                <p>Are you sure if you want to delete an account!</p>
                <DeleteButton />
            </Alert>
        </div>
    )
}