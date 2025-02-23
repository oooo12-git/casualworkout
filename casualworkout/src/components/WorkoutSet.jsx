import classes from './Workout.module.css';

function WorkoutSet(props) {
    return (
        <div className={classes.inputSet}>
            <div className={classes.inputGroup}>
                <span>{props.setType}</span><input type="text" placeholder="중량(kg)"></input>
                <input type="text" placeholder="횟수(회)" />
            </div>
        </div>
    );
}

export default WorkoutSet;