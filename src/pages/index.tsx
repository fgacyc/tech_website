import {IoIosArrowForward} from "react-icons/io";
import React from "react";
import UIHead from "~/components/head";
import {digitalSolutions} from "~/config";
import Image from "next/image";

export default function Home() {





  return (
    <>
        <UIHead title={"FGA TECH"}/>
        <main className="bg-[#1D2129] text-white">
            {/*  section1 landing */}
            <img src="/images/index/bg.png" alt="background"
                 className={"absolute bottom-1/2 transform translate-y-1/2 sm:w-1/2 -z-0"}/>
            <img src="/images/index/phone-3.png" alt="phones"
                 className={"absolute right-12 bottom-1/2 transform translate-y-1/2 sm:block hidden"}/>
            <div
                className="font-bold sm:text-[48px] text-[32px] text-white h-[calc(100vh-88px)] flex flex-col items-start justify-center relative z-50 sm:px-12 px-6">
                {/*<div className={""}>*/}
                {/*    Spreading the Gospel,*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    One Byte at a Time*/}
                {/*</div>*/}
                {/*<div className={"text-base text-[#9CADCE] mt-4 "}>*/}
                {/*    Empowering Churches Worldwide with Innovative Technology Solutions to Spread God&#39;s Word*/}
                {/*</div>*/}

                <div className={""}>
                    Using technological innovation that
                </div>
                <div>
                    accelerates the completion of the M100 mission.
                </div>
                <div className={"text-base text-[#9CADCE] mt-4 "}>
                    Empowering Church&#39;s efficiency with Innovative Technology Solutions to Spread God&#39;s Word
                </div>

            </div>

            {/*  section2  fag tech info */}
            <div className={"flex items-center flex-wrap sm:px-12 px-6"}>
                <img src="/images/index/desktop.png" alt="desktop" className={"sm:w-1/2 w-full mb-8"}/>
                <div className={"text-white sm:pl-4"}>
                    <div className={"sm:text-[48px] text-[32px]"}>FGA Technology</div>
                    <div className={"my-8"}>
                        We are committed to providing comprehensive digital solutions for the church, including software
                        development, website design, network security and other services. Through innovative technology
                        and professional team, we help the church realize digital transformation and improve its ability
                        to preach the gospel.
                    </div>
                    <button className={"rounded-full bg-[#1A2F8A] px-4 py-2 flex items-center "}>
                        Learn more
                        <IoIosArrowForward className={"ml-5"} />
                    </button>
                </div>
            </div>

            {/*  section3 Digital solutions */}
            <div className={"flex flex-col items-center my-32 sm:px-12 px-6"}>
                <div className={"sm:text-[48px] text-[32px]"}>Digital solutions</div>
                <div className={"mt-2 mb-8"}>We provide a variety of efficient digital solutions to help our church improve
                    efficiency and user experience.
                </div>
                <div className={"grid sm:grid-cols-3 grid-cols-2 gap-8 w-full "}>
                    {
                        digitalSolutions.map((solution) => {
                            return <div key={solution.title} className={"flex flex-col items-center"}>
                                <Image src={solution.img} alt={solution.title}
                                       width={300} height={300}
                                       className={"cursor-pointer object-cover rounded-lg"}/>
                                <div className={"sm:text-[24px] text-base mt-4 mb-4"}>{solution.title}</div>
                            </div>
                        })
                    }
                </div>
            </div>


            {/*  section4  learn more*/}
            <div className={"flex flex-col items-center my-32 px-12"}>
                <div className={"text-[48px]"}>Learn more about us</div>
                <div className={"mt-2 mb-8"}>Be part of our tech community. subscribe to our newsletter  and stay abreast
                    of the latest industry trends.
                </div>
                <div className={""}>
                    <input type="email" className={"rounded-full bg-[#2F323A] px-4 py-2 w-[300px] my-4"}
                           placeholder={"Enter your email address"}/>
                    <button className={"rounded-full bg-[#1A2F8A] px-4 py-2 sm:ml-6"}>Subscribe</button>
                </div>
            </div>

        </main>
    </>
  );
}
