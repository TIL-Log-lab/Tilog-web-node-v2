import { ReactElement } from "react";

export interface ITechIcons {
  [techName: string]: {
    Render: () => ReactElement;
  };
}
