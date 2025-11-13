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
import { CarouselDemo } from "@/components/carousel-demo";

export default function Home() {
  return (
    <>
      <AppSidebar />
      <div className="flex flex-1 flex-col min-h-screen bg-radial from-neutral-700  to-neutral-800">
        <header className="fixed-top w-full px-4 text-white flex justify-between items-center">
          <SidebarTrigger />
          <span className="text-2xl mr-4 py-2 font-bold cursor-pointer">
            sooni.dev
          </span>
          <span className="">status here</span>
        </header>
        <main>
          <section className=" p-8">
            <div className="flex justify-center">
              <CarouselDemo />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="w-full max-w-sm">
                <CardContent>
                  <div className="text-white">currently working on...</div>
                  <div className="grid gap-2">
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
                </CardContent>
              </Card>
              <CardDemo />
            </div>

            {/*  */}
            {/* 하스스톤 룰렛통 */}
          </section>
        </main>
      </div>
    </>
  );
}
