import React from "react";
import Header from "./_layout/components/Header";
import { PagesURLs } from "@/shared/constants/pagesUrls";
import Footer from "./_layout/components/Footer";

type Props = { children: React.ReactNode };

const HomeLayout = ({ children }: Props) => {
  const { ABOUT_URL, FAQ_URL, DOCS_URL } = PagesURLs;

  return (
    <div className="min-h-screen w-full bg-[url('/bg-body-light.webp')] dark:bg-[url('/bg-body-dark.webp')] inset-0 bg-cover bg-no-repeat bg-left-top">
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg-body-light.webp')",
          filter: "blur(8px)",
        }}
      /> */}

      {/* Content layer */}
      <div className="mx-auto bg-opacity-5 backdrop-filter backdrop-blur-lg">
        <Header
          links={[
            { name: "About", url: ABOUT_URL },
            { name: "FAQ", url: FAQ_URL },
            { name: "Docs", url: "/contacts" },
          ]}
        />

        <main className="container">{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
