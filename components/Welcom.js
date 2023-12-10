import { setSearch } from "@/redux/Actions";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
require('dotenv').config()

const { default: BurgerBar } = require("./BurgerBar")
const { default: Navbar } = require("./Navbar")

const Welcom = () => {
    const [showNav, setShowNav] = useState(false);
    const [result, setResult] = useState('');
    const dispatch = useDispatch();
    const [background, setBackg] = useState('');
    const randID = useSelector(state => state.getRandomBackgnrd);
    const searching = () => {
        dispatch(setSearch(result))
    }

    useEffect(() => {
        const fetchBackground = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${randID}/images?api_key=8dd167329501a317421a5048258e75f8`)
            const data = await res.json()
            setBackg(data.backdrops[1].file_path);
        }
        fetchBackground()
    }, [])

    return (
        <main className="h-screen">
            <Navbar showNav={showNav} setShowNav={setShowNav} />
            <BurgerBar showNav={showNav} />
            <img className="object-cover object-center w-full h-full absolute top-0 left-0" src={`https://image.tmdb.org/t/p/original${background}`} alt="image" />
            <div className="opacity-50 w-full h-full bg-bg-black absolute"></div>
            <div className="sm:px-16 px-8 text-center text-white w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
                <h1 className="sm:text-7xl text-4xl font-bold">Welcome.</h1>
                <p className="sm:text-2xl text-xl font-bold my-8">Millions of movies, TV shows and people to discover. Explore now.</p>
                <form className="flex text-black w-full">
                    <input className="flex-1 px-8 py-4 rounded-tl-full rounded-bl-full" type="text" placeholder="Search for movie or tv show" value={result} onChange={(e) => setResult(e.target.value)} />
                    <Link href="/search"><button onClick={() => searching()} className="rounded-tr-full text-white rounded-br-full bg-gradient-to-r from-purple-500 to-pink-500 p-4 font-500">Search</button></Link>
                </form>
            </div>
        </main>
    )
}
export default Welcom;