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
    
    return <div id="icons" className="bg-white w-full border-b border-neutral-200  pb-[100px] border-b  flex flex-col items-center">

        {/* SEARCHBAR */}

        <SearchBar query={query} onChange={setQuery} />


        {/* ICONS */}

        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-8 md:gap-5 lg:gap-10 xl:gap-11">
            {filtered.map((icon)=>(
                <IconCard
                    key={icon.id}
                    icon={icon}
                />
            ))}
        </div>
    </div>
}