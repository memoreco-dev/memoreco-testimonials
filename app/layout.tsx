import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memoreco Testimonials",
  description: "Customer testimonial collection and showcase platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}