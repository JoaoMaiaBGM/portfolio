import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { SiTypescript, SiPostgresql, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export const stackData = [
  {
    title: "JavaScript",
    img: imgJS,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "React",
    img: imgReact,
  },
  {
    title: "Next.js",
    img: SiNextdotjs,
  },
  {
    title: "Node.JS",
    img: imgNode,
  },
  { title: "PostgreSQL", img: SiPostgresql },
  {
    title: "HTML",
    img: imgHTML,
  },
  { title: "Tailwind CSS", img: SiTailwindcss },
  {
    title: "CSS",
    img: imgCSS,
  },
];
