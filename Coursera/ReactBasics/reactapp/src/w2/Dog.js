import Puppy from './Puppy';

function Dog() {
    const currentDatetime = new Date();
    const currentTime = currentDatetime.getHours() + ":" + currentDatetime.getMinutes() + ":" + currentDatetime.getSeconds();
    return (
        <Puppy name="Ding" bowlShape="circular" bowlStatus="empty" message={currentTime}/>
    )
}

export default Dog;
