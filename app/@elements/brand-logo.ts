import { Component, m, type MayaElement } from "@ckzero/maya/web";

type BrandLogoProps = {
  logoSrc: string;
  logoHref: string;
  logoSize?: number;
  labelComponent?: MayaElement;
};

export const BrandLogo = Component<BrandLogoProps>(
  ({ logoSrc, logoHref, logoSize, labelComponent }) => {
    const size = `${logoSize?.value || 32}`;
    return m.A({
      class: "space-mono link black flex items-center justify-start",
      href: logoHref.value,
      children: [
        m.Img({
          src: logoSrc.value,
          height: size,
          width: size,
        }),
        labelComponent?.value || m.Div({ class: "db" }),
      ],
    });
  }
);
