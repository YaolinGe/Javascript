import { UserProvider, useUser } from "./Context";

const LoggedInUser = () => {
    const {user} = useUser(); 
    return (
        <p>
            {/* Hello */}
            Hello <span className="Username">{user.name}</span>
        </p>
    ); 
}; 

const Header = () => {
    return (
        <header>
            <h2>Blog App</h2>
            <LoggedInUser />
        </header>
    ); 
}; 

const Page = () => {
    const {user} = useUser(); 
    return (
        <div>
            <h2>What is a blog? </h2>
            <p>
                A blog is something that is written by a person, group, or organization. It is a website that is updated regularly and is written in an informal or conversational style.
            </p>
            <p>Written by {user.name}</p>
        </div>
    )
}

const BlogContext = () => {
    return (
        <div>
            <Header />
            <Page />
        </div>
    )
}


export default BlogContext;