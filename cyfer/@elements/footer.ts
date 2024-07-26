import { Component, m } from "@ckzero/maya/web";
import cyferLogo from "../@assets/images/cyfer-logo.png";
import { ViewFrame } from "./view-frame";
import { TitledList } from "./titled-list";
import { Divider } from "./divider";
import { Link } from "./link";

type FooterProps = {
  colorCss?: string;
};

export const Footer = Component<FooterProps>(({ colorCss }) =>
  ViewFrame({
    classNames: "bg-pale-dark",
    contentClassNames: "flex items-start justify-between ph3 pv4",
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
          m.Span({
            class: "mt4 pt3 mb0",
            children: [
              m.Span({
                innerText: "This site is created using ",
              }),
              Link({
                colorCss: colorCss?.value,
                classNames: "underline",
                href: "maya",
                label: "Maya",
              }),
              m.Span({
                innerText: ".",
              }),
            ],
          }),
        ],
      }),
      m.Div({
        class: "flex items-start justify-between",
        children: [
          TitledList({
            justifyRight: true,
            linkColorCss: colorCss?.value,
            classNames: "pr3",
            itemClassNames: "mb3",
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
          Divider({ className: "mh4 ph2" }),
          TitledList({
            justifyRight: true,
            linkColorCss: colorCss?.value,
            classNames: "pr3",
            itemClassNames: "mb3",
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
          Divider({ className: "mh4 ph2" }),
          m.Div({
            children: [
              TitledList({
                justifyRight: true,
                itemClassNames: "mb3",
                linkColorCss: colorCss?.value,
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
                  class: "flex items-center justify-end",
                  children: [
                    m.A({
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
                    m.A({
                      class: "ml3",
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
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  })
);
