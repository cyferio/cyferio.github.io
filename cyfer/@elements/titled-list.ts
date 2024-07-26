import { Component, m, type MayaElement } from "@ckzero/maya/web";
import { Link } from "./link";

type TitledListProps = {
  classNames?: string;
  titleClassNames?: string;
  itemClassNames?: string;
  header: string;
  justifyRight?: boolean;
  links: { label: string; href: string }[];
  linkColorCss?: string;
  bottomComponent?: MayaElement;
};

export const TitledList = Component<TitledListProps>(
  ({
    classNames,
    titleClassNames,
    itemClassNames,
    header,
    justifyRight,
    links,
    linkColorCss,
    bottomComponent,
  }) =>
    m.Div({
      class: `${justifyRight?.value ? "tr" : ""} ${classNames?.value || ""}`,
      children: [
        m.P({
          class: `space-mono mt0 f3 lh-solid ${titleClassNames?.value || ""}`,
          innerText: header.value,
        }),
        ...(links.value || []).map((link) =>
          m.Div({
            class: `${itemClassNames?.value || ""}`,
            children: [
              Link({
                colorCss: linkColorCss?.value,
                href: link.href,
                label: link.label,
              }),
            ],
          })
        ),
        bottomComponent?.value || m.Div({ class: "dn" }),
      ],
    })
);
