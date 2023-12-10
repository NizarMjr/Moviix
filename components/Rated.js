import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SkeltonItem from "./SkeltonItem";
import Card from "./Card";
import Link from "next/link";
import { setID } from "@/redux/Actions";
import { useDispatch } from "react-redux";

const { default: ToggleDayOrWeek } = require("./ToggleDayOrWeek")

const Rated = () => {
    const [rated, SetRated] = useState([]);
    const [type, setType] = useState('movie');
    const [skelton, setSkelton] = useState(false);
    const dispatch = useDispatch();

    const getRated = () => {
        axios.get(`https://api.themoviedb.org/3/${type}/top_rated?api_key=8dd167329501a317421a5048258e75f8`).then(res => SetRated(res.data.results)).catch(err => console.log(err.message))
    }

    useEffect(() => {
        getRated();
    }, [type])

    return (
        <main className="container">
            <main className="relative my-8 px-4 bg-bg-black text-white">
                <div className="flex justify-between items-center my-8">
                    <h3 className="sm:text-3xl text-xl">Top Rated</h3>
                    <ToggleDayOrWeek type={type} setType={setType} setSkelton={setSkelton} />
                </div>
                {!skelton ? <Swiper className="mySwiper"
                    rewind={true}
                    navigation={true}
                    modules={[Navigation]}
                >
                    <main className="relative bg-bg-black text-white">
                        {rated.map((ele) => {
                            return (
                                <SwiperSlide className="sm:mr-8 mr-2" key={ele.id}>
                                    <Link href={`${type}/${ele.id}`} onClick={() => dispatch(setID(ele.id))}><Card ele={ele} withGenre={true} /></Link>
                                </SwiperSlide>
                            )
                        })}
                    </main>
                </Swiper> :
                    <SkeltonItem />}
            </main>
        </main>
    )
}
export default Rated;