import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings';
import { urlFor } from '@/sanity';
import dynamic from 'next/dynamic';

type Props = {
  skill:Skill;
    directionLeft?: boolean;
}

function Skill({skill, directionLeft}: Props) {
  return (
    <div className="group relative flex cusrsor-pointer">
      {skill.image &&(
    <motion.img
    initial={{
        x:directionLeft ? -200 : 200,
        opacity:0,
    }}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0,}}
    src={urlFor(skill?.image).url()}
    className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
    />
    )}

    <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
        <div className="text-2xl font-bold text-black opacity-100">{skill.progress}%</div>
        </div>
    </div>

    </div>
  )
}
export default dynamic(() => Promise.resolve(Skill), {ssr: false})