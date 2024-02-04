import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Its love month,just a little poem for someone special",
  description: "Hope you like it",
};

export default function LoveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>{children}</main>
  );
}
