import React from "react";
import Link from "next/link";

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
            image: "/icons/github.png",
            alt: "GitHub",
            href: "https://github.com/fgacyc",
        },
        {
            image: "/icons/instagram.png",
            alt: "Instagram",
            href: "https://www.instagram.com/fga_tech/"
        },
        {
            image: "/icons/facebook.png",
            alt: "Facebook",
            href: "https://www.facebook.com/FGATECH/"
        },
        {
            image: "/icons/thread.png",
            alt: "Twitter",
            href: "https://twitter.com/fga_tech"
        },
        {
            image: "/icons/youtube.png",
            alt: "YouTube",
            href: "https://www.youtube.com/channel/UCX1V3f5zXZy0JZQJ6rX4aJQ"
        },
    ]

    return (
        <div className={"text-white px-12 pt-12"}>
            <div className={"flex justify-between flex-wrap"}>
                <img src="/FGA_Tech_Logo.png" alt="FGA_Tech_Logo" className={"w-20 h-20 float-right"}/>
                <div>
                    <div className={"font-bold mb-3"}>Navigate</div>
                    <div className={"flex flex-col gap-2"}>
                        {
                            navItems.map((navItem) => {
                                return <Link href={navItem.link} key={navItem.name} className={"cursor-pointer"}>
                                    {navItem.name}
                                </Link>
                            })
                        }
                    </div>
                </div>
                <div className={""}>
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
                    <div></div>
                    <div>
                       <a href="https://status.fgacyc.com/status/host-status">
                           <span className={"h-2 w-2 bg-green-500 rounded-full inline-block mr-2"}></span>
                           System Status: <span className={"text-green-500"}>Operational</span>
                       </a>
                    </div>
                </div>
                <div>© {new Date().getFullYear()} FGA TECH. All Rights Reserved.</div>
            </div>
        </div>
    )
};

export default Footer;
