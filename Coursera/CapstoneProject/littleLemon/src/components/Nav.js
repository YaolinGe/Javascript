// import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import "./../styles/Nav.css"

// import Home from './Home';
// import About from './About';


export default function Nav() {
    return (
        <nav className="nav">
                Here comes the navigation bar
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">Reservations</a>
                </li>
                <li>
                    <a href="#">Order Online</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </nav>
    ); 
}