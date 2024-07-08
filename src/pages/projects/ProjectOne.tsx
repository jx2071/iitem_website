import React, {useState} from 'react';
import {cn} from "src/lib/utils";
export default function ProjectOne(){
    const [loaded, setLoaded] = useState<boolean[]>([]);

    function handleLoaded(index: number) {
        setLoaded(currentLoaded => {
            const newLoaded = [...currentLoaded];
            newLoaded[index] = true;
            return newLoaded;
        });
    }

    return (
        <div className="p-2 gap-4 grid">

            <div className="project-title mt-14 p-4">
                <div className="flex w-[85vw] gap-[15vw]">
                    <p className="w-[400px] text-xl font-medium">The LaFayette Hotel and Swim Club</p>
                    <p className="text-lg">2023</p>
                </div>
                <div className="flex w-[85vw] gap-[15vw]">
                    <p className="w-[400px] text-lg"><i>San Diego, </i>CA</p>
                    <p className="text-xl font-medium">Hotel, Food & Beverage</p>
                </div>
            </div>
            <div>
                <img src="/images/project-1-1.jpg"
                     alt={""}
                     width={"100%"}/>
            </div>

            <div className="flex justify-between gap-2">
                <div className="flex flex-col justify-end">
                    <p style={{fontFamily:"Arial sans-serif"}} className="text-xl font-medium">Role</p>
                    <p>Interior Design</p>
                    <br/>
                    <p style={{fontFamily:"Arial sans-serif"}} className="text-xl font-medium">Scope</p>
                    <p>Renovation: 139 Room Hotel, F&B Outlets (Quixote, The Gutter, Beginner’s Diner, Le Horse, Lulu’s,
                        The Mississippi Room), Lobby, Cafe, Pool, Outdoor Spaces</p>
                    <br/>
                    <p style={{fontFamily:"Arial sans-serif"}} className="text-xl font-medium">Partners</p>
                    <p>Owner: Consortium Holdings<br/>Architects: Tucker Sadler<br/>Contractor: CLTVT, Hawkins
                        Construction, ADK Studios</p>
                </div>
                <img loading="lazy"
                     src="/images/project-1-2.jpg"
                     className={cn("lazy", loaded[0] ? "opacity-100" : "opacity-0")}
                     alt={""}
                     width={"50%"}
                     onLoad={() => {
                         handleLoaded(0)
                     }}/>
            </div>
            <div className="flex justify-between gap-2">
                <img loading="lazy"
                     src="/images/project-1-3.jpg"
                     className={cn("lazy", loaded[1] ? "opacity-100" : "opacity-0")}
                     alt={""}
                     width={"50%"}
                     onLoad={() => {
                         handleLoaded(1)
                     }}/>
                <img loading="lazy"
                     src="/images/project-1-4.jpg"
                     className={cn("lazy", loaded[2] ? "opacity-100" : "opacity-0")}
                     alt={""}
                     width={"50%"}
                     onLoad={() => {
                         handleLoaded(2)
                     }}/>
            </div>

            <div>
                <img loading="lazy"
                     src="/images/project-1-5.jpg"
                     className={cn("lazy", loaded[3] ? "opacity-100" : "opacity-0")}
                     alt={""}
                     width={"100%"}
                     onLoad={() => {
                         handleLoaded(3)
                     }}/>
            </div>
        </div>
    )
}