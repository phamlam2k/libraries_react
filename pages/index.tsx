import { ReactNode } from "react";

import Portfolio from "../src/components/Portfolio/Portfolio";
import BlankLayout from "../src/layout/BlankLayout";

const Home = () => {
  return <Portfolio />;
};

Home.getLayout = (page: ReactNode) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default Home;
