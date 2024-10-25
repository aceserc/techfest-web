"use client";
import { CountdownTimer } from "@/components/globals/countdown-timer";
import ScrollDownButton from "@/components/globals/scrolldown-botton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Floating3DModels from "./floating-3d-models";

export const HeroSection = () => {
  return (
    <>
      <section
        id="hero-section"
        className="container w-full min-h-[800px] sm:min-h-[90vh] flex items-center justify-center relative">
        <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32 z-10">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="text-sm py-2">
              <span className="mr-2 text-primary">
                <Badge>v7.0</Badge>
              </span>
              <span>
                Countdown begins...
              </span>
            </Badge>

            <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
              <h1>
                Experience the ACES
                <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                  Techfest
                </span>
                v7.0
              </h1>
            </div>

            <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, earum cupiditate possimus molestiae ad beatae et
            </p>

            <div className="space-y-4 md:space-x-4">
              <CountdownTimer targetDate="2025-1-31" />
              <Button className="w-5/6 md:w-1/4 group/arrow text-muted-foreground" variant={"link"}>
                Explore v7.0
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>

            </div>
          </div>
        </div>
        <ScrollDownButton
          scrollTo="#techfest"
        />
        <Floating3DModels />
      </section>
    </>
  );
};