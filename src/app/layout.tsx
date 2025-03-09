import "~/styles/globals.css";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
//import NetworkRedirect from "./_components/networkRedirect";

export const metadata: Metadata = {
  title: "Hi! I'm Oscar!",
  description: "I'm a software engineer and music lover.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          {/* <NetworkRedirect /> */}
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
