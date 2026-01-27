import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Flex } from "next/font/google";
import Galaxy from "@/components/Galaxy";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "My personal portfolio website showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.variable}  antialiased dark overflow-x-hidden cursor-none`}
      >
        <SmoothCursor />{" "}
        <div
          style={{
            width: "100%",
            height: "100dvh",
            position: "fixed",
            zIndex: "-1",
          }}
        >
          <Galaxy
            density={1}
            glowIntensity={0.1}
            saturation={0.4}
            hueShift={250}
            rotationSpeed={0.05}
            starSpeed={0.3}
            speed={0.4}
            mouseRepulsion={false}
            transparent={true}
          />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
