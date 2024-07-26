import { Component, m, type MayaElement } from "@ckzero/maya/web";

type ViewFrameProps = {
  classNames?: string;
  contentClassNames?: string;
  children: MayaElement[];
};

export const ViewFrame = Component<ViewFrameProps>(
  ({ classNames, contentClassNames, children }) => {
    return m.Div({
      class: `w-100 bg-pale ${classNames?.value || ""}`,
      children: [
        m.Div({
          class: `mw8 center ${contentClassNames?.value || ""}`,
          children,
        }),
      ],
    });
  }
);
