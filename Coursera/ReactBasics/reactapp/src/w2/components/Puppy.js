import Bowl from './Bowl';

function Puppy(props) {
    return (
        <div>
            {props.name} has <Bowl bowlShape={props.bowlShape} bowlStatus={props.bowlStatus} />
            Time: {props.message}
        </div>
    )
}

export default Puppy;
