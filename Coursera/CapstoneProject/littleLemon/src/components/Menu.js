import "./../styles/Menu.css";
import Card from "./Card";
import salad from "./../images/icons_assets/greek salad.jpg";
import bruchetta from "./../images/icons_assets/bruchetta.svg";
import dessert from "./../images/icons_assets/lemon dessert.jpg";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu-top">
        <h1 className="menu-title">This weeks specials!</h1>
        <button className="menu-button">Online Menu</button>
      </div>
      <div className="menu-lists">
        <Card
          title="Greek salad"
          price="$12.99"
          description="A fresh salad with feta cheese, olives, and tomatoes."
          image={salad}
        />
        <Card
          title="Bruchetta"
          price="$5.99"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          image={bruchetta}
        />
        <Card
          title="Lemon dessert"
          price="$5.00"
          description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imaged. "
          image={dessert}
        />
      </div>
    </div>
  );
}
