import  React from "react"
import MMM from './MMM.avif'
import ASD from './ASD.jpg'
import Gts from './Gts.jpg'
import GGG from './GGG.avif'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]} className="w-full cursor-pointer">
       <CarouselContent>
        <CarouselItem>
        <div className="p-1 flex justify-center pb-4">
                {/* <p className="font-bold mt-14 mr-14 text-white">Class Name (Salwar Kameez)</p> */}
                {/* <span>(colour)</span> */}
                <img className="h-[450px] w-[1430px]" src={ASD}/>
               </div>
        </CarouselItem>
        <CarouselItem>
            <div className="p-1 flex justify-center">
            <img className="h-[450px] w-[1430px]" src={MMM}/>
            </div>
        </CarouselItem>
        <CarouselItem>
        <div className="p-1 flex justify-center">
            <img className="h-[450px] w-[1430px]" src={Gts}/>
            </div>
        </CarouselItem>
        <CarouselItem>
        <div className="p-1 flex justify-center">
            <img className="h-[450px] w-[1430px]" src={GGG}/>
            </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
