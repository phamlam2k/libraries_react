// ** MUI Imports

import { BlankLayoutProps } from "../models/layout";

const BlankLayout = ({ children }: BlankLayoutProps) => {
  return <div className="app">{children}</div>;
};

export default BlankLayout;
