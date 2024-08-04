import React from "react";
import Link from "next/link";
import Status from "~/components/status";
import {useRouter} from "next/router";

const Footer = () => {
    const navItems = [
        {name: "FGA", link: "https://www.fga.my/"},
        {name: "FGACYC", link: "https://www.fgacyc.com/"},
    ]

    const products = [
        {
            name: "FGA CYC Website",
            link: "https://fgacyc.com/"
        },
        {
            name: "FGA Mobile App",
            link: "https://www.fgacyc.com/mobile-app-download"
        },
        {
            name: "Song Bank",
            link: "https://songbank.fgacyc.com/"
        }
    ]

    const socialMedia = [
        // github facebook youtube instagram thread
        {
            image: "/icons/github.svg",
            alt: "GitHub",
            href: "https://github.com/fgacyc"
        },
        {
            image: "/icons/instagram.svg",
            alt: "Instagram",
            href: "https://www.instagram.com/fgatechnology/"
        },
        {
            image: "/icons/facebook.svg",
            alt: "Facebook",
            href: "https://www.facebook.com/FGACYC/"
        },
        {
            image: "/icons/thread.svg",
            alt: "Twitter",
            href: "#"
        },
        {
            image: "/icons/youtube.svg",
            alt: "YouTube",
            href: "https://www.youtube.com/@fgacyc"
        },
    ]
    const router = useRouter()
    const path = router.pathname
    const isHidden = path === "/terms-of-service" || path === "/privacy-policy"

    return (
        <div className={`text-white sm:px-12 px-6 pt-12 ${isHidden && "hidden"}`}>
            <div className={"flex justify-between flex-wrap"}>
                <div className={"flex flex-col justify-around sm:items-start items-center  sm:w-auto w-full"}>
                    <img src="/FGA_Tech_Logo.png" alt="FGA_Tech_Logo" className={"w-20 h-20 float-right mb-4"}/>
                    <Status className={"mb-6"}/>
                </div>
                <div className={"mb-4 min-w-[150px] sm:w-auto sm:text-left w-1/2 text-center"}>
                    <div className={"font-bold mb-3"}>Navigate</div>
                    <div className={"flex flex-col gap-2 "}>
                        {
                            navItems.map((navItem) => {
                                return <Link href={navItem.link} key={navItem.name} className={"cursor-pointer"}>
                                    {navItem.name}
                                </Link>
                            })
                        }
                    </div>
                </div>
                <div className={"mb-4 min-w-[150px] sm:w-auto sm:text-left w-1/2 text-center"}>
                    <div className={"font-bold mb-3"}>Products</div>
                    <div className={"flex flex-col gap-2"}>
                        {
                            products.map((product) => {
                                return <a href={product.link} key={product.name} className={"cursor-pointer"}>
                                    {product.name}
                                </a>
                            })
                        }
                    </div>

                </div>
                <div className={"flex flex-col sm:items-start items-center justify-start mt-4 sm:w-auto w-full" }>
                    <div className={"font-bold mb-3"}>Follow Us</div>
                    <div className={"flex"}>
                        {
                            socialMedia.map((social) => {
                                return <a href={social.href} key={social.alt} target={"_blank"} className={"cursor-pointer"}>
                                    <img src={social.image} alt={social.alt} className={"w-8 h-8 mr-2"}/>
                                </a>
                            })
                        }
                    </div>
                </div>
            </div>
            {/*  href="mailto:fgacyc.technology@gmail.com"*/}
            <div className={"text-center my-10 relative"}>
                <div>© {new Date().getFullYear()} <span>
                    <a href="mailto:fgacyc.technology@gmail.com" className={"text-blue-500"}>FGA TECH</a>
                </span>. All Rights Reserved.</div>
            </div>
        </div>
    )
};

export default Footer;
