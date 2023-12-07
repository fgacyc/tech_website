import React from "react";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";

interface ProfileProps {
  name: string;
  position: string;
  profilePicPath: string;
}

export default function Profile(props: ProfileProps) {
  // return (
  //   <>
  //     <Card className="bg-transparent py-4">
  //       <CardHeader className="flex-col items-center px-4 pb-0 pt-2">
  //         {/* <p className="text-tiny font-bold uppercase">Daily Mix</p>
  //         <small className="text-default-500">12 Tracks</small> */}
  //         {/* <h4 className="text-large font-bold text-white">{props.title}</h4> */}
  //       </CardHeader>
  //       <CardBody className="items-center justify-between overflow-visible py-2">
  //         <Image
  //           alt="Card background"
  //           className="rounded-full object-cover"
  //           src={"/images/profile-pic/" + props.profilePicPath + ".png"}
  //           width={100}
  //           height={100}
  //         />
  //         <Button radius="full" className="mt-3">
  //           Learn More
  //         </Button>
  //       </CardBody>
  //     </Card>
  //   </>
  // );

  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          alt="Card background"
          className="rounded-full object-cover"
          src={"/images/profile-pic/" + props.profilePicPath + ".png"}
          width={200}
          height={200}
        />
        <div className="mt-4 font-bold">{props.name}</div>
        <div className="mt-1">{props.position}</div>
        <div className="flex flex-col items-center">
          <div className="mt-1 flex">
            <a href="https://www.facebook.com/FGACYC/" target="_blank">
              <img
                src="/icons/facebook.svg"
                alt="Facebook Icon"
                className="mr-2 h-5 w-5"
              />
            </a>
            <a href="https://www.youtube.com/user/fgacyc" target="_blank">
              <img
                src="/icons/youtube.svg"
                alt="Youtube Icon"
                className="mr-2 h-5 w-5"
              />
            </a>

            <a href="https://www.instagram.com/fgacyc/" target="_blank">
              <img
                src="/icons/instagram.svg"
                alt="Instagram Icon"
                className="mr-2 h-5 w-5"
              />
            </a>
            <a href="https://www.instagram.com/fgacyc/" target="_blank">
              <img
                src="/icons/instagram.svg"
                alt="Instagram Icon"
                className="mr-2 h-5 w-5"
              />
            </a>
            <a href="https://www.instagram.com/fgacyc/" target="_blank">
              <img
                src="/icons/instagram.svg"
                alt="Instagram Icon"
                className="mr-2 h-5 w-5"
              />
            </a>
            <a href="https://www.instagram.com/fgacyc/" target="_blank">
              <img
                src="/icons/instagram.svg"
                alt="Instagram Icon"
                className="h-5 w-5"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
