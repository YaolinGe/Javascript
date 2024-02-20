const data = [
    {
        id: "1", 
        title: "Tiramisu", 
        description: "Tiramisu is a coffee-flavoured Italian dessert. It is made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa.",
        image: "https://www.thespruceeats.com/thmb",
        price: "10",
    }, 
    {
        id: "2", 
        title: "Cheesecake",
        description: "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese, eggs, and sugar.",
        image: "https://www.thespruceeats.com/thmb",
        price: "12",
    }, 
    {
        id: "3", 
        title: "Chocolate Cake",
        description: "Chocolate cake or chocolate gâteau is a cake flavored with melted chocolate, cocoa powder, or both.",
        image: "https://www.thespruceeats.com/thmb",
        price: "15",
    },
]; 

const topDesserts = data.map(dessert => {
    return {
        content: `${dessert.title} - ${dessert.description}`, 
        price: dessert.price,
    }
})

export default function Map() {
    const listItems = data.map(dessert => {
        var listItem = `${dessert.title} - ${dessert.price}`
        return (
            <li>{listItem}</li>
        )
    })
    // console.log(topDesserts)
    return (
        <div>
            <h1>Here comes the list of desserts</h1>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}