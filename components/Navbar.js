import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import { setGenreOption } from '@/redux/Actions'
import { useDispatch } from 'react-redux'
import Search from './Search'
import { useState } from 'react'

const Navbar = ({ showNav, setShowNav }) => {
    const [openSearch, setOpenSearch] = useState(false);

    const dispatch = useDispatch();
    const showBurgerNav = () => {
        setShowNav(true);
    }
    const closeBurgerNav = () => {
        setShowNav(false);
    }
    const showSearch = () => {
        setOpenSearch(true);
    }

    return (
        <nav className={`fixed top-0 z-50 w-full backdrop-blur flex justify-between items-center p-8 h-20 ${showNav ? 'bg-black text-white ' : ''} bg-shadow`}>
            <Link href="/">
                <div className="flex">
                    <img className='max-w-0' src="../assets/movix-logo.png" alt="logo" />
                    <img src="../assets/movix-logo.svg" alt="logo" />
                </div>
            </Link>
            <ul className="w-fit-content sm:flex justify-between items-center hidden font-bold text-white">
                <li className='mx-4 cursor-pointer hover:text-pink'><Link onClick={() => dispatch(setGenreOption('movie'))} href="/movie">Movies</Link></li>
                <li className='mx-4 cursor-pointer hover:text-pink'><Link onClick={() => dispatch(setGenreOption('tv'))} href="/tv">TV Shows</Link></li>
                <li className='cursor-pointer hover:text-pink text-white'>{openSearch ? <Search openSearch={openSearch} setOpenSearch={setOpenSearch} /> : <BsSearch onClick={() => showSearch()} />}</li>
            </ul>
            <ul className='sm:hidden flex justify-between items-center w-2/3'>
                {showNav ? <li><AiOutlineClose onClick={() => closeBurgerNav()} className='text-2xl mr-4 cursor-pointer' /></li>
                    :
                    <li><GiHamburgerMenu onClick={() => showBurgerNav()} className='text-2xl mr-4 cursor-pointer text-white' /></li>}
                <li className='cursor-pointer'>{openSearch ? <Search openSearch={openSearch} setOpenSearch={setOpenSearch} /> : <BsSearch onClick={() => showSearch()} />}</li>
            </ul>
        </nav>
    )
}
export default Navbar;