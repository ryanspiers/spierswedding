import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan & Leigh — Our Wedding",
  description:
    "Join us to celebrate our love. View the details and RSVP for our special day.",
  other: {
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
<body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
