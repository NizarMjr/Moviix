import BurgerBar from "@/components/BurgerBar";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import SelectGenre from "@/components/SelectGenre";
import SortedBy from "@/components/SortedBy";
import Spinner from "@/components/Spinner";
import { setID } from "@/redux/Actions";
import Link from "next/link";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";

const Series = () => {
    const [showNav, setShowNav] = useState(false);
    const [TV, setTV] = useState([]);
    const [data, setData] = useState([]);
    const [pages, setPages] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [filterWithSort, setFilterWithSort] = useState('popularity.desc');
    const [filterWithGenre, setFilterWithGenre] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()

    const fetchTVFromApi = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=${pages}&sort_by=${filterWithSort}&api_key=8dd167329501a317421a5048258e75f8`);
            const getData = await response.json();
            setTotalPages(!totalPages && getData.total_pages)
            setData([...data, ...getData.results]);
            setTV([...TV, ...getData.results]);
            setPages(prev => prev + 1)
        } catch {
            console.log('error')
        } finally {
            setIsLoading(false)
            filterWithGenre.length !== 0 && filterTV();
        }
    }

    const filterTV = () => {
        const arr = data.filter((mv) => {
            let pass = 0;
            filterWithGenre.forEach((id) => {
                mv.genre_ids.forEach((ele) => {
                    ele === parseInt(id) ? pass++ : '';
                })
            })
            return pass === filterWithGenre.length ? mv : '';
        })
        if (filterWithGenre.length !== 0) setTV(arr)
        else setTV(data);
    }
    useEffect(() => {
        fetchTVFromApi();
        filterTV();
    }, [filterWithSort])

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
            return;
        }
        fetchTVFromApi();
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    useEffect(() => {
        filterTV();
    }, [filterWithGenre, filterWithSort])


    return (
        <>
            <InfiniteScroll
                dataLength={data.length}
                hasMore={true}
                loader={<Spinner />}
            >
                <Navbar showNav={showNav} setShowNav={setShowNav} />
                <BurgerBar showNav={showNav} setShowNav={setShowNav} />
                <main className="bg-bg-black text-white py-32">
                    <main className="container">
                        <div className="sm:flex justify-between items-center">
                            <h3 className="text-2xl">Explore TV Series</h3>
                            <div className="sm:flex items-center justify-between gap-8 basis-[500px]">
                                <SelectGenre filterWithGenre={filterWithGenre} setFilterWithGenre={setFilterWithGenre} />
                                <SortedBy filterWithSort={filterWithSort} setFilterWithSort={setFilterWithSort} />
                            </div>
                        </div>
                        <article className="grid sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 mt-16">
                            {TV.map((ele) => {
                                return (
                                    <Link href={`tv/${ele.id}`} onClick={() => dispatch(setID(ele.id))} key={ele.id}><Card ele={ele} withGenre={true} /></Link>
                                )
                            })}
                        </article>
                    </main>
                </main>
            </InfiniteScroll>
        </>
    )
}
export default Series;