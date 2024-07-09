import React from "react";
import Link from "next/link";
import Status from "~/components/status";
import {useRouter} from "next/router";

const Footer = () => {
    const navItems = [
        {name: "Blog", link: "/blog"},
        {name: "Products", link: "/products"},
        {name: "Team", link: "/team"},
        {name: "About", link: "/about"}
    ]

    const products = [
        {
            name: "Product 1",
            link: "/product1"
        },
        {
            name: "Product 2",
            link: "/product2"
        },
        {
            name: "Product 3",
            link: "/product3"
        }
    ]

    const socialMedia = [
        // github facebook youtube instagram thread
        {
            image: "/icons/github.svg",
            alt: "GitHub",
            href: "#"
        },
        {
            image: "/icons/instagram.svg",
            alt: "Instagram",
            href: "#"
        },
        {
            image: "/icons/facebook.svg",
            alt: "Facebook",
            href: "#"
        },
        {
            image: "/icons/thread.svg",
            alt: "Twitter",
            href: "#"
        },
        {
            image: "/icons/youtube.svg",
            alt: "YouTube",
            href: "#"
        },
    ]
    const router = useRouter()
    const path = router.pathname
    const isHidden = path === "/terms-of-service" || path === "/privacy-policy"

    return (
        <div className={`text-white sm:px-12 px-6 pt-12 ${isHidden && "hidden"}`}>
            <div className={"flex justify-between flex-wrap"}>
                <img src="/FGA_Tech_Logo.png" alt="FGA_Tech_Logo" className={"w-20 h-20 float-right"}/>
                <div className={"mb-4"}>
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
                <div className={"mb-4"}>
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
                <div className={"flex flex-col items-start justify-start"}>
                    <div className={"font-bold mb-3 relative left-2"}>Follow Us</div>
                    <div className={"flex"}>
                        {
                            socialMedia.map((social) => {
                                return <a href={social.href} key={social.alt}>
                                    <img src={social.image} alt={social.alt} className={"w-8 h-8 mx-2"}/>
                                </a>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={"text-center my-10 relative"}>
                <div className={"absolute left-0"}>
                    <Status className={"sm:block hidden "}/>
                </div>
                <Status className={"sm:hidden block mb-2"}/>
                <div>© {new Date().getFullYear()} FGA TECH. All Rights Reserved.</div>
            </div>
        </div>
    )
};

export default Footer;
