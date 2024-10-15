import React from "react";
import { useTranslate } from "../TranslationProvider";
import ProfileImg from "../assets/profile.png";

function Profile() {
  const { response } = useTranslate();

  return (
    <section className="h-screen flex bg-mv dark:bg-darkMv justify-center x-space shadow-2xl">
      <div className="flex-col mp ">
        <h1 className="flex text-fy font-bold text-3xl md:text-6xl md:leading-10 lg:text-5xl lg:leading-[58px] mb-14">
          {response?.profile}
        </h1>
        <div className="flex flex-col bg-fy dark:bg-darkFy p-8 rounded-md md:flex-row lg:flex-row space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6 shadow-lg min-h-[28rem] md:min-h-0">
          <div className="gap-10 md:gap-16 lg:gap-28 space-y-4 lg:space-y-8 ">
            <h3 className="text-mv dark:text-white font-bold text-2xl lg:text-3xl">
              {response?.basicInformation}
            </h3>
            <div className="flex gap-3">
              <div className="space-y-2 lg:space-y-4">
                <p className="flex text-mv dark:text-white text-xs md:text-sm lg:text-base font-bold">
                  Birth Date
                </p>
                <p className="flex text-mv dark:text-white text-xs md:text-sm lg:text-base font-bold">
                  {response?.currentAddress}
                </p>
                <p className="flex text-mv dark:text-white  text-xs md:text-sm lg:text-base font-bold">
                  {response?.educational}
                </p>
                <p className="flex text-mv dark:text-white  text-xs md:text-sm lg:text-base font-bold">
                  {response?.preferredRole}
                </p>
              </div>
              <div className="space-y-2 lg:space-y-4">
                <p className="text-mv dark:text-white text-xs md:text-sm lg:text-base">
                  05.08.1998
                </p>
                <p className="text-mv dark:text-white text-xs md:text-sm lg:text-base">
                  Ankara
                </p>
                <p className="text-mv dark:text-white text-xs md:text-sm lg:text-base">
                  Gazi Ünv. Statistics
                </p>
                <p className="text-mv dark:text-white text-xs md:text-sm lg:text-base">
                  Frontend, UI
                </p>
              </div>
            </div>
          </div>
          <img
            className="hidden lg:flex rounded-xl drop-shadow-lg w-80 "
            src={ProfileImg}
            alt=""
          />
          <div className=" w-[220px] md:w-[260px] lg:w-[400px] h-[140px] md:h-[260px] lg:h-[300px] space-y-1 md:space-y-2 lg:space-y-4">
            <h3 className="text-mv dark:text-white font-bold text-2xl lg:text-3xl mt-5 md:mt-0">
              {response?.aboutMe}
            </h3>
            <p className="text-mv dark:text-white font-normal text-xs md:text-sm lg:text-lg ">
              I am a technically skilled Java developer. In addition to Java and
              Spring Boot on the back end, I am proficient in JavaScript and
              React on the front end. Over the past year, I have undertaken
              intensive training in these languages and developed more than 10
              projects. I am eager to start as a developer in a corporate firm,
              gain experience in challenging projects, and, in the long run, aim
              to lead software teams and take on managerial roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
