import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react"
import { db } from "./data/db"

export default function CarouselDemo() {
  const [name, setName] = useState<string>("lord of the rings");
  const [rate, setRate] = useState<number>(0);

  const filteredMovies = db.filter(
    (p) =>
      (name.trim() === "" || p.title.toLowerCase().includes(name.toLowerCase())) &&
      p.rate >= rate
  );
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {filteredMovies.map((p, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <img className="max-h-64 object-contain" src={p.url} alt={p.title} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <form className="flex flex-col mt-2">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="search by name" className="mb-2 px-2 py-1 border border-gray-300 rounded" />
        <input value={rate} onChange={(e) => setRate(Number(e.target.value))} placeholder="search by rate" className="mb-2 px-2 py-1 border border-gray-300 rounded" type="number" />
      </form>
    </div>
  )
}
