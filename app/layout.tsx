import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { QueryProvider } from "@/providers/QueryProvider";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youtube Clone",
  description: "Youtube Clone Application made with Next JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <QueryProvider>
          <ReduxProvider>
            <header>
              <Navbar />
              <Sidebar />
            </header>
            {children}
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
