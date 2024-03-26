import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthContext from "@/context/NextAuthContext";
import SWRContext from "@/context/SWRContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greenstagram",
  description: "instagram clone coding project with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Comptatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>green</title>
      </head> */}
      <NextAuthContext>
        <SWRContext>
          <body className={inter.className}>{children}</body>
        </SWRContext>
      </NextAuthContext>
    </html>
  );
}
