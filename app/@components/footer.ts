import { m } from "@ckzero/maya/web";
import cyferLogo from "../@assets/cyfer-logo.png";
import { Confined } from "./confined";
import { TitledList } from "./titled-list";

export const Footer = () =>
  Confined({
    classNames: "bg-pale-dark pa5",
    contentClassNames: "flex items-start justify-between",
    children: [
      m.Div({
        class: "flex flex-column items-stretch justify-between",
        children: [
          m.Div({
            children: [
              m.A({
                class: "flex items-center justify-start no-underline",
                href: "/",
                children: [
                  m.Img({
                    src: cyferLogo,
                    height: "32",
                    width: "32",
                  }),
                ],
              }),
              m.P({
                class: "m0 f7",
                innerText: "© 2024 Cyfer Tech.",
              }),
              m.P({
                class: "nt2 f7",
                innerText: "All rights reserved.",
              }),
            ],
          }),
          m.P({
            class: "mt4 pt3 mb0",
            innerText: "This site is created using Maya.",
          }),
        ],
      }),
      m.Div({
        class: "flex items-start justify-between",
        children: [
          TitledList({
            header: "Products",
            links: [
              {
                label: "Maya",
                href: "/maya",
              },
              {
                label: "KarmaJs",
                href: "/karma",
              },
              {
                label: "Yajman",
                href: "/yajman",
              },
              {
                label: "Batua",
                href: "/batua",
              },
            ],
          }),
          TitledList({
            header: "Company",
            links: [
              {
                label: "About us",
                href: "#about-us",
              },
              {
                label: "Blogs",
                href: "#blogs",
              },
              {
                label: "Team",
                href: "#about-us",
              },
              {
                label: "Career",
                href: "/careers",
              },
            ],
          }),
          m.Div({
            children: [
              TitledList({
                header: "Relations",
                links: [
                  {
                    label: "Sponsor Us",
                    href: "/sponsor-us",
                  },
                  {
                    label: "FAQs",
                    href: "/faqs",
                  },
                  {
                    label: "Feedback",
                    href: "/feedback",
                  },
                ],
                bottomComponent: m.Span({
                  class: "flex items-center justify-start",
                  children: [
                    m.A({
                      target: "_blank",
                      href: "https://twitter.com/thecyfertech",
                      children: [
                        m.Img({
                          class: "ba b--none br-100",
                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAA/0lEQVR4AbXPIazCMACE4d+L2qoZFEGSIGcRc/gJJB5XMzGJmK9EN0HMi+qaibkKVF1txdQe4g0YzPK5yyWXHL9TaPNQ89LojH87N1rbJcXkMF4Fk31UMrf34hm14KUeoQxGArALHTMuQD2cAWQfJXOpgTbksGr9ng8qluShJTPhyCdx63POg7rEim95ZyR68I1ggQpnCEGwyPicw6hZtPEGmnhkycqOio1zm6XuFtyw5XDXfGvuau0dXHzJp8pfBPuhIXO9ZK5ILUCdSvLYMpc6ASBtl3EaC97I4KaFaOCaBE9Zn5jUsVqR2vcTJZO1DdbGoZryVp94Ka/mQfE7f2T3df0WBhLDAAAAAElFTkSuQmCC",
                          height: "24",
                          width: "24",
                        }),
                      ],
                    }),
                    m.A({
                      class: "ml3",
                      target: "_blank",
                      href: "https://github.com/thecyfertech",
                      children: [
                        m.Img({
                          class: "ba b--none br-100",
                          src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                          height: "32",
                          width: "32",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
