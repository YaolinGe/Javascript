function DessertsList(props) {
    const desserts = props.data;
    const lowCalDesserts = desserts.filter(dessert => dessert.calories < 500).sort((a, b) => a.calories - b.calories);
    const listItems = lowCalDesserts.map(dessert => {
      return (
        <li key={dessert.name}>{dessert.name} - {dessert.calories}</li>
      )
    })
    return (
        <ul>
            {listItems}
        </ul>
    )
  }
  
  export default DessertsList;
  