import Nav from "./Nav";
import "./../styles/Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <img
          src={require("./../images/icons_assets/Logo.svg").default}
          alt="logo"
          className="logo"
        />
        <div className="nav">
          <Nav />
        </div>
      </header>
    </>
  );
}
