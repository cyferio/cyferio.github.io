import { Component, m } from "@ckzero/maya/web";

type DividerProps = {
  className?: string;
};

export const Divider = Component<DividerProps>(({ className }) =>
  m.Div({
    class: `bl b--moon-gray min-vh-20 ${className?.value || ""}`,
  })
);
