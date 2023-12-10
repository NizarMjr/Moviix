import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const CircleRating = ({ rate }) => {
    return (
        <CircularProgressbar
            value={rate}
            text={rate}
            maxValue={10}
            styles={buildStyles({
                pathColor: `${rate < 5 ? "red" : rate < 7 ? "orange" : "green"
                    }`,
            })}
        />
    )
}
export default CircleRating;