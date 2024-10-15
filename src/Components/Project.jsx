import React from "react";
import { useTranslate } from "../TranslationProvider";
import Slider from "react-slick";

function Project() {
  const { response } = useTranslate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="h-screen flex justify-center bg-fy dark:bg-darkFy py-6 lg:py-16">
      <div className="max-w-[64rem] flex-col space-y-6 md:space-y-10 lg:space-y-12">
        <h1 className="flex text-mv dark:text-fy font-bold text-xl md:text-4xl md:leading-10 lg:text-5xl lg:leading-[58px] ">
          Projects
        </h1>
        <Slider {...settings}>
          {/* Project 1 */}
          <div className="flex flex-col md:flex-row bg-white dark:bg-[#2B2727] drop-shadow-lg rounded-lg max-w-[42rem] md:max-w-[64rem] max-h-[360px] md:max-h-[360px] items-center justify-start">
            <div className="flex flex-col md:flex-row">
              <img
                className="w-[220px] md:w-[280px] lg:w-[360px] h-[220px] md:h-[260px] lg:h-[360px] rounded-md md:rounded-none lg:rounded-s-lg"
                src="../assets/projects_1.jpg"
                alt="Project 1"
              />
              <div className="flex flex-col justify-center p-12 space-y-4">
                <h2 className="text-mv dark:text-[#C1BAED] font-bold text-lg md:text-2xl lg:text-3xl">
                  Workintech
                </h2>
                <p className="text-[#383838] dark:text-white text-sm md:text-base lg:text-lg w-full">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Assumenda inventore molestiae officia aspernatur quos minima
                  nobis quas quae officiis, vitae, quam aperiam quo fugiat sed
                  totam, unde amet aliquam tempora?
                </p>
                <div className="space-x-3">
                  <button className="bg-mv dark:bg-Pbtn text-white px-4 py-2 rounded-md">
                    React
                  </button>
                  <button className="bg-mv dark:bg-Pbtn text-white px-4 py-2 rounded-md">
                    Redux
                  </button>
                  <button className="bg-mv dark:bg-Pbtn text-white px-4 py-2 rounded-md">
                    Vercel
                  </button>
                </div>
                <div className="space-x-3">
                  <a className="text-[#120B39] dark:text-fy underline" href="#">
                    View Site
                  </a>
                  <a className="text-[#120B39] dark:text-fy underline" href="#">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex bg-white dark:bg-[#2B2727] drop-shadow-lg rounded-lg max-w-[32rem] md:max-w-[64rem] max-h-[200px] md:max-h-[360px]  items-center justify-start">
            <div className="flex flex-col md:flex-row">
              <img
                className="w-[220px] md:w-[280px] lg:w-[360px] h-[220px] md:h-[280px] lg:h-[360px] rounded-md md:rounded-none lg:rounded-s-lg"
                src="../assets/projects-2.jpg"
                alt="Project 2"
              />
              <div className="flex flex-col justify-center p-12 space-y-4">
                <h2 className="text-mv dark:text-[#C1BAED] font-bold text-lg md:text-2xl lg:text-3xl">
                  Journey
                </h2>
                <p className="text-[#383838] dark:text-white text-sm md:text-base lg:text-lg w-full">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni voluptatibus possimus culpa ducimus. Recusandae dicta
                  quae explicabo eum? Voluptatum amet quibusdam consequuntur
                  unde pariatur nostrum. Illo vero inventore voluptates aut!
                </p>
                <div className="space-x-3">
                  <button className="bg-mv dark:bg-Pbtn text-white px-4 py-2 rounded-md">
                    React
                  </button>
                  <button className="bg-mv dark:bg-Pbtn text-white px-4 py-2 rounded-md">
                    Redux
                  </button>
                  <button className="bg-mv dark:bg-Pbtn text-white px-4 py-2 rounded-md">
                    Vercel
                  </button>
                </div>
                <div className="space-x-3">
                  <a className="text-[#120B39] dark:text-fy underline" href="#">
                    View Site
                  </a>
                  <a className="text-[#120B39] dark:text-fy underline" href="#">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Project;
