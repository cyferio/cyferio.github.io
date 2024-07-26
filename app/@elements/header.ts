import { Component, m, type MayaElement } from "@ckzero/maya/web";
import { BrandLogo } from "./brand-logo";
import { Link } from "./link";

type HeaderProps = {
  logoSize: number;
  logoSrc: string;
  logoHref: string;
  logoLabelComponent?: MayaElement;
  links: { colorCss?: string; label: string; href: string }[];
  rightmostComponent?: MayaElement;
};

export const Header = Component<HeaderProps>(
  ({
    logoSize,
    logoSrc,
    logoHref,
    logoLabelComponent,
    links,
    rightmostComponent,
  }) =>
    m.Div({
      class: "pa3 bg-pale sticky top-0 flex items-center justify-between",
      children: [
        BrandLogo({
          logoSize: logoSize.value,
          logoSrc: logoSrc.value,
          logoHref: logoHref.value,
          labelComponent: logoLabelComponent?.value,
        }),
        m.Div({
          class: "flex items-center justify-end",
          children: [
            ...links.value.map((link) =>
              Link({
                classNames: "ml4",
                colorCss: link.colorCss,
                href: link.href,
                label: link.label,
              })
            ),
            rightmostComponent?.value || m.Div({ class: "dn" }),
          ],
        }),
      ],
    })
);
