import React, {useState} from 'react'
import Link from "next/link";
import {slide as Menu} from 'react-burger-menu';
import {IoMdMenu} from "react-icons/io";
import {useRouter} from "next/router";

const Header = () => {
    const navItems = [
        {name: "Blog", link: "/blog"},
        {name: "Products", link: "/products"},
        {name: "Team", link: "/team"},
        {name: "About", link: "/about"}
    ]
    const router = useRouter()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const path = router.pathname
    const isHidden = path === "/terms-of-service" || path === "/privacy-policy"


    return (
        <div className={`bg-black text-white flex sm:px-12 px-6 justify-between h-[72px] w-full ${isHidden && "hidden"}`}>
            <div className={"flex items-center w-[72px] sm:hidden "}
                    onClick={() => router.push("/")}
            >
                <img src="/FGA_Tech_Logo.png" alt="FGA_Tech_Logo" className={"w-14 h-14  sm:float-right "}/>
            </div>
            <div className={"flex w-full sm:justify-start justify-end "}>
                <div className={"md:text-4xl sm:text-2xl mr-12 cursor-pointer py-4 sm:block hidden "}
                     onClick={() => router.push("/")}
                >FGA TECH
                </div>
                <div className={" w-[300px] justify-between text-lg sm:flex hidden  h-18 leading-[72px] "}>
                    {
                        navItems.map((navItem) => {
                            return <Link href={navItem.link} key={navItem.name} className={"cursor-pointer"}>
                                {navItem.name}
                            </Link>
                        })
                    }
                </div>
                <IoMdMenu
                    className={"h-8 w-8 cursor-pointer my-5 sm:hidden block"}
                    onClick={() => setIsOpen(!isOpen)}
                />
                <Menu right
                      customBurgerIcon={false}
                      isOpen={isOpen}
                      onStateChange={(state) => setIsOpen(state.isOpen)}
                >
                    {
                        navItems.map((navItem) => {
                            return <Link href={navItem.link} key={navItem.name} className={"cursor-pointer"}>
                                {navItem.name}
                            </Link>
                        })
                    }
                </Menu>
            </div>
            <div className={" items-center w-[72px] sm:flex hidden"}
                 onClick={() => router.push("/")}
            >
                <img src="/FGA_Tech_Logo.png" alt="FGA_Tech_Logo" className={"w-14 h-14  sm:float-right "}/>
            </div>
        </div>
    )
}

export default Header