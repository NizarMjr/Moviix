import CircleRating from "@/components/CircleRating";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "@/components/Navbar";
import BurgerBar from "@/components/BurgerBar";
import Similar from "@/components/Similar";
import Recommanded from "@/components/Recommended";
import Footer from "@/components/Footer";
import Cast from "@/components/Cast";
import Videos from "@/components/Videos";
import { PlayIcon } from "@/components/PlayIcon";
import { setID } from "@/redux/Actions";

const Details = () => {
    const ID = useSelector(state => state.setID);
    const [detail, setDetail] = useState({});
    const [showNav, setShowNav] = useState(false);
    const [background, setBackground] = useState('');
    const [videos, setVideos] = useState([]);
    const [trailerKey, setTrailerKey] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.getItem('ID') && dispatch(setID(localStorage.getItem('ID')))

        const fetchDetail = async () => {
            const resp = await fetch(`https://api.themoviedb.org/3/movie/${ID ? ID : localStorage.getItem('ID')}?api_key=8dd167329501a317421a5048258e75f8`);
            const data = await resp.json();
            setDetail(data);
            setBackground(data.backdrop_path)

            const response = await fetch(`https://api.themoviedb.org/3/movie/${ID ? ID : localStorage.getItem('ID')}/videos?api_key=8dd167329501a317421a5048258e75f8`)
            const trailerData = await response.json();

            setVideos(trailerData.results)
        }
        fetchDetail()
    }, [ID])

    const numberToTime = (num) => {
        const hours = Math.floor(num / 60);
        const mins = num % 60;

        return `${hours}h ${mins}min`
    }
    return (
        <main className="bg-bg-black text-white pt-32">
            <Navbar showNav={showNav} setShowNav={setShowNav} />
            <BurgerBar showNav={showNav} setShowNav={setShowNav} />
            <div className="container">
                <img className="w-full h-full absolute top-0 left-0 opacity-10 object-cover" src={`https://image.tmdb.org/t/p/original${background}`} alt="image" />
                <div className="grid md:grid-cols-[400px,1fr] gap-4">
                    <img className="rounded-xl sm:h-[500px]" src={detail.poster_path ? `https://image.tmdb.org/t/p/original/${detail.poster_path}` : '../../assets/no-poster.png'} alt={detail.title} />
                    <div className="">
                        <h2 className="text-3xl">{detail.title}</h2>
                        <p className="my-4 opacity-50 sm:text-xl">{detail.tagline}</p>
                        <div className="flex items-center flex-wrap">
                            {detail.genres?.map((g) => {
                                return (
                                    <span className="mr-4 bg-pink font-bold text-white rounded text-sm w-fit p-1 my-4 whitespace-nowrap" key={g.name}>{g.name}</span>
                                )
                            })}
                        </div>
                        <div className="flex items-center justify-between">
                            <CircleRating rate={detail.vote_average?.toFixed(1)} />
                            <div onClick={() => setTrailerKey(videos[0].key)} className="play flex items-center sm:w-64 w-56 z-50">
                                <PlayIcon />
                                <span className="block sm:text-xl ml-2">Watch Trailer</span>
                            </div>
                        </div>
                        <h3 className="font-bold sm:text-xl my-4">Overview</h3>
                        <p className="mb-8">{detail.overview}</p>
                        <div className="flex justify-between items-center border-b border-slate-300 pb-4">
                            <p className="flex flex-col"><span className="font-bold">Status: </span> <span>{detail.status}</span></p>
                            <p className="flex flex-col"><span className="font-bold">Release Date: </span> <span>{detail.release_date}</span></p>
                            <p className="flex flex-col"><span className="font-bold">Run Time: </span> <span>{numberToTime(detail.runtime)}</span></p>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            <Cast type={'movie'} />
            <Videos type={'movie'} trailerKey={trailerKey} setTrailerKey={setTrailerKey} />
            <Similar type={'movie'} />
            <Recommanded type={'movie'} />
            <Footer />
        </main>
    )
}
export default Details;