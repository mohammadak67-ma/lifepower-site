import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "LifePower",
  description: "Energy & Wellness",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}