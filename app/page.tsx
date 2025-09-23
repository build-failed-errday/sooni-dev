"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-radial from-gray-700  to-gray-900 justify-start">
      <div className="w-full bg-transparent-[20%] text-white flex justify-end ">
        <span className="text-2xl mr-4 py-2 font-bold">sooni.dev</span>
      </div>
      <div className="">currently working on...</div>

      <div className="grid w-160 gap-2">
        <Textarea placeholder="What are you doing?" />
        <Button variant="outline" onClick={() => {}}>
          Send message
        </Button>
      </div>
      <div className="relative min-h-[320px] w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]">
        {/* 유리 표면 위 하이라이트 라인 */}
        <div className="pointer-events-none absolute inset-x-0 -top-1 h-1 [background:linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent)]" />

        {/* 액체처럼 흐르는 블롭들 (뒤에 흐릿하게) */}
        <div
          className="pointer-events-none absolute -left-10 top-6 h-44 w-44 rounded-full blur-3xl opacity-60
                      bg-[radial-gradient(closest-side,#8ee,#3be0e0,transparent)] animate-[float_8s_ease-in-out_infinite]"
        />
        <div
          className="pointer-events-none absolute -right-6 -bottom-10 h-52 w-52 rounded-full blur-3xl opacity-60
                      bg-[radial-gradient(closest-side,#ffccf1,#f0f,transparent)] animate-[float_10s_ease-in-out_infinite_reverse]"
        />

        {/* 유리 안쪽의 “리퀴드 반사” 마스크 */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70
                      [mask-image:radial-gradient(60%_50%_at_60%_20%,black,transparent)]
                      bg-[conic-gradient(from_210deg_at_60%_30%,rgba(255,255,255,.4),rgba(255,255,255,.05)_40%,transparent_60%)]"
        />

        {/* 내용 */}
        <div className="relative z-10 text-white">
          <h2 className="text-2xl font-semibold tracking-tight">
            Liquid Glass
          </h2>
          <p className="mt-2 text-white/80">
            유리 안에서 액체가 흐르는 듯한 하이라이트와 블롭을 겹쳐서 만든
            효과입니다.
          </p>
          <button
            className="mt-6 rounded-2xl border border-white/30 bg-white/10 px-4 py-2 text-white/90 transition
                           hover:bg-white/20 active:scale-[.98]"
          >
            Try action
          </button>
        </div>

        {/* 반사되는 빛의 얼룩(앞쪽) */}
        <div
          className="pointer-events-none absolute inset-0 -z-0
                      [mask-image:radial-gradient(55%_40%_at_35%_10%,black,transparent)]
                      bg-[radial-gradient(120px_80px_at_30%_0%,rgba(255,255,255,.5),transparent_60%)]"
        />
      </div>

      <div className="">I&apos;ve done ...</div>
      {/* 하스스톤 룰렛통 */}
    </div>
  );
}
