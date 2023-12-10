import { setGenreOption } from "@/redux/Actions";
import Link from "next/link";
import { useDispatch } from "react-redux";

const BurgerBar = ({ showNav }) => {
    const dispatch = useDispatch();
    return (
        <nav className={`fixed z-50 text-white bg-black w-full h-32 transition duration-300 p-4 -top-40 ${showNav ? 'translate-y-60' : '-translate-y-60'}`}>
            <ul className="font-bold text-xl">
                <li className='cursor-pointer hover:text-pink mb-8'><Link onClick={() => dispatch(setGenreOption('movie'))} href="/movie">Movies</Link></li>
                <li className='cursor-pointer hover:text-pink'><Link onClick={() => dispatch(setGenreOption('tv'))} href="/tv">TV Shows</Link></li>
            </ul>
        </nav>
    )
}
export default BurgerBar;