import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { SiChakraui } from "react-icons/si";

export const stackData = [
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "React",
    img: imgReact,
  },
  { title: "Python", img: FaPython },
  {
    title: "Node JS",
    img: imgNode,
  },
  { title: "Django", img: DiDjango },

  { title: "TypeScript", img: SiTypescript },
  { title: "Docker", img: FaDocker },
  { title: "PostgreSQL", img: SiPostgresql },

  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  { title: "Chakra ui", img: SiChakraui },
];
