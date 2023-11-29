import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>Home Header</header>
      <main className="container">{children}</main>
      <footer>Home Footer</footer>
    </>
  );
};

export default HomeLayout;
