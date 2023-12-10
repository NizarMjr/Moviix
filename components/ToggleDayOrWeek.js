import { useState } from "react";

const ToggleDayOrWeek = ({ type, setType, setSkelton }) => {

    const [btnType, setBtnType] = useState(true);


    const filterToMovie = () => {
        setBtnType(true);
        type === 'tv' ? setType('movie') : setType('week');
        setSkelton(true);
        setTimeout(() => {
            setSkelton(false);
        }, 1000);
    }

    const filterToTV = () => {
        setBtnType(false);
        type === 'movie' ? setType('tv') : setType('day');
        setSkelton(true);
        setTimeout(() => {
            setSkelton(false);
        }, 1000);
    }

    return (
        <div className="absolute top-0 right-0 rounded-full flex justify-between items-center p-2 w-1/6 w-[120px] bg-bg-black2 text-white">
            <span className={`h-full absolute w-1/2 px-4 py-2 bg-pink rounded-full ${btnType ? 'left-0' : 'right-0'} `}></span>
            <span onClick={() => filterToMovie()} className={`transition duration-300 z-50 cursor-pointer font-500 text-xs`}>{type === 'day' ? 'Day' : type === 'week' ? 'day' : 'Movie'}</span>
            <span onClick={() => filterToTV()} className={`transition duration-300 z-50 cursor-pointer font-500 text-xs`}>{type === 'week' ? 'Week' : type === 'day' ? 'Week' : 'TV Show'}</span>
        </div>
    )
}
export default ToggleDayOrWeek;