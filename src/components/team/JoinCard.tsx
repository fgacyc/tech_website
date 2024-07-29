import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const JoinCard = () => {
  return (
    <div className="flex w-full flex-col items-center pb-12 sm:p-12 px-6 mt-8">
      <div className="w-full rounded-xl bg-gradient-to-r from-slate-900 to-slate-50 pl-12 pt-7 text-white">
        <div className="flex font-black">
          <h2>Join FGA Tech Team!</h2>
        </div>
        <div className="font-xl mb-6 mt-4 flex">
          <h5 className={"w-4/5"}>We’re looking for enthusiastic and skilled individuals to join our dynamic tech team! We have openings for Developers (Mobile, Full Stack, Frontend, Backend), Data Analysts, Project Managers, and UI/UX Designers. If you are passionate about technology and eager to use technological innovation that
            accelerates the completion of the M100 mission, we want you on our team. Apply now and help us create something extraordinary together!</h5>
        </div>
        <a href="https://www.fgacyc.com/get-involved" target="_blank">
          <div className="mb-6 inline-block w-auto rounded-full bg-blue-800">
            <div className="mb-2 ml-7 mr-5 mt-2 flex">
              <h5>Join Now</h5>
              <div className="ml-5 mt-1">
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default JoinCard;
