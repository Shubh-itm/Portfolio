import { urlFor } from '@/sanity'
import { PageInfo } from '../typings'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  pageInfo: PageInfo
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div
       initial={{
       opacity: 0, 
       }}
       whileInView={{opacity: 1,}}
       transition={{
       duration: 1.5,
       }}
       className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>
        <motion.img
        initial={{
          x:-200,
          opacity: 0, 
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{opacity: 1, x:0,}}
        viewport={{once:true,}}
        className="mt-10 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px] "
        src={urlFor(pageInfo?.profilePic).url()}
        />
        <div className="space-y-2 px-0 md:px-10">
          <h4 className="text-3xl font-semibold">Here is a{" "} <span className="underline decoration-[#F7AB0A]/50">little</span>{" "} background 
          </h4>
          
          <div>
          <div className="text:base text-justify">{pageInfo?.backgroundInformation}
          </div>
          </div>
          
        </div>
    </motion.div>
  )
}