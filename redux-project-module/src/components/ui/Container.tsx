import { ReactNode } from "react";

type TContainerPropos = {
  children: ReactNode;
};

const Container = ({ children }: TContainerPropos) => {
  return <div className="w-full max-w-7xl h-screen mx-auto">{children}</div>;
};

export default Container;
