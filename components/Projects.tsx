/* eslint-disable react/jsx-key */
import React from 'react'
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '@/sanity';

type Props = {
  projects: Project[];
}

export default function Projects({projects}: Props) {
  return (
    <motion.div
    initial={{opacity:0,}} 
    whileInView={{opacity:1,}}
    transition={{duration: 1.5,}}
    className="h-screen w-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
        </h3>

        <div className="relative w-screen items-center text-center justify-center flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
        scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 sm:h-[700px] sm:w-[600px] md:h-[400px] md:w-[auto] xl:w-[auto] xl:h-[auto]">
          {projects?.map((project, i) => (
            <div key={project._id} className="flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44">
              <motion.img 
              initial={{opacity:0, y: -300,}} 
              transition={{duration: 1.2,}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              className="sm:h-[130px] sm:w-[130px] md:h-[140px] md:w-[140px] xl:w-[150px] xl:h-[150px] object-center"
              
              src={urlFor(project?.image).url()}  alt=""/>

              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Project {i+1} of {projects.length}: 
                    </span>{""}
                </h4>
                <h4 className="text-4xl font-semibold text-center">{project?.title}</h4>

                  <div className="flex items-center space-x-2 justify-center">
                    {project?.technologies.map((technology) => (
                    <img className="h-10 w-10"
                    key={technology._id}
                    src={technology.image && urlFor(technology.image).url()}
                    // src={urlFor(technology.image).url()}
                    alt=""
                    />
                   ))}
                   </div>

                  <div className="text-center sm:w-[600px] md:w-[auto] xl:w-[auto]">
                    {project?.summary}
                   
                  </div>
                  </div>
              </div>

          ))}
          
        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"/>

        
    </motion.div>
  );
}