import { setLoading } from "@/redux/Actions";
import { useDispatch } from "react-redux";

const { default: CircleRating } = require("./CircleRating")
const { default: Genres } = require("./Genres")

const Card = ({ ele, withGenre }) => {
    const dispatch = useDispatch();

    const getDetail = () => {
        dispatch(setLoading(true))
    }
    return (
        <article onClick={() => getDetail()} className="cursor-pointer transition hover:opacity-50 rounded">
            <div className="">
                <div className="relative mb-4">
                    <img className="rounded" src={ele.poster_path ? `https://image.tmdb.org/t/p/w500${ele.poster_path}` : '../../assets/no-poster.png'} />
                    {withGenre === true && <>
                        <Genres genreID={ele.genre_ids} />
                        <CircleRating rate={ele.vote_average?.toFixed(1)} />
                    </>}
                </div>
                <span className="text-left title block sm:my-4 my-1 font-500 sm:text-xl text-md p-0 mx-0">{ele.original_title ? ele.original_title : ele.original_name}</span>
                <span className="text-left block sm:text-sm text-sm opacity-50">{ele.release_date ? ele.release_date : ele.first_air_date}</span>
            </div>
        </article>
    )
}
export default Card;