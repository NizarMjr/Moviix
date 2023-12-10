const { default: axios } = require("axios");
const { useState, useEffect, useRef } = require("react");
const { useSelector } = require("react-redux");
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ReactPlayer from 'react-player';
import { PlayIcon } from './PlayIcon';
import { IoIosCloseCircle } from "react-icons/io";

const Videos = ({ type, trailerKey, setTrailerKey }) => {
    const ID = useSelector(state => state.setID);
    const [data, setData] = useState([]);
    const [play, setPlay] = useState({
        'state': false,
        'key': '',
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        trailerKey ? playVideo(trailerKey) : closeVideo()
    }, [trailerKey])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeVideo()
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };

    }, []);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${type}/${ID}/videos?api_key=8dd167329501a317421a5048258e75f8`).then(res => setData(res.data.results)).catch(err => console.log(err.message));
    }, [ID])

    const playVideo = (key) => {
        setPlay({ ...play, 'state': true, 'key': key })
    }

    const closeVideo = () => {
        setPlay({ ...play, 'state': false, 'key': '' })
        setTrailerKey('')
    }

    return data.length !== 0 && <main className="container sm:h-full h-56 sm:my-16 my-12" >
        <h3 className="sm:text-3xl text-xl mb-4">Officiel Videos</h3>
        <Swiper className="mySwiper"
            rewind={true}
            navigation={true}
            modules={[Navigation]}
        >
            <main className="relative bg-bg-black text-white">
                {data.map((ele) => {
                    return (
                        <SwiperSlide className="sm:mr-8 mr-2" key={ele.id}>
                            <div>
                                <div className='transition hover:opacity-50 video relative mb-4'>
                                    <img className='h-full' src={`https://img.youtube.com/vi/${ele.key}/mqdefault.jpg`} />
                                    <div onClick={() => playVideo(ele.key)} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'><PlayIcon size={50} /></div>
                                </div>
                                <p className='sm:text-xl text-sm overflow-hidden h-[60px]'>{ele.name}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </main>
        </Swiper>
        {!isDropdownOpen && play.state && <div className='fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] h-[300px] z-50'>
            <div ref={dropdownRef} onClick={() => closeVideo()} className='absolute left-1/2 -top-[1rem] -translate-x-1/2 font-bold p-1 rounded-full cursor-pointer text-[2rem] text-[pink]'><IoIosCloseCircle /></div>
            <ReactPlayer
                url={`https://img.youtube.com/watch?v=${play.key}`}
                controls
                width="100%"
                height="100%"
            />
        </div>}
    </main>


}
export default Videos;