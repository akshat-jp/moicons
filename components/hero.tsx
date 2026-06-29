"use client"
import { useState } from "react";

export function Hero(){

    const [selected, setSelected] = useState("npm");

    const [copied, setCopied] = useState(false);

    return(
        <div className=" mx:auto relative border-b border-neutral-200 pb-10 w-full h-[100px] flex flex-col gap-15 justify-center items-center manrope  h-[900px] selection:bg-neutral-900 selection:text-white ">
            
            
            {/* NEW ICONS */}
            {/* <div className="absolute border border-neutral-100 bg-white rounded-md px-[15px] py-[5px]  top-30 left-70 -rotate-10 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                <span className="font-semibold">50+ new icons</span>
            </div> */}
            
            {/* HERO TEXT */}

            <div className="flex flex-col gap-10 text-center px-[50px] md:px-[200px] lg:px-[300px]">
                <div className="flex flex-col gap-1">
                    <span className="text-[45px] font-bold">Beautiful Animated Icons</span>
                    <span className="text-[24px] font-bold "><span className="">Browse</span> animations with copy-ready code.</span>
                </div>
                <p className="text-[18px] font-semibold text-neutral-500">A collection of smooth animated icons for your next project, free to use and easy to customize. Feel free to use them and give feedback.</p>
            </div>

            {/* Buttons */}

            <div className="flex flex-col md:flex-row  gap-20 ">
                <div className="flex gap-2 items-center justify-center bg-black text-white px-[15px] py-[9px] rounded-md cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg></div>
                    <span className="text-[17px] font-semibold">Contribute here!</span>
                </div>
                
                <div className="flex gap-2 items-center justify-center rounded-md px-[11px] py-[9px] cursor-pointer shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg></div>
                    <span className="text-[17px] font-semibold">Contribute here!</span>
                </div>
            </div>

            {/* INSTALL LIBRARY */}

            <div className="w-[350px] md:w-[460px] flex flex-col gap-1 pt-[50px]">
                <div className="flex gap-2 font-semibold text-[17px]">
                    <div onClick={()=>{
                        setSelected("pnpm")
                    }} className={` hover:bg-neutral-300 cursor-pointer rounded-md px-[10px] py-[4px] ${selected === "pnpm" ? `bg-neutral-600 hover:bg-neutral-600 text-white` : `bg-neutral-200 `} transition duration:1.5 `}> pnpm </div>
                    <div onClick={()=>{
                        setSelected("npm")
                    }} className={` hover:bg-neutral-300 cursor-pointer rounded-md px-[10px] py-[4px] ${selected === "npm" ? `bg-neutral-600 hover:bg-neutral-600 text-white`  : `bg-neutral-200 `} transition duration:1.5 ` }>npm</div>
                    <div onClick={()=>{
                        setSelected("yarn")
                    }} className={` hover:bg-neutral-300 cursor-pointer rounded-md px-[10px] py-[4px] ${selected === "yarn" ? `bg-neutral-600 hover:bg-neutral-600 text-white` : `bg-neutral-200 `} transition duration:1.5 ` }>yarn</div>
                    <div onClick={()=>{
                        setSelected("bun")
                    }} className={` hover:bg-neutral-300 cursor-pointer rounded-md px-[10px] py-[4px] ${selected === "bun" ? `bg-neutral-600 hover:bg-neutral-600 text-white` : `bg-neutral-200 `} transition duration:1.5 `}>bun</div>
                </div>
                <div className="flex justify-between items-center bg-neutral-100 py-[2px] px-[10px] ">
                    <span className="text-neutral-600">{selected === "pnpm"
                    ? "pnpm add motion"
                    : selected === "npm"
                    ? "npm intall motion"
                    : selected === "yarn"
                    ? "yard add motion"
                    : "bun add motion"
                    }</span>

                    <span onClick={()=>{

                        setCopied(true)

                        setTimeout(() => {
                            setCopied(false)
                        }, 2000);
                        
                        selected === "pnpm" 
                        ? navigator.clipboard.writeText("pnpm add motion")
                        : selected === "npm"
                        ? navigator.clipboard.writeText("npm install motion")
                        : selected === "yarn"
                        ? navigator.clipboard.writeText("yarn add motion")
                        : navigator.clipboard.writeText("yarn add motion")

                        

                    }} className="bg-neutral-200 rounded-md p-[5px] hover:bg-neutral-300 cursor-pointer transition duration:1.5"  >
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

                </div>
            </div>

        </div>
    );
}