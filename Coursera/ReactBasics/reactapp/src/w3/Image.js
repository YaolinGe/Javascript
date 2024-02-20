import ramen from './assets/ramen.jpg';

function Image() {

    const randomImageUrl = 'https://picsum.photos/200/300';
    return (
        <div>
            <h1>Image</h1>
            <img
                src={ramen}
                alt="Ramen"
                width="300"
                height="200"
            />

            <img
                src={require('./assets/ramen.jpg')}
                alt="Ramen"
                width="300"
                height="200"
            />

            <img
                src={randomImageUrl}
                alt="Random"
                width="200"
                height="300"    
            />
            
        </div>
    )
}

export default Image;