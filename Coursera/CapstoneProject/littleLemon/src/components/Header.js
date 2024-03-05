import Nav from './Nav';
import './../styles/Header.css';


export default function Header() {
    // print out current working directory
    // console.log(process.cwd());    

    return (
        <>
            <header className='header'>
                <img 
                    src={require('./../images/icons_assets/Logo.svg').default}
                    alt="logo"
                    className="logo"
                />
                <Nav />
            </header>
        </>
    );
}
