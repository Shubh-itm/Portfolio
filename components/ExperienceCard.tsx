import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings';
import { urlFor } from '@/sanity';
import dynamic from 'next/dynamic';
import Image from 'next/image'

type Props = {
    experience: Experience;
}

function ExperienceCard({experience}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center  space-y-auto flex-shrink-0  sm:h-[650px] sm:w-[600px] md:h-[550px] md:w-[700px]  xl:h-[auto] xl:w-[800px] 
    snap-center bg-[#292929] py-2 px-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{duration: 1.2}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className="rounded-full sm:h-[30px] sm:w-[30px] md:h-[40px] md:w-[40px] xl:w-[50px] xl:h-[50px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
        />

        <div className="px-0 md:px-10">
            <h4 className="text-2xl font-light">Quality Analyst</h4>
            <div className="font-bold text-1xl mt-1">Amazon</div>
            <div className="flex space-x-4 my-1">
                
                {experience.technologies.map((technology) => (
                    <Image  key={technology._id}
                    className="h-6 w-6 rounded-full" height={6} width={6}
                    src={urlFor(technology.image).url()}
                    alt=""
                    />
                ))}
            </div>

            <div className="uppercase py-1 text-gray-300">
                {new Date(experience.dateStarted).toDateString()} - {" "}
                {experience.isCurrentlyWorkingHere ? "Present": new Date(experience.dateEnded).toDateString()}
                </div>

            <ul className="list-disc space-y-1 m-1 text-lg text-left max-h-96 overflow-y-auto sm:text-md p-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
                {experience.points.map((point,i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default dynamic(() => Promise.resolve(ExperienceCard), {ssr: false})