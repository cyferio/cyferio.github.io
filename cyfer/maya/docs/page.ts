import { defaultMetaTags, m } from "@ckzero/maya/web";
import globalCss from "../../@assets/styles.css";
import { App } from "./app";

export const page = () =>
  m.Html({
    lang: "en",
    children: [
      m.Head({
        children: [
          ...defaultMetaTags(),
          m.Title({
            innerText: "Maya Docs",
          }),
          m.Link({
            rel: "stylesheet",
            href: "https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css",
          }),
          m.Link({
            rel: "stylesheet",
            href: globalCss,
          }),
        ],
      }),
      m.Body({
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
