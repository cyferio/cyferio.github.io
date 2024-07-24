import { Component, m, type MayaElement } from "@ckzero/maya/web";

type ConfinedProps = {
  classNames?: string;
  contentClassNames?: string;
  children: MayaElement[];
};

export const Confined = Component<ConfinedProps>(
  ({ classNames, contentClassNames, children }) => {
    return m.Div({
      class: `w-100 ${classNames?.value || ""}`,
      children: [
        m.Div({
          class: `mw8 center ${contentClassNames?.value || ""}`,
          children,
        }),
      ],
    });
  }
);
