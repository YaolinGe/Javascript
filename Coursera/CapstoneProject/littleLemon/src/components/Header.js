import Nav from "./Nav";
import "./../styles/Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <a href="/">
        <img
          src={require("./../images/icons_assets/Logo.svg").default}
          alt="logo"
          className="logo"
        />
        </a>
        <div className="nav">
          <Nav />
        </div>
      </header>
    </>
  );
}
