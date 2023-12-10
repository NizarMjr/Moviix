import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="text-center bg-bg-black2 text-white p-8">
            <ul className="sm:w-1/3 w-full justify-between mx-auto flex items-center">
                <li className="sm:m-0 mx-2 text-sm">Terms Of Us</li>
                <li className="sm:m-0 mx-2 text-sm">Privacy-Policy</li>
                <li className="sm:m-0 mx-2 text-sm">About</li>
                <li className="sm:m-0 mx-2 text-sm">blog</li>
                <li className="sm:m-0 mx-2 text-sm">FAQ</li>
            </ul>
            <p className="sm:w-3/4 w-full mx-auto my-12 text-sm">Discover an extensive selection of the latest, highly acclaimed movies available for your viewing pleasure. Whether you prefer the big screen experience, television broadcasts, or streaming platforms such as Netflix, Amazon Prime Video, Hotstar, Voot, and Jio Cinema, we have curated a list of popular titles to help you decide what to watch next.</p>
            <ul className="sm:w-1/4 w-full mx-auto flex justify-between items-center">
                <li className="sm:m-0 rounded-full border border-clrBlack cursor-pointer hover:border-pink p-4 flex justify-center items-center bg-bg-black"><AiFillLinkedin /></li>
                <li className="rounded-full border border-clrBlack cursor-pointer hover:border-pink p-4 flex justify-center items-center bg-bg-black"><AiFillGithub /></li>
                <li className="rounded-full border border-clrBlack cursor-pointer hover:border-pink p-4 flex justify-center items-center bg-bg-black"><AiFillTwitterCircle /></li>
                <li className="rounded-full border border-clrBlack cursor-pointer hover:border-pink p-4 flex justify-center items-center bg-bg-black"><AiFillInstagram /></li>
            </ul>
        </footer >
    )
}
export default Footer;