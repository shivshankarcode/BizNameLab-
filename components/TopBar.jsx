import Link from "next/link"
import { MoveRight } from "lucide-react";
function TopBar() {
    return (
        <div className="fixed top-0 left-0 w-full bg-cblack flex justify-between md:px-56 px-10 md:py-8 py-5">
            <Link href="/">
                <h1 className='uppercase md:text-4xl text-3xl font-semibold text-primary'>BizNameLab</h1>
            </Link>
            <Link href="https://shivshankar7004.github.io/portfolio/" className="text-white hover:underline hover:text-primary flex gap-2 items-center">By Developer Shivshankar kumar
            <MoveRight/>
            </Link>            
        </div>
    )
}

export default TopBar
