import { Url } from "url";

type TMenuItems = {
  menuName: String;
  href: Url | string;
};
export const MenuItems: TMenuItems[] = [
  {
    menuName: "Home",
    href: "/",
  },
  {
    menuName: "Career Timeline",
    href: "/",
  },
  {
    menuName: "Contact",
    href: "/",
  },
];
