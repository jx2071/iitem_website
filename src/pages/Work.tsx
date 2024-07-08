import {MouseEventHandler, useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

const works = [
    {title:"The LaFayette Hotel and Swim Club",
        location:"SanDiego, CA",
        year:"2023",
        type:"Hotel",
        href:"#/project-one",
        previews:["preview-1-1.jpg","preview-1-2.jpg"]
    },
    {title:"The LaFayette Hotel and Swim Club",
        location:"SanDiego, CA",
        year:"2023",
        type:"Hotel",
        href:"#/project-one",
        previews:["preview-1-1.jpg","preview-1-2.jpg"]},
    {title:"The LaFayette Hotel and Swim Club",
        location:"SanDiego, CA",
        year:"2023",
        type:"Hotel",
        href:"#/project-one",
        previews:["preview-1-1.jpg","preview-1-2.jpg"]},
    {title:"The LaFayette Hotel and Swim Club",
        location:"SanDiego, CA",
        year:"2023",
        type:"Hotel",
        href:"#/project-one",
        previews:["preview-1-1.jpg","preview-1-2.jpg"]},
    {title:"The LaFayette Hotel and Swim Club",
        location:"SanDiego, CA",
        year:"2023",
        type:"Hotel",
        href:"#/project-one",
        previews:["preview-1-1.jpg","preview-1-2.jpg"]},
    {title:"The LaFayette Hotel and Swim Club",
        location:"SanDiego, CA",
        year:"2023",
        type:"Hotel",
        href:"#/project-one",
        previews:["preview-1-1.jpg","preview-1-2.jpg"]},
    {title:"The LaFayette Hotel and Swim Club",
        location:"SanDiego, CA",
        year:"2023",
        type:"Hotel",
        href:"#/project-one",
        previews:["preview-1-1.jpg","preview-1-2.jpg"]},
    {title:"The LaFayette Hotel and Swim Club",
        location:"SanDiego, CA",
        year:"2023",
        type:"Hotel",
        href:"#/project-one",
        previews:["preview-1-1.jpg","preview-1-2.jpg"]},
    {title:"The LaFayette Hotel and Swim Club",
        location:"SanDiego, CA",
        year:"2023",
        type:"Hotel",
        href:"#/project-one",
        previews:["preview-1-1.jpg","preview-1-2.jpg"]},
    {title:"The LaFayette Hotel and Swim Club",
        location:"SanDiego, CA",
        year:"2023",
        type:"Hotel",
        href:"#/project-one",
        previews:["preview-1-1.jpg","preview-1-2.jpg"]},
    {title:"The LaFayette Hotel and Swim Club",
        location:"SanDiego, CA",
        year:"2023",
        type:"Hotel",
        href:"#/project-one",
        previews:["preview-1-1.jpg","preview-1-2.jpg"]},
]

export default function WorkPage(){

    const [authorized, setAuthorized] = useState(false);
    const pwd = "123"

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    params.forEach((v,k)=>{
        if (k === "pwd"){
            window.sessionStorage.setItem("temp_pwd",v);
        }
    })

    useEffect(()=>{
        let temp_pwd =  window.sessionStorage.getItem("temp_pwd")
        if( temp_pwd !== null){
            setAuthorized(temp_pwd===pwd);
        }
    }
    ,[])
    function generateRandomCoordinates(imageWidth:number,imageHeight:number){
        const maxX = window.innerWidth - imageWidth>0? window.innerWidth - imageWidth:0;

        const maxY = window.innerHeight - imageHeight>0? window.innerHeight - imageHeight:0;

        const x = Math.floor(Math.random() * maxX);
        const y = Math.random() * maxY;

        return {x,y};
    }

    function handleMouseEnter(id: string): MouseEventHandler<HTMLDivElement> {
        return () => {
            const ele = document.getElementById("preview-" + id);
            if (ele) {
                ele.classList.remove("inactive");
                ele.classList.add("active");
            }

            const textEle = document.getElementById("work-"+id);
            if(textEle){
                textEle.classList.add("text-active");
            }
        };
    }

    function handleMouseLeave(id: string): MouseEventHandler<HTMLDivElement> {
        return () => {
            const ele = document.getElementById("preview-" + id);
            if (ele) {
                ele.classList.remove("active");
                ele.classList.add("inactive");
            }
            const textEle = document.getElementById("work-"+id);
            if(textEle){
                textEle.classList.remove("text-active");
            }
        };
    }
    if(authorized) {


        return <div className="flex flex-wrap py-10">

            <ul className="m-auto  px-10">
                {works.slice(0, works.length / 2).map((work, index) => {
                    let image1 = generateRandomCoordinates(240, 375);
                    let image2 = generateRandomCoordinates(240, 375);
                    return (
                        <>
                            <div id={"preview-" + index} className="inactive z-0">
                                <img src={"/images/" + work.previews[0]}
                                     alt={"/images/" + work.previews[0]}
                                     width="240px"
                                     height="375px"
                                     style={{left: image1.x, top: image1.y}}
                                     className={"absolute"}
                                />
                                <img src={"/images/" + work.previews[1]}
                                     alt={"/images/" + work.previews[1]}
                                     width="240px"
                                     height="375px"
                                     style={{left: image2.x, top: image2.y}}
                                     className={"absolute"}
                                />
                            </div>

                            <li>
                                <div className="z-10 relative pb-5"
                                     id={"work-" + index}
                                     onMouseEnter={handleMouseEnter("" + index)}
                                     onMouseLeave={handleMouseLeave("" + index)}>
                                    <a href={work.href}>
                                        <div className="flex gap-5">
                                            <p>{"0" + index}</p>
                                            <div>
                                                <p className="font-semibold">{work.title}</p>
                                                <p>{work.location}</p>
                                                <p>{work.year}</p>
                                                <p className="ml-5">{work.type}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </>
                    )
                })}
            </ul>
            <ul className="m-auto  px-10">
                {works.slice(works.length / 2).map((work, index) => {
                    let i = index + Math.floor(works.length / 2);
                    let image1 = generateRandomCoordinates(240, 375);
                    let image2 = generateRandomCoordinates(240, 375);
                    return (
                        <>
                            <div id={"preview-" + i} className="inactive z-0">
                                <img src={"/images/" + work.previews[0]}
                                     alt={"/images/" + work.previews[0]}
                                     width="240px"
                                     height="375px"
                                     style={{left: image1.x, top: image1.y}}
                                     className={"absolute"}
                                />
                                <img src={"/images/" + work.previews[1]}
                                     alt={"/images/" + work.previews[1]}
                                     width="240px"
                                     height="375px"
                                     style={{left: image2.x, top: image2.y}}
                                     className={"absolute"}
                                />
                            </div>
                            <li>
                                <div className="z-10 relative pb-5"
                                     id={"work-" + i}
                                     onMouseEnter={handleMouseEnter("" + i)}
                                     onMouseLeave={handleMouseLeave("" + i)}>
                                    <a href={work.href}>
                                        <div className="flex gap-5">
                                            <p>{"0" + i}</p>
                                            <div>
                                                <p className="font-semibold">{work.title}</p>
                                                <p>{work.location}</p>
                                                <p>{work.year}</p>
                                                <p className="ml-5">{work.type}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </>
                    )
                })}
            </ul>

        </div>
    } else{
        return(
            <div className="h-full min-h-[1000px] flex">

            <label className="m-auto">
                Enter Password
                <input
                    onChange={event => {
                    if (event.target.value === pwd){
                        window.sessionStorage.setItem("temp_pwd", event.target.value );
                        setAuthorized(true);
                        }
                    }}
                    className="ml-4 px-2 rounded-xl border-amber-100 border-solid border-2"
                ></input>
            </label>
            </div>
        )
    }
}