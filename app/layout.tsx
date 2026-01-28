import type { Metadata } from "next";
import "./globals.css";
import BlobCursor from "@/components/BlobCursor";
import Galaxy from "@/components/Galaxy";
import ReactLenis from "lenis/react";
import { JetBrains_Mono } from "next/font/google";
import IntroAnimation from "@/components/IntroAnimation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Portfolio - Aymane Kabti",
  description:
    "My personal portfolio website showcasing my projects and skills.",
};

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${mono.className} antialiased dark overflow-x-hidden`}
        suppressHydrationWarning
      >
        <div className="w-full h-dvh fixed -z-1">
          <Galaxy
            mouseRepulsion={false}
            mouseInteraction
            density={3}
            glowIntensity={0.1}
            saturation={0}
            hueShift={0}
            twinkleIntensity={0.8}
            rotationSpeed={0.1}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            starSpeed={0.3}
            speed={0.3}
          />
        </div>

        <main>
          <SpeedInsights />
          <IntroAnimation />
          <BlobCursor
            blobType="circle"
            fillColor="#90a955"
            trailCount={3}
            sizes={[10, 12, 75]}
            innerSizes={[20, 35, 25]}
            innerColor="rgba(255,255,255,0.8)"
            opacities={[0.6, 0.6, 0.6]}
            shadowColor="rgba(0,0,0,0.75)"
            shadowBlur={5}
            shadowOffsetX={10}
            shadowOffsetY={10}
            filterStdDeviation={30}
            useFilter={true}
            fastDuration={1}
            slowDuration={0.5}
            zIndex={11}
          />
          <ReactLenis root />

          {children}
        </main>
      </body>
      <GoogleAnalytics gaId="G-EGD9N2ZSMV" />
    </html>
  );
}
