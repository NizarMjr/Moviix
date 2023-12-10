import Skeleton from "react-loading-skeleton";

const Sklt = () => {
    return (
        <div className="sm:w-1/5 w-[calc(100%/2-20px)]">
            <Skeleton variant="rounded" height={210} animation="wave" baseColor="#020c1b" duration={1} />
            <Skeleton variant="text" height={10} animation="wave" baseColor="#020c1b" duration={1} />
            <Skeleton variant="text" height={10} animation="wave" baseColor="#020c1b" duration={1} />
        </div>
    )
}
export default Sklt;