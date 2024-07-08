const addressURL = "https://www.google.com/maps/place/395+S+2nd+St,+Brooklyn,+NY+11211/@40.7012693,-73.9617394,15.25z/data=!4m6!3m5!1s0x89c25be2431c02bb:0x29a2da2b88b146c3!8m2!3d40.709568!4d-73.9514842!16s%2Fg%2F11c24vmfy4?entry=ttu";

export default function Footer(){
    return (
        <div className="flex items-center justify-between px-4 py-2 mt-14">
            <div className="flex justify-between w-1/2"><p>Instagram</p>
            <a target="_blank" href={addressURL} rel="noreferrer"><p>395 S 2nd St, Brooklyn NY 11211</p></a>
                <p>Newsletter</p></div>
            <p>All Rights Reserved {new Date().getFullYear()} ™</p>
        </div>
    )
}