import { useEffect, useState } from "react";
import ToggleDayOrWeek from "./ToggleDayOrWeek";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SkeltonItem from "./SkeltonItem";
import Card from "./Card";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setID } from "@/redux/Actions";

const Trending = () => {
    const [trending, setTrending] = useState([]);
    const [type, setType] = useState('day');
    const [skelton, setSkelton] = useState(false);
    const dispatch = useDispatch();

    const getTrending = () => {
        axios.get(`https://api.themoviedb.org/3/trending/all/${type}?api_key=8dd167329501a317421a5048258e75f8`).then(res => setTrending(res.data.results))
    }
    useEffect(() => {
        getTrending();
    }, [type])

    const getDetail = (ele) => {
        dispatch(setID(ele.id));
    }

    return (
        <>
            {<main className="container">
                <main className="relative my-8 px-4 bg-bg-black text-white">
                    <div className="flex justify-between items-center my-8">
                        <h3 className="sm:text-3xl text-xl">Trending</h3>
                        <ToggleDayOrWeek type={type} setType={setType} setSkelton={setSkelton} />
                    </div>
                    <div className="flex justify-between items-center">
                        {!skelton ? <Swiper className="mySwiper"
                            rewind={true}
                            navigation={true}
                            modules={[Navigation]}
                        >
                            <main className="relative bg-bg-black text-white">
                                {trending.map((ele) => {
                                    return (
                                        <SwiperSlide className="sm:mr-8 mr-2" key={ele.id}>
                                            <Link href={`${ele.media_type}/${ele.id}`} onClick={() => getDetail(ele)}><Card ele={ele} withGenre={true} /></Link>
                                        </SwiperSlide>

                                    )
                                })}
                            </main>
                        </Swiper> :
                            <SkeltonItem />}
                    </div>
                </main>
            </main>}
        </>

    )
}
export default Trending;