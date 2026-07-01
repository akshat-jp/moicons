"use client"
import { useState } from "react";

export function Hero({onBrowse}: { onBrowse: () => void }){

    const [selected, setSelected] = useState("npm");

    const [copied, setCopied] = useState(false);

    return(
        <div className=" mx:auto relative border-b border-neutral-200  pb-10 w-full h-[100px] flex flex-col gap-15 justify-center items-center manrope  h-[900px] selection:bg-neutral-900 selection:text-white ">
            
            
            {/* NEW ICONS */}
            {/* <div className="absolute border border-neutral-100 bg-white rounded-md px-[15px] py-[5px]  top-30 left-70 -rotate-10 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                <span className="font-semibold">50+ new icons</span>
            </div> */}
            
            {/* HERO TEXT */}

            <div className="flex flex-col gap-10 text-center px-[50px] md:px-[200px] lg:px-[300px]">
                <div className="flex flex-col gap-1">
                    <span className="text-[45px] font-bold">Beautiful Animated Icons</span>
                    <span className="text-[24px] font-bold "><span className="cursor-pointer bg-neutral-200 px-[6px] rounded-md" onClick={onBrowse}>Browse</span> animations with copy-ready code.</span>
                </div>
                <p className="text-[18px] font-semibold text-neutral-500">A collection of smooth animated icons for your next project, free to use and easy to customize. Feel free to use them and give feedback.</p>
            </div>

            {/* Buttons */}

            <div className="  ">
                            
                <div 
                    onClick={()=>{}}
                    className="flex gap-2 items-center justify-center rounded-md px-[100px] py-[10px] cursor-pointer shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg></div>
                    <div onClick={onBrowse} className="text-[17px] font-semibold">Browse Icons</div>
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


            {/* CONTRIBUTE */}
            
            <div className="bg-red-200 w-[350px] md:w-[460px] flex items-center justify-center border-l">
                <div>
                    hi there
                </div>
            </div>

        </div>
    );
}