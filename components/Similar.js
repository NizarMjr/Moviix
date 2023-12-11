import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from "next/link";
import { setID } from "@/redux/Actions";

const { default: Card } = require("./Card")

const Similar = ({ type }) => {
    const ID = useSelector(state => state.setID);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${type}/${ID}/similar?api_key=8dd167329501a317421a5048258e75f8`).then(res => setData(res.data.results)).catch(err => console.log(err.message));
    }, [ID])

    return data.length !== 0 && <main className="container " >
        <h3 className="sm:text-3xl text-xl mb-4">Similar {type}</h3>
        <Swiper className="mySwiper"
            rewind={true}
            navigation={true}
            modules={[Navigation]}
        >
            <main className="relative bg-bg-black text-white">
                {data.map((ele) => {
                    return (
                        <SwiperSlide className="sm:mr-8 mr-2" key={ele.id}>
                            <Link href={`/${type}/${ele.id}`} onClick={() => dispatch(setID(ele.id))}><Card ele={ele} withGenre={true} /></Link>
                        </SwiperSlide>
                    )
                })}
            </main>
        </Swiper>
    </main>


}
export default Similar;