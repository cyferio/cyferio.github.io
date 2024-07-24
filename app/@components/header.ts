import { m } from "@ckzero/maya/web";
import cyferLogo from "../@assets/cyfer-logo.png";
import { Confined } from "./confined";
import { Link } from "./link";

export const Header = () =>
  Confined({
    classNames: "sticky top-0 bg-pale",
    contentClassNames: "pv3 flex items-center justify-between",
    children: [
      m.A({
        class: "space-mono flex items-center justify-start no-underline",
        href: "/",
        children: [
          m.Img({
            src: cyferLogo,
            height: "56",
            width: "56",
          }),
          m.Span({
            class: "ml2",
            children: [
              m.Div({
                class: "f4",
                innerText: "CYFER",
              }),
              m.Div({
                class: "f4",
                innerText: "TECH",
              }),
            ],
          }),
        ],
      }),
      m.Div({
        class: "flex items-center justify-end",
        children: [
          Link({
            classNames: "ml4 no-underline",
            href: "#products",
            label: "Products",
          }),
          Link({
            classNames: "ml4 no-underline",
            href: "#blogs",
            label: "Blogs",
          }),
          Link({
            classNames: "ml4 no-underline",
            href: "#about-us",
            label: "About Us",
          }),
          m.A({
            class: "ml4",
            href: "https://github.com/cyferio",
            children: [
              m.Img({
                class: "ba b--none br-100",
                src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                height: "40",
                width: "40",
              }),
            ],
          }),
        ],
      }),
    ],
  });
