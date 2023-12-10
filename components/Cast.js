import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Cast = ({ type }) => {
    const ID = useSelector(state => state.setID);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${type}/${ID}/credits?api_key=8dd167329501a317421a5048258e75f8`).then(res => setData(res.data.cast)).catch(err => console.log(err.message));
    }, [ID])
    return data.length !== 0 && <main className="container sm:h-full h-56 sm:my-16 my-12" >
        <h3 className="sm:text-3xl text-xl mb-4">Top Cast</h3>
        <Swiper className="mySwiper"
            rewind={true}
            navigation={true}
            modules={[Navigation]}
        >
            <main className="relative bg-bg-black text-white">
                {data.map((ele) => {
                    return (
                        <SwiperSlide className="" key={ele.id}>
                            <div className="flex items-center justify-center flex-col w-[fit-content]">
                                <img src={ele.profile_path ? `https://image.tmdb.org/t/p/w500/${ele.profile_path}` : '../../assets/avatar.png'} className="rounded-full sm:w-[175px] sm:h-[175px] h-[100px] w-[100px]" />
                                <p className="sm:my-4 my-2 font-bold sm:text-xl text-sm">{ele.name}</p>
                                <span className="sm:text-xl text-sm opacity-50">{ele.character}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </main>
        </Swiper>
    </main>
}
export default Cast;