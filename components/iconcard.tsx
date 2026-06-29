"use client"

import {motion} from "motion/react"
import { useState } from "react";
import IconPreview from "./iconpreview";

interface IconCardProps {
    icon: {
        id: number;
        name: string;
        tag: string;
        code: string;
    }
    
}

export default function IconCard ({ icon }: IconCardProps) {

    const [copied, setCopied] = useState(false)

    return(
        <motion.div 
            
            className="group hover:border hover:border-neutral-100 bg-white w-[170px] h-[210px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col items-center justify-center gap-3 rounded-md manrope">
            {/* TOP ICON */}
            
            <div className="">
                <IconPreview type={icon.tag} />
            </div>

            {/* BOTTOM TEXT */}
            <div className="flex flex-col gap-6 items-center">
                {/* ICON NAME */}
                    <div className="font-semibold text-center">
                        {icon.name}
                    </div>
                {/* BOTTOM COPY  */}

                <div className="flex gap-3">

                    {/* COPY */}

                    <span onClick={()=>{

                        setCopied(true)

                        setTimeout(() => {
                            setCopied(false)
                        }, 1000);
                        
                        

                    }} className=" opacity-0 group-hover:opacity-100 bg-neutral-100 size-8 flex items-center justify-center rounded-md p-[5px] hover:bg-neutral-200 cursor-pointer transition duration:1.5"  >
                        {copied === false 
                        ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-copy">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
                            <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                        </svg> 
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" text-green-500 icon icon-tabler icons-tabler-outline icon-tabler-check">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>}
                    </span>

                    {/* TAILWINDCSS */}

                    <div className="items-center justify-center flex opacity-0 group-hover:opacity-100 transition duration-1.5 text-[15px] bg-neutral-100 py-[5px] px-[10px] rounded-md ">
                        Motion
                    </div>

                </div>
                    
            </div>
        </motion.div>
    );
}