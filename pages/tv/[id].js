import CircleRating from "@/components/CircleRating";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "@/components/Navbar";
import BurgerBar from "@/components/BurgerBar";
import Similar from "@/components/Similar";
import Recommanded from "@/components/Recommended";
import Footer from "@/components/Footer";
import Cast from "@/components/Cast";
import Videos from "@/components/Videos";
import { PlayIcon } from "@/components/PlayIcon";

const Details = () => {
    const ID = useSelector(state => state.setID);
    const [detail, setDetail] = useState({});
    const [showNav, setShowNav] = useState(false);
    const [background, setBackground] = useState('');
    const [videos, setVideos] = useState([]);
    const [trailerKey, setTrailerKey] = useState('');

    useEffect(() => {
        const fetchDetail = async () => {
            const resp = await fetch(`https://api.themoviedb.org/3/tv/${ID}?api_key=8dd167329501a317421a5048258e75f8`);
            const data = await resp.json();
            setDetail(data);
            setBackground(data.backdrop_path)

            const response = await fetch(`https://api.themoviedb.org/3/tv/${ID}/videos?api_key=8dd167329501a317421a5048258e75f8`)
            const trailerData = await response.json();

            setVideos(trailerData.results)
        }
        fetchDetail()
    }, [ID])

    return (
        <main className="bg-bg-black text-white pt-32">
            <Navbar showNav={showNav} setShowNav={setShowNav} />
            <BurgerBar showNav={showNav} setShowNav={setShowNav} />
            <div className="container">
                <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] grid-cols-[repeat(auto-fill,minmax(auto,auto)) gap-8">
                    <img className="w-full absolute top-0 left-0 opacity-10 object-cover" src={`https://image.tmdb.org/t/p/original${background}`} alt="image" />
                    <img className="rounded-xl sm:h-[500px]" src={detail.backdrop_path ? `https://image.tmdb.org/t/p/original${detail.backdrop_path}` : '../../assets/no-poster.png'} alt={detail.title} />
                    <div className="">
                        <h2 className="text-3xl">{detail.name}</h2>
                        <p className="my-4 opacity-50 sm:text-xl">{detail.tagline}</p>
                        <div className="flex items-center">
                            {detail.genres?.map((g) => {
                                return (
                                    <span className="mr-4 bg-pink text-white rounded w-fit p-1 my-4 whitespace-nowrap" key={g}>{g.name}</span>
                                )
                            })}
                        </div>
                        <div className="flex items-center justify-between">
                            <CircleRating rate={detail.vote_average?.toFixed(1)} className="" />
                            {videos.length !== 0 && <div onClick={() => setTrailerKey(videos[0].key)} className="play-icon cursor-pointer flex items-center sm:w-64 w-56 z-50">
                                <PlayIcon />
                                <span className="sm:text-2xl ml-2">Watch Trailer</span>
                            </div>}
                        </div>
                        <h3 className="font-bold sm:text-xl my-4">Overview</h3>
                        <p className="mb-8">{detail.overview}</p>
                        <div className="flex justify-between items-center border-b border-slate-300 pb-4">
                            <p className="flex flex-col"><span className="font-bold">Status: </span> <span>{detail.status}</span></p>
                            <p className="flex flex-col"><span className="font-bold">Release Date: </span> <span>{detail.release_date}</span></p>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            <Cast type={'tv'} />
            <Videos type={'tv'} trailerKey={trailerKey} setTrailerKey={setTrailerKey} />
            <Similar type={'tv'} />
            <Recommanded type={'tv'} />
            <Footer />
        </main>
    )
}
export default Details;