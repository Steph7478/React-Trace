import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { RemoveScrollLocked } from "@/components/RemoveScrollLocked";

export const metadata = {
  title: "ReactTrace",
  description: "",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" type="image/png" />
      <body className="bg-[#0B0121] min-h-screen">
        <RemoveScrollLocked />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
