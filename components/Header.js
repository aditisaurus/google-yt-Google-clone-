import Image from "next/image";
import {useRouter} from "next/router";
import {useRef} from "react";


function Header() {

    const router = useRouter();
    const searchInputRef = useRef(null);
    return (
        <header>
           <Image src= "https://cdn.vox-cdn.com/thumbor/Ei4ydi9WDwJW-dpSW_QWMiVULNs=/0x0:2012x1341/1820x1213/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
           height={40} width={120} 
           onClick={() => router.push("/abc")}
           className="cursor-pointer" />

           <form className="flex px-6 py-3 ml-10 mr-5 border border-gray rounded-full shadow-lg max-w-3xl items-center">
         <input ref= {searchInputRef} className="flex-grow w-full focus:outline-none" type="text"/>
           </form>
        </header>
    )
}

export default Header;