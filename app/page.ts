import { defaultMetaTags, m } from "@ckzero/maya/web";
import cyferLogo from "./@assets/cyfer-logo.png";

const HomePage = () => {
  return m.Div({
    class: "bg-red",
    children: [
      m.A({
        href: "maya",
        innerText: "go to maya",
      }),
      m.Img({
        src: cyferLogo,
        height: "300",
        width: "300",
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
            innerText: "Living Room",
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