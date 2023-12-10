import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";

const { setSearch } = require("@/redux/Actions");
const { useState } = require("react")

const Search = ({ openSearch, setOpenSearch }) => {
    const [result, setResult] = useState();
    const dispatch = useDispatch();

    const searching = () => {
        dispatch(setSearch(result))
    }
    const closeSearch = () => {
        setOpenSearch(false);
    }
    return (
        <div className={`font-normal text-sm duration-500 transition-width flex text-black h-[35px] ${openSearch ? 'w-fit-content' : 'w-0'} `}>
            <input className="h-full flex-1 px-2 sm:w-[fit-content] w-[140px] rounded-s-md" type="text" placeholder="Search for movie or tv show" value={result} onChange={(e) => setResult(e.target.value)} />
            <div className="flex">
                <Link href="/search"><button onClick={() => searching()} className="h-full text-sm p-2 text-white font-500"><BsSearch /></button></Link>
                <button onClick={() => closeSearch()} className="text-xl p-2 text-white font-500"><IoIosCloseCircle /></button>
            </div>
        </div>
    )
}
export default Search;