import React from 'react'
import {motion} from "framer-motion"
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'
import dynamic from 'next/dynamic'

type Props = {
  experiences: Experience[];
}

function WorkExperience({experiences}: Props) {
  return (
    <motion.div 
          initial={{
          opacity: 0 
          }}
          whileInView={{opacity: 1}}
          transition={{
          duration: 1.5
          }}
          className="h-screen flex relative overflow-auto space-y-14 flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
            Experience
        </h3>
        <div className="w-full flex space-x-10 sm:h-[auto] sm:w-[auto] lg:h-[auto] lg:w-[auto] md:h-[auto] md:w-[auto] xl:h-[auto] xl:w-[auto] snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            {/*Experience Card*/}
            {experiences?.map(experience => (
              <ExperienceCard key = {experience._id} experience={experience}/>
            ))}
        </div>
    </motion.div>
  )
}
export default dynamic(() => Promise.resolve(WorkExperience), {ssr: false})