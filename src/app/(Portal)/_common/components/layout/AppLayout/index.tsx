import React from "react";
import Header from "../Header";
import SideBar from "../SideBar";

type Props = { children: React.ReactNode };

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <SideBar />
      <div>{children}</div>
    </>
  );
};
export default AppLayout;
