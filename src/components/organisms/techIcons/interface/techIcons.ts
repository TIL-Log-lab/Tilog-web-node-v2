import { ReactElement } from "react";

export interface TechIconInterface {
  [techName: string]: {
    Render: () => ReactElement;
  };
}
