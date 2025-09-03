import slugify from "slugify"
import { db } from "./data/db"
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import type { movie } from "./types/movie";
//  import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



export default function Details() {
    const [movie, setMovie] = useState<movie | undefined>(undefined);

    const location = useLocation();
    const currentPath = location.pathname;
    const movieName = currentPath.slice(1);
    console.log(movieName);

    useEffect(() => {
        const found = db.find((m) => slugify(m.title) === movieName);
        setMovie(found);
    }, [movieName]);

    if (typeof movie != "undefined") {
        return (
            <div className="border-2 justify-center transition duration-300 ease-in-out    " style={{ display: "flex", alignItems: "center" }}>


                <img className="mr-10" height={50} width={200} src={movie.url} alt="" />
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>{movie.title}</AccordionTrigger>
                        <AccordionContent>
                            <p> {movie.description}</p>
                            <Button className="mt-10">  <a href={movie.link}>Trailer</a></Button>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>



            </div>
        )
    } else {

        return (
            <>
                bnana
            </>
        )
    }
}
