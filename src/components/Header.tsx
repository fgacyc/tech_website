import React from 'react'
import Link from "next/link";
import {useRouter} from "next/router";

const Header = () => {
    const navItems = [
        {name: "Blog", link: "/blog"},
        {name: "Products", link: "/products"},
        {name: "Team", link: "/team"},
        {name: "About", link: "/about"}
    ]
    const router = useRouter()


    return (
        <div className={"bg-black text-white flex items-center py-4 px-12 justify-between"}>
            <div className={"flex items-center"}>
                <div className={"text-4xl mr-12 cursor-pointer"}
                        onClick={() => router.push("/")}
                >FGA TECH</div>
                <div className={"flex w-[300px] justify-between text-lg"}>
                    {
                        navItems.map((navItem) => {
                            return <Link href={navItem.link} key={navItem.name} className={"cursor-pointer"}>
                                {navItem.name}
                            </Link>
                        })
                    }
                </div>
            </div>
            <img src="/FGA_Tech_Logo.png" alt="FGA_Tech_Logo" className={"w-14 h-14 float-right"}/>
        </div>
    )
}

export default Header