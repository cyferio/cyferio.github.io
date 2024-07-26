import { m } from "@ckzero/maya/web";
import cyferLogo from "./@assets/images/cyfer-logo.png";
import { Footer, Header } from "./@elements";
import { ViewFrame } from "./@elements/view-frame";

export const App = () => {
  return m.Div({
    children: [
      ViewFrame({
        children: [
          Header({
            logoHref: "/",
            logoSrc: cyferLogo,
            logoSize: 56,
            logoLabelComponent: m.A({
              class: "ml2 link black no-underline",
              href: "/",
              children: [
                m.Div({
                  class: `f4`,
                  innerText: "CYFER",
                }),
                m.Div({
                  class: `f4`,
                  innerText: "TECH",
                }),
              ],
            }),
            links: [
              { href: "#products", label: "Products" },
              { href: "#blogs", label: "Blogs" },
              { href: "#about-us", label: "About Us" },
            ],
            rightmostComponent: m.A({
              class: "ml4",
              href: "https://github.com/thecyfertech",
              children: [
                m.Img({
                  class: "ba b--none br-100",
                  src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                  height: "40",
                  width: "40",
                }),
              ],
            }),
          }),
        ],
      }),
      ViewFrame({
        classNames: "items-center justify-center",
        contentClassNames: "pa3",
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
                innerText: `- an echo from the past`,
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
              m.Div({
                children: [
                  m.P({
                    id: "about-us",
                    class: "f2 space-mono lh-copy",
                    innerText: "# about us",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      Footer({}),
    ],
  });
};
