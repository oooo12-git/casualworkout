import classes from './Workout.module.css';
import WorkoutSet from './WorkoutSet';

function Workout() {
    return (
        <div className={classes.modal}>
            <div className={classes.inputGroup}>
                <input type="text" placeholder="머신명칭(체스트 프레스)"></input>
                <input type="text" placeholder="회사명(해머스트렝쓰)"></input>
            </div>
            <input type="text" placeholder="무게 계산식 $=원판 한개 무게(ex. 2($+5.5))"></input>
            <div className={classes.inputGroup}>
                <textarea type="text" placeholder='옛날 내가 전하는 말'></textarea>
                <span>{'==>'}</span>
                <textarea type="text" placeholder='미래에 전하는 말'></textarea>
            </div>

            <WorkoutSet setType="W" />
            <WorkoutSet setType="1" />
            <WorkoutSet setType="2" />
            <WorkoutSet setType="3" />
            <WorkoutSet setType="4" />
            <WorkoutSet setType="5" />
        </div>
    );
}

export default Workout;