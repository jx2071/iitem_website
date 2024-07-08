import {MouseEventHandler} from "react";


function CopyIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
        <path
            d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/>
    </svg>
}


export default function Contact() {

    function handleCopy(email: string): MouseEventHandler<HTMLDivElement> {
        return (event) => {
            event.preventDefault();
            navigator.clipboard.writeText(email)
                .then(
                    () => alert("Email Address Copied")
                );
        }
    }

    return (
        <div className="grid m-5  leading-loose">
            <div className="w-1/3 indent-10">
                <p>Post Company believes that design lives at the intersection of beauty, elegance, and utility.</p>
                <p>Post Company is an award-winning, multidisciplinary design firm that works across hospitality, retail and residential typologies. Founded in 2012, and led by partners Ruben Caldwell, Jou-Yie Chou, and Leigh Salem, Post Company crafts environments that are simultaneously comprehensive in their approach and exacting in their detail.</p>
            </div>
            <div className="flex justify-end gap-14 mr-52">
                <div>
                    <p className="text-2xl"><i>Office</i></p>
                    <p className="pt-5">Brooklyn, NY</p>
                </div>

                <div className="gap-4">
                    <p className="text-2xl"><i>Contact</i></p>
                    <div className="pt-5">
                        <p className="text-xl">General Inquiries</p>
                        <div className='flex gap-2'>
                            <p>alexu@iitem.nyc</p>
                            <div className='w-3 self-center cursor-pointer' onClick={handleCopy("alexu@iitem.nyc")}>
                                <CopyIcon/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-xl">Press</p>
                        <div className='flex gap-2'>
                            <p>alexu@iitem.nyc</p>
                            <div className='w-3 self-center cursor-pointer' onClick={handleCopy("alexu@iitem.nyc")}>
                            <CopyIcon/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-xl">Vendors & Partnerships</p>
                        <div className='flex gap-2'>
                            <p>alexu@iitem.nyc</p>
                            <div className='w-3 self-center cursor-pointer' onClick={handleCopy("alexu@iitem.nyc")}>
                                <CopyIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-auto">
                <p className="text-2xl"><i>Capabilities</i></p>

                <div className="pt-5">
                    <p>Design</p>
                    <div className="text-xl">
                        <p>Concept Development</p>
                        <p>Site & Space Planning</p>
                        <p>Interior Design</p>
                        <p>Construction Design</p>
                        <p>Custom Furniture,</p>
                        <p>Fixture & Lighting</p>
                    </div>
                </div>
                <div className="pt-5">
                    <p>Branding</p>
                    <div className="text-xl">
                        <p>Web Design</p>
                        <p>Programming</p>
                        <p>Creative Direction</p>
                        <p>Branding & Identity</p>
                        <p>Strategic Partnerships</p>
                    </div>
                </div>
                <div className="pt-5">
                    <p>Development</p>
                    <div className="text-xl">
                        <p>Feasibility Studies</p>
                        <p>Positioning</p>
                        <p>Project Delivery</p>
                        <p>Branding & Identity</p>
                        <p>Project Management</p>
                    </div>
                </div>
            </div>
        </div>
    )
}