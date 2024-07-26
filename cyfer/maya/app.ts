import { m } from "@ckzero/maya/web";
import { Footer, ViewFrame } from "../@elements";
import { MayaHeader } from "./@components";

export const App = () => {
  return m.Div({
    class: "bg-pale",
    children: [
      ViewFrame({
        children: [
          MayaHeader(),
          m.Div({
            class: "pv3 ph5 flex-grow-1",
            innerText: "Maya UI home page",
          }),
        ],
      }),
      Footer({
        colorCss: "purple",
      }),
    ],
  });
};
