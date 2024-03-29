import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"


const poppins = Poppins({subsets:["latin"],weight:["500","700"]});

export const metadata: Metadata = {
  title: "Its Love Month,just a little Poem for you to read",
  description: "Hope you like it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <div>
          <Toaster/>
        </div>
      </body>
    </html>
  );
}
