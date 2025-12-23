"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  // MainNavigationMenu,
  NavigationMenuDemo,
} from "@/components/main-navigation-menu";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardDemo } from "@/components/card-demo";
import { SkillsCarousel } from "@/components/skills-carousel";
import { databases, frameworks, languages, tools } from "@/data/skill-items";
import { useSkill } from "@/stores/useSkill";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { TSkillItem } from "@/types/TSkillItem";
import { useStatus } from "@/stores/useStatus";

export default function Home() {
  return (
    <>
      {/* <AppSidebar /> */}
      <div className="relative flex flex-1 flex-col min-h-screen bg-radial from-neutral-700  to-neutral-800">
        <header className="absolute z-99 fixed-top w-full px-4 text-white flex justify-center items-center">
          {/* <SidebarTrigger /> */}
          <span className="text-2xl mr-4 py-2 font-bold cursor-pointer">
            sooni.dev
          </span>
        </header>
        <main className="h-full ">
          <div className="h-full flex divide-x items-center">
            <div className="h-1/3 flex-1 flex justify-center items-center">
              <span className="text-white">Skills</span>
            </div>
            <div className="h-1/3 flex-1 flex justify-center items-center">
              <span className="text-white">Contributions</span>
            </div>
            <div className="h-1/3 flex-1 flex justify-center items-center">
              <span className="text-white">Contact</span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
