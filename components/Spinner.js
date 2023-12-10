const { Oval } = require("react-loader-spinner")

const Spinner = () => {
    return (
        <div className="relative flex items-center justify-center bg-bg-black p-8">
            <Oval
                height={30}
                width={30}
                color="#da2f68"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#da2f68"
                strokeWidth={4}
                strokeWidthSecondary={2}
            />
        </div>
    )
}
export default Spinner