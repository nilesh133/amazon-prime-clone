import Image from "next/image";
import Logo from "../public/images/amazon_prime_logo.png";
import AccountImage from "../public/images/account.png";
import Logon from "../public/images/newlogo.png"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io"
const Header = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [showLogout, setShowLogout] = useState(false)
    return (
        <header className="flex items-center justify-between bg-[#0f171e] px-4 md:px-12 py-6">
            <div className="flex items-center">
                <div className="relative w-20 h-8 md:w-24 md:h-8 cursor-pointer">
                    <Image
                        onClick={() => router.push("/")}
                        src={Logo}
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="hidden md:flex text-white items-center font-spartan ml-8">
                    <p  onClick={() => router.push("/")} className="links">Home</p>
                    <p className="links">TV Shows</p>
                    <p className="links">Movies</p>
                    <p className="links">Channels</p>
                    <p className="links">Category</p>
                </div>
            </div>

            <div onClick={() => setShowLogout(!showLogout)} className="flex items-center justify-center cursor-pointer">
                <div className="w-8 h-8 md:w-10 md:h-10 relative">
                    <Image
                        src={AccountImage}
                        layout="fill"
                        objectFit="cover"
                    />

                </div>
                <h3 className="text-[16px] md:text-lg text-gray-400 font-spartan ml-2">{session?.user.name.split(" ")[0]}...</h3>
                <div className="relative flex justify-center items-center flex-col">
                    <span className="text-gray-400 cursor-pointer text-lg"><IoMdArrowDropdown /></span>
                    {
                        showLogout && (
                            <button onClick={signOut} className="absolute top-8 z-10 right-4 px-1 md:px-2 bg-white text-black font-spartan pt-2 pb-1 rounded-sm text-sm font-medium
                        tracking-wider border-2 border-white transition-all hover:bg-transparent hover:text-white">
                                LOGOUT</button>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header

// #0f171e