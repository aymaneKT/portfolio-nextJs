import type { Metadata } from "next";
import "./globals.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Galaxy from "@/components/Galaxy";
import localFont from "next/font/local";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const robotoFlex = localFont({
  src: "./fonts/RobotoFlex.ttf",
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
        className={`${robotoFlex.className}  antialiased dark overflow-x-hidden`}
      >
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
