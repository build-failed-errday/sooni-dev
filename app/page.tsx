"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  // MainNavigationMenu,
  NavigationMenuDemo,
} from "@/components/main-navigation-menu";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen bg-radial from-neutral-700  to-neutral-800">
      <div className="fixed-top w-full text-white flex justify-between items-center px-8">
        <span className="text-2xl mr-4 py-2 font-bold cursor-pointer">
          sooni.dev
        </span>
        <span className="">status here</span>
      </div>
      <div className="flex justify-center">
        <NavigationMenuDemo />
      </div>
      <div className="text-white">currently working on...</div>
      <div className="grid w-160 gap-2">
        <Textarea placeholder="What are you doing?" />
        <Button
          className=""
          variant="outline"
          onClick={() => {}}
        >
          Send message
        </Button>
      </div>

      <div className="">I&apos;ve done ...</div>
      {/* 하스스톤 룰렛통 */}
    </div>
  );
}
