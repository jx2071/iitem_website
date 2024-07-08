import {Button} from '../ui/button';
import {Link, useLocation} from "react-router-dom";
import {cn} from "src/lib/utils";
import {Sheet, SheetClose, SheetContent, SheetTrigger} from "src/components/ui/sheet";

const paths = [
    {
        pathname:"/",
        name:"Home",
    },
    {
        pathname:"/work",
        name:"Work",
    },
    {
        pathname:"/contact",
        name:"Contact",
    },
]

function MenuIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}

export default function Navbar(){
    const location = useLocation();
    return(
        <>
            <div className={"h-[60px]"}></div>
        <div className="fixed z-10 top-0 w-full flex items-center justify-between px-4 py-2 bg-[rgba(255,255,255,0.5)] dark:bg-gray-800">
            <Link to="/">
                LogoHere
            </Link>
            <div className="hidden md:flex gap-4">
                {paths.map((path,index)=>{
                    return (
                        <Link to={path.pathname}>
                            <Button
                                variant='link'
                                className={cn("text-lg font-medium hover:underline underline-offset-4",
                                    location.pathname===path.pathname?"text-orange-300":"")}>{path.name}</Button>
                        </Link>
                    )
                })}
            </div>
            <div className="md:hidden">

            <Sheet >
                <SheetTrigger asChild>
                <Button  size="icon" variant="outline">
                    <MenuIcon />
                </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[200px]">

                    <div className="grid w-[200px] p-4">
                        {paths.map((path,index)=>{
                            return (
                                <SheetClose asChild>
                                <Link to={path.pathname}>
                                    <Button
                                        variant='link'
                                        className={cn("text-lg font-medium hover:underline underline-offset-4",
                                            location.pathname===path.pathname?"text-orange-300":"")}>{path.name}</Button>
                                </Link>
                                </SheetClose>
                            )
                        })}
                    </div>
                </SheetContent>
            </Sheet>
            </div>
        </div>
        </>
    )
}
