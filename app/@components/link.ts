import { Component, m, type MayaElement } from "@ckzero/maya/web";

type LinkProps = {
  classNames?: string;
  target?: string;
  href: string;
  label: string;
};

export const Link = Component<LinkProps>(
  ({ classNames, target, href, label }) =>
    m.A({
      class: `no-underline link red ${classNames?.value || ""}`,
      target: target?.value || "",
      href: href.value,
      innerText: label.value,
    })
);
