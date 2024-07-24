import { defaultMetaTags, m } from "@ckzero/maya/web";
import mayaLogo from "../@assets/maya-logo.png";

const HomePage = () => {
  return m.Div({
    class: "bg-red",
    children: [
      m.Div({
        children: [
          m.Img({
            src: mayaLogo,
          }),
        ],
      }),
    ],
  });
};

export const page = () =>
  m.Html({
    lang: "en",
    children: [
      m.Head({
        children: [
          ...defaultMetaTags(),
          m.Title({
            innerText: "MayaJs",
          }),
          m.Link({
            rel: "stylesheet",
            href: "https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css",
          }),
          m.Link({
            rel: "stylesheet",
            href: "styles.css",
          }),
        ],
      }),
      m.Body({
        children: [
          m.Script({
            src: "main.js",
            defer: "true",
          }),
          HomePage(),
        ],
      }),
    ],
  });
