import React, {useState} from 'react'
import Link from "next/link";
import {useRouter} from "next/router";
import {slide as Menu} from 'react-burger-menu';
import {IoMdMenu} from "react-icons/io";

const Header = () => {
    const navItems = [
        {name: "Blog", link: "/blog"},
        {name: "Products", link: "/products"},
        {name: "Team", link: "/team"},
        {name: "About", link: "/about"}
    ]
    const router = useRouter()
    const [isOpen, setIsOpen] = useState<boolean>(false)



    return (
        <div className={"bg-black text-white flex px-12 justify-between h-[72px] w-full"}>
            <div className={"flex w-full justify-between "}>
                <div className={"text-4xl mr-12 cursor-pointer py-4"}
                        onClick={() => router.push("/")}
                >FGA TECH</div>
                <div className={" w-[300px] justify-between text-lg sm:flex hidden items-center"}>
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
                      customBurgerIcon={ false }
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
            <div className={" items-center sm:flex hidden"}>
                <img src="/FGA_Tech_Logo.png" alt="FGA_Tech_Logo" className={"w-14 h-14 float-right "}/>
            </div>
        </div>
    )
}

export default Header