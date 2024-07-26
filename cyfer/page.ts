import { defaultMetaTags, m } from "@ckzero/maya/web";
import stylesSrc from "./@assets/styles.css";
import faviconIco from "./@assets/favicon.ico";
import { App } from "./app";

export const page = () =>
  m.Html({
    lang: "en",
    children: [
      m.Head({
        children: [
          ...defaultMetaTags(),
          m.Title({
            innerText: "Cyfer Tech ™",
          }),
          m.Link({
            rel: "stylesheet",
            href: "https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css",
          }),
          m.Link({
            rel: "stylesheet",
            href: stylesSrc,
          }),
          m.Link({
            rel: "icon",
            type: "image/x-icon",
            href: faviconIco,
          }),
        ],
      }),
      m.Body({
        class: "bg-pale",
        children: [
          m.Script({
            src: "main.js",
            defer: "true",
          }),
          App(),
        ],
      }),
    ],
  });
