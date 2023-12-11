import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const JoinCard = () => {
  return (
    <div className="mt-12 flex w-full flex-col items-center pb-12">
      <div className="w-[90%] rounded-xl bg-gradient-to-r from-slate-900 to-slate-50 pl-12 pt-7 text-white">
        <div className="flex font-black">
          <h2>FGA Tech Team</h2>
        </div>
        <div className="font-xl mb-6 mt-4 flex">
          <h5>We are waiting you, join us now!</h5>
        </div>
        <a href="https://forms.gle/LFfg5yYvkbNpr1Kq8" target="_blank">
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
