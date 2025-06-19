import Link from 'next/link';
import Nav from './Nav';
import Image from 'next/image';


const Header = () => {
    return(
        <header className="  xl:px-23 xl:py-3 h-20 bg-white ">
            <div className="flex items-center">
                <Link href="/">
                    <Image className="h-12 w-50"
                        src="/logos/guidebd.png"
                        alt="logo"
                        width="100"
                        height="100"
                    ></Image>
                </Link>


                {/* desktop nav*/}
                <div className=" flex-1 hidden xl:flex sm:flex">
                    <Nav/>
                </div>

            </div>
        </header>


    )
};
export default Header;