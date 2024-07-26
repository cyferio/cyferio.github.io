import { Component, m, type MayaElement } from "@ckzero/maya/web";

type NavbarProps = {
  children: MayaElement[];
};

export const Navbar = Component<NavbarProps>(({ children }) => {
  return m.Div({
    class: `dn db-ns w5 pa3 max-h-80 overflow-y-scroll`,
    style: `
      scrollbar-color: #e8e8e8 #f2f1f0;
      scrollbar-width: thin;
    `,
    children,
  });
});
