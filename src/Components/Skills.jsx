import React from 'react';
import { useTranslate } from '../TranslationProvider';

function Skills() {
  const { response } = useTranslate();

  
  const skills = [
    { name: 'JAVA SCRIPT', image: '../assets/java.jpg', link: '/' },
    { name: 'REACT', image: '../assets/react.jpg', link: '/' },
    { name: 'REDUX', image: '../assets/redux.jpg', link: '/' },
    { name: 'NODE', image: '../assets/node.jpg', link: '/' },
    { name: 'VS CODE', image: '../assets/vsCode.jpg', link: '/' },
    { name: 'FIGMA', image: '../assets/figma.jpg', link: '/' }
  ];

  return (
    <section className='dark:bg-[#2B2727] py-6 lg:py-16 '>
      <div className='flex gap-8 md:gap-16 lg:gap-[8rem] justify-center'>
        <p className='flex text-[#4832D3] font-bold dark:text-fy text-xl md:text-3xl md:leading-10 lg:text-5xl lg:leading-[58px]'>
          {response?.skills}
        </p>
       
        <nav className='grid md:grid-cols-2 flex-col items-center justify-center gap-y-4 md:gap-y-8 md:gap-x-16 lg:gap-y-10 lg:gap-x-28'>
          
          {skills.map((skill, index) => (
            <ul key={index} className='flex gap-1 md:gap-3 lg:gap-4'>
              <img className='drop-shadow-lg w-[40px] md:w-[80px] lg:w-[120px] h-[40px] md:h-[80px] lg:h-[120px] rounded-md' src={skill.image} alt={skill.name} />
              <a className="flex font-int text-[#777777] font-medium items-center dark:text-white lg:text-2xl" href={skill.link}>{skill.name}</a>
            </ul>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default Skills;
