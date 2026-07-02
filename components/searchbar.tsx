"use client" 

import { easeInOut, motion } from "motion/react"
import { useState } from "react";

export function SearchBar({query, onChange}: { query: string, onChange: (v: string) => void }){

    

    return(
        <motion.div 
            whileHover="animate"
            className=" w-full px-2 bg-white py-[4px] rounded-xl mb-[60px] mt-[100px] flex items-center gap-1 manrope border border-neutral-100 shadow-md">


    {/* LEFT */}

            <div className="">
                <motion.svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-7.5 -7.5 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-neutral-500 icon icon-tabler icons-tabler-outline icon-tabler-search">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <motion.path
                        initial={{
                            x : 0,
                            y : 0,
                            scale : 1
                        }} 
                        variants={{
                            animate : {
                                scale : [1,1.1,1],
                                x : [0,-0.7,0],
                                y : [0,-0.7,0]
                            }
                        }}
                        transition={{
                            duration : 0.5,
                            ease : easeInOut
                        }}
                        d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <motion.path 
                        d="M21 21l-6 -6" />
                </motion.svg>
            </div>

    {/* RIGHT */}

            <input value={query} onChange={(e)=>{onChange(e.target.value)}} type="text" placeholder="Search.."  className="w-full bg-transparent outline-none text-[21px] font-semibold text-neutral-500 placeholder:font-semibold placeholder:text-neutral-400  "></input>
            {}
                            

        </motion.div>
    );
}