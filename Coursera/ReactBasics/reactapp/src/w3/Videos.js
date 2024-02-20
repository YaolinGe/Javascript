import ReactPlayer from 'react-player'
// import ReactPlayer from 'react-player/youtube'

function Videos() {
    const vidUrl = 'https://youtu.be/0KXmd3uQ-4Y?si=xJtwBqPymvYERRsE';
    return (
        <div>
            <h1>React player example</h1>
            <ReactPlayer
                url={vidUrl}
                playing={false}
                volume={.5}
            />
        </div>
    )
}

// function Videos() {
//     return (
//         <div>
//             <h1>Videos</h1>
//             <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
//         </div>
//     );
// }

export default Videos;