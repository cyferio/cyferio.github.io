import { Component, m } from "@ckzero/maya/web";

type LinkProps = {
  classNames?: string;
  colorCss?: string;
  target?: string;
  href: string;
  label: string;
};

export const Link = Component<LinkProps>(
  ({ classNames, colorCss, target, href, label }) =>
    m.A({
      class: `link underline ${colorCss?.value || "red"} ${
        classNames?.value || ""
      }`,
      target: target?.value || "",
      href: href.value,
      innerText: label.value,
    })
);
