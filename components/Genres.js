import axios from "axios";
import { useEffect, useState } from "react";

const Genres = ({ genreID }) => {
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/genre/list?api_key=8dd167329501a317421a5048258e75f8').then(res => setGenre(res.data.genres))
    }, [genreID])

    return (
        <div className="flex sm:flex-row flex-col items-center absolute sm:left-0 right-0 bottom-12 w-1/2 overflow-hidden w-full h-[100px]">
            {genre?.map((g) => {
                const new_g = genreID.map((e) => {
                    if (g.id === e)
                        return <span className="bg-pink text-white rounded text-sm w-fit p-1 sm:mx-1 my-1 whitespace-nowrap" key={g}>{g.name}</span>
                })
                return new_g;
            })}
        </div>
    )
}
export default Genres;