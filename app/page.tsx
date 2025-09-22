"use client"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-radial from-gray-700  to-gray-900">
      <div className="text-white "> sooni.dev </div>
      <div className="">currently working on...</div>


        <div className="grid w-160 gap-2">
          <Textarea placeholder="What are you doing?" />
          <Button variant="outline" onClick={()=>{}}>Send message</Button>
        </div>


      <div className="">I've done ...</div>
      {/* 하스스톤 룰렛통 */}
    </div>
  );
}
