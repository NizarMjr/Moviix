import { useEffect, useState } from "react";
import Sklt from "./Sklt";

const SkeltonItem = () => {
    const [size, setSize] = useState();
    const desktop = [1, 2, 3, 4];
    const tablet = [1, 2, 3];
    const mobile = [1, 2];

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', handleResize())

        return () =>
            window.removeEventListener('resize', handleResize())
    }, [size]);

    return (
        <main className="flex justify-between items-center w-full">
            {size > 1000 ? desktop.map((sk) => {
                return (
                    <Sklt key={sk} />
                )
            }) : size > 600 ? tablet.map((sk) => {
                return (
                    <Sklt key={sk} />
                )
            }) : mobile.map((sk) => {
                return (
                    <Sklt key={sk} />
                )
            })}
        </main>

    )
}

export default SkeltonItem;