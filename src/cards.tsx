import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react"
import { Button } from "@/components/ui/button"


const db = [
  {
    url: "/Untitled.jpeg",
    rate: 3,
    title: "lord of the rings",

  },
  { url: "/ems.jpeg", rate: 4, title: "kingdom of heaven" },
  { url: "/dunkirk.jpeg", rate: 2, title: "dunkirk" },
  { url: "/allquite.jpeg", rate: 1, title: "all quite on the westren front" },



]





export default function CarouselDemo() {
  const [name, setName] = useState<string>();
  const [rate, setRate] = useState<number>(0);
  function found(): void {

    setMov(db);
    setMov(db.filter(p => (p.title == name)))

  }


  function ButtonOutline() {
    return <Button variant="outline" onClick={() => found()} type="button">filter</Button>
  }
  const [mov, setMov] = useState([
    {
      url: "/Untitled.jpeg",
      rate: 3,
      title: "lord of the rings",

    },
    { url: "/ems.jpeg", rate: 4, title: "kingdom of heaven" },
    { url: "/dunkirk.jpeg", rate: 2, title: "dunkirk" },
    { url: "/allquite.jpeg", rate: 1, title: "all quite on the westren front" },



  ])

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {mov.map((p, index) => (
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
        <input value={rate} onChange={(e) => setRate(Number(e.target.value))} placeholder="rate" className="text-center mt-1 mb-1" type="text" />
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="name" className="text-center mt-1 mb-1" type="text" />

        <ButtonOutline />
      </form>
    </div>
  )
}
