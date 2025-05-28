
import ImageGallery from "./ImageGallery";
import { RecentImages } from "../constants/Images";


 export default function RecentShoots() {


    return(
        <div className="bg-black w-full p-4 my-[5%]">
            <h1 className="text-3xl pt-[5%] pb-10 text-white font-pacifico text-center">Recent Photoshoots</h1>
            <ImageGallery images={RecentImages} />
        </div>
    )
}
