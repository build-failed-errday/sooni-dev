import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { TSkillItem } from "@/types/TSkillItem";

export function SkillsCarousel(props: { data: TSkillItem[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={{
        // align: "",
        loop: props.data.length > 1,
      }}
      plugins={[plugin.current]}
      className="w-full max-w-sm "
      onMouseEnter={() => plugin.current?.stop()}
      onMouseLeave={() => {
        if (plugin.current && props.data.length > 1) {
          plugin.current.reset();
          plugin.current.play();
        }
      }}
    >
      <CarouselContent className="">
        {props.data.map((lang, index) => (
          <CarouselItem
            key={index}
            className="flex justify-center h-12 w-48"
          >
            <Card className="h-12 w-48 p-0 items-center justify-center">
              <CardContent className="flex p-0 items-center justify-center">
                <span className="text-2xl font-semibold">{lang.skillName}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
