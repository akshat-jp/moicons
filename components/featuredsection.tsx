"use client"
import { useState } from "react";
import {ICONS} from "../utils/data"
import IconCard from "./iconcard";
import { SearchBar } from "./searchbar";

export function FeaturedSection(){

    const [query, setQuery] = useState("");
    const filtered = ICONS.filter(icon =>
    icon.name.toLowerCase().includes(query.toLowerCase())
  )
    
    return <div id="icons" className=" w-full border-b border-neutral-200  pb-[100px] border-b  flex flex-col items-center">

        {/* SEARCHBAR */}

        <SearchBar query={query} onChange={setQuery} />


        {/* ICONS */}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-13 md:gap-3 lg:gap-7 xl:gap-10">
            {filtered.map((icon)=>(
                <IconCard 
                    key={icon.id}
                    icon={icon}
                />
            ))}
        </div>
    </div>
}