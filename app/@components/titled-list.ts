import { Component, m, type MayaElement } from "@ckzero/maya/web";
import { Link } from "./link";

type TitledListProps = {
  classNames?: string;
  header: string;
  links: { label: string; href: string }[];
  bottomComponent?: MayaElement;
};

export const TitledList = Component<TitledListProps>(
  ({ classNames, header, links, bottomComponent }) =>
    m.Div({
      class: "flex items-start",
      children: [
        m.Div({
          class: "bl b--moon-gray min-vh-20 mh5",
        }),
        m.Div({
          class: classNames?.value || "",
          children: [
            m.P({
              class: "space-mono mt0 f3 lh-solid",
              innerText: header.value,
            }),
            ...(links.value || []).map((link) =>
              m.Div({
                class: "mb3",
                children: [
                  Link({
                    href: link.href,
                    label: link.label,
                  }),
                ],
              })
            ),
            bottomComponent?.value || m.Div({ class: "dn" }),
          ],
        }),
      ],
    })
);
