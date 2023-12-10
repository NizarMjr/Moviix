import BurgerBar from "@/components/BurgerBar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { setID } from "@/redux/Actions";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
    const search = useSelector(state => state.setSearch);
    const [dataSearched, setData] = useState([]);
    const [showNav, setShowNav] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchSearch = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${search}&api_key=8dd167329501a317421a5048258e75f8`)
            const data = await response.json();
            setData(data.results);
        }
        fetchSearch()
        console.log(dataSearched);
    }, [search])

    const searching = (id) => {
        dispatch(setID(id));
    }
    return (
        <>
            <Navbar showNav={showNav} setShowNav={setShowNav} />
            <BurgerBar showNav={showNav} setShowNav={setShowNav} />
            <main className="bg-bg-black text-white py-32">
                <main className="container">
                    {dataSearched.length !== 0 ? <article className="grid sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 mt-16">
                        {dataSearched.map((ele) => {
                            return (
                                <Link href={`${ele.media_type}/${ele.id}`} key={ele.id} onClick={() => searching(ele.id)} ><Card ele={ele} withGenre={false} /></Link>
                            )
                        })}
                    </article> : <p className="text-center sm:text-2xl text-xl">No Result</p>}
                </main>
            </main>
            <Footer />
        </>
    )
}
export default Search;