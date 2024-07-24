import { m } from "@ckzero/maya/web";
import { Header } from "./@components/header";
import { Footer } from "./@components/footer";
import { Confined } from "./@components/confined";

export const HomePage = () => {
  return m.Div({
    children: [
      Header(),
      Confined({
        classNames: "items-center justify-center",
        children: [
          m.Div({
            class: "mv6 pv4 w-50 center",
            children: [
              m.P({
                class: "tc i space-mono f1",
                innerText: `"don't be evil"`,
              }),
              m.P({
                class: "tc nt3 f3 lh-copy",
                innerText: `free up the tech, from the clutches of profit making mega-machines`,
              }),
            ],
          }),
          m.Div({
            children: [
              m.P({
                id: "products",
                class: "f2 space-mono lh-copy",
                innerText: "# products",
              }),
              m.P({
                id: "blogs",
                class: "f2 space-mono lh-copy",
                innerText: "# blogs",
              }),
              m.P({
                id: "about-us",
                class: "f2 space-mono lh-copy",
                innerText: "# about us",
              }),
            ],
          }),
        ],
      }),
      Footer(),
    ],
  });
};
