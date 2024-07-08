import React, { useState } from 'react';
import {cn} from "src/lib/utils";

export default function HomePage(){

    const [loaded, setLoaded] = useState<boolean[]>([]);
    function handleLoaded(index:number){
        setLoaded(currentLoaded => {
            const newLoaded = [...currentLoaded];
            newLoaded[index] = true;
            return newLoaded;
        });
    }
    return (
    <div>
        <video src="/videos/heroVideoDesktop_2023-10.mp4" autoPlay={true} playsInline={true} loop={true} className="max-h-[90vh] object-cover w-full z-10"></video>
        <div className="grid grid-cols-12 grid-rows-1 bg-white intro dark:bg-neutral-900">
            <div className="react-markdown col-span-12 md:col-span-4 border-2 border-black dark:border-white rounded-3xl p-3 pr-5 md:text-[2.5vw] leading-5 md:leading-[2.75vw] m-2">
                <p>Post Projects is a communication design agency that creates brand identities, digital products, publications and more.</p>
                <br></br>
                <p>We work with businesses and institutions that depend on design in order to be seen and heard.</p>
            </div>
            <img
                loading="lazy"
                src={"/images/web1.jpg"}
                alt={""}
                className={cn("object-cover w-full h-full col-span-12 md:col-span-8 lazy",loaded[0]? "opacity-100":"opacity-0")}
                width="1080" height="608"
                decoding="async"
                onLoad={()=>handleLoaded(0)} />
        </div>

    </div>
    )
}