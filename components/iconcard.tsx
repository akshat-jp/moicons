"use client"

import {motion, AnimatePresence} from "motion/react"
import { useEffect, useState } from "react";
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
    const [loading, setLoading] = useState(false)
    const [flash, setFlash] = useState(false)


    const handleCopy = async () => {

            setFlash(true);
            setTimeout(() => setFlash(false), 300);

        if (loading) return;
        setLoading(true);

        try {
            const res = await fetch(`/api/icon-source?path=${encodeURIComponent(icon.code)}`);
            const data = await res.json();

            if (data.code) {
                await navigator.clipboard.writeText(data.code);
                setCopied(true);
                setTimeout(() => setCopied(false), 1000);
            } else {
                console.error(data.error);
            }
        } catch (err) {
            console.error("Copy failed:", err);
        } finally {
            setLoading(false);
        }
    }

    return(
        <motion.div
                className="cursor-pointer group hover:shadow-sm hover:border hover:border-neutral-200 w-[130px] 
                h-[150px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col items-center justify-center gap 
                rounded-md manrope"
                
                animate={{ 
                    backgroundColor: flash ? "oklch(0.922 0 0)" : "#ffffff",
                    borderColor: copied ? "oklch(0.922 0 0)" : "",
                }}
                
                transition={{ duration: 0.5 }}
                onClick={handleCopy}

            >

            

            {/* TOP ICON */}
            
            <div className="">
                <IconPreview type={icon.tag} />
            </div>

            {/* BOTTOM TEXT */}
            <div className=" w-[60px] h-full  flex flex-col gap-6 items-center justify-center">
                {/* ICON NAME */}
                    <div className="transition duration:500 font-semibold text-center text-neutral-500">
                        <AnimatePresence mode="wait">
                            {!copied ? (
                                <motion.div
                                    key="name"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.1 }}
                                >
                                    {icon.name}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="copied"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.1 }}
                                    className="flex items-center justify-center gap-1 border border-neutral-100 rounded-md px-3 py-2 bg-neutral-50"
                                >
                                    <span>Copied</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 icon icon-tabler icons-tabler-outline icon-tabler-check">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                                    
            </div>
        </motion.div>
    );
}

