import { LinearProgress } from "@mui/joy"

const LoadingPage = () => {
    return (
        <div className="grid place-items-center w-full h-screen">
            <div className="flex flex-col items-center">
                <LinearProgress />
            </div>
        </div>
    )
}

export default LoadingPage;