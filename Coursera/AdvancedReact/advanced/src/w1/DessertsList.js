function DessertsList(props) {
    const desserts = props.data;
    // I need to filter the calories and only choose below 500 cal and also I need to sort the list by their correpsponding cal. 
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

    // return null;
  }
  
  export default DessertsList;
  