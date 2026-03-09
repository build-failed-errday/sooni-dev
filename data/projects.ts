export type ProjectUrl = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  name: string;
  nameKo?: string;
  description: string;
  tech: string[];
  type: "web" | "mobile" | "work";
  urls: ProjectUrl[];
  current?: boolean;
};

export const projects: Project[] = [
  {
    id: "roadmap",
    name: "roadmap.ne.kr",
    description: "JSP to Next.js migration (웹 서비스)",
    tech: ["Next.js", "TypeScript"],
    type: "web",
    urls: [{ label: "방문하기", href: "https://roadmap.ne.kr" }],
  },
  {
    id: "livinglab",
    name: "의왕시 리빙랩 플랫폼",
    description: "의왕시 시민 참여형 리빙랩 플랫폼 (웹 서비스)",
    tech: ["Next.js", "TypeScript"],
    type: "web",
    urls: [{ label: "방문하기", href: "https://livinglab.uiwang.go.kr" }],
  },
  {
    id: "kkaro",
    name: "깔로",
    description: "모바일 설문/참여 플랫폼",
    tech: ["Android", "iOS", "Kotlin"],
    type: "mobile",
    urls: [
      { label: "Google Play", href: "#" },
      { label: "App Store", href: "#" },
    ],
  },
  {
    id: "kcsc",
    name: "건설기준포털",
    description: "건설기준포털 유지보수 및 사이트 관리",
    tech: ["Web"],
    type: "work",
    current: true,
    urls: [{ label: "방문하기", href: "https://kcsc.re.kr" }],
  },
  {
    id: "national-project",
    name: "국가 과업",
    description:
      "Java to Python migration → Python sandboxing (Restricted Python)",
    tech: ["Python", "Java"],
    type: "work",
    urls: [],
  },
];
