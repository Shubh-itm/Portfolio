import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from 'next/link';
import { PageInfo } from "../typings";
import { urlFor } from '@/sanity'
import dynamic from 'next/dynamic';
import Image from 'next/image';

type Props = {
    pageInfo: PageInfo;
}

function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter ({        
        
        words:[
            `Hey, My Name is ${pageInfo?.name}`, 
            "Looking for a job change", 
            "<React Js developer/>",
        ],
        loop: true,
        delaySpeed:700,
    })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-h">
        <BackgroundCircles/>
        
        <Image className="relative rounded-full h-32 w-32 mx-auto object-cover" height={32} width={32}
        src={urlFor(pageInfo?.heroImage).url()} alt=""
        />
         
        <div className="z-20">
            <h2 className="pt-5 text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                {pageInfo?.role}
            </h2>
            <h1 className="pt-6 text-5xl lg:text-3xl font-semibold px-10">
            <span className ="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A"/>
            </h1>
            

            <div className="pt-12">

                <Link href="#about">
                <button className="heroButton">About</button>
                </Link>

                <Link href="#experience">
                <button className="heroButton">Experience</button> 
                </Link>

                <Link href="#skills">
                <button className="heroButton">Skills</button>
                </Link>

                <Link href="#projects">
                <button className="heroButton">Projects</button>
                </Link>
                
            </div>

        </div>
        
    </div>
  )
}
export default dynamic(() => Promise.resolve(Hero), {ssr: false})