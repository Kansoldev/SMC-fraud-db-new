import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import {CookiesProvider} from "next-client-cookies/server";
import ReactQueryClientProvider from "@/src/lib/ReactQueryClientProvider";

const font = Geologica({ weight: "300", subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: 'SMC fraud',
  description: '',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <ReactQueryClientProvider>
        <html lang="en">
        <Script src="https://app.curbcutos.com/javascript/fa.js"></Script>
        <CookiesProvider>
          <body className={font.className}>{children}</body>
        </CookiesProvider>
        </html>
      </ReactQueryClientProvider>

  );
}
