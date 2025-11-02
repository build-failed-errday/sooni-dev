"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  // MainNavigationMenu,
  NavigationMenuDemo,
} from "@/components/main-navigation-menu";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-radial from-gray-700  to-gray-900 justify-start">
      <div className="w-full bg-transparent-[20%] text-white flex justify-between ">
        <span className="text-2xl mr-4 py-2 font-bold">sooni.dev</span>
        <span>status here</span>
      </div>
      <div className="flex justify-center">
        <NavigationMenuDemo />
      </div>
      <div className="">currently working on...</div>

      <div className="grid w-160 gap-2">
        <Textarea placeholder="What are you doing?" />
        <Button variant="outline" onClick={() => {}}>
          Send message
        </Button>
      </div>

      <div className="">I&apos;ve done ...</div>
      {/* 하스스톤 룰렛통 */}
    </div>
  );
}
