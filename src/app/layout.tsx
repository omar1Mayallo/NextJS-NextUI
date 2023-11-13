import { cairo } from "@/config/font.config";
import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";
import { UIProvider } from "./UIProvider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `${siteConfig.title} | %s`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <UIProvider themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
