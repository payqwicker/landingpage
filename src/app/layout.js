import NavBar from "@/components/common/NavBar";
import "./globals.css";
import Footer from "@/components/common/Footer";
import TawkToWidget from "@/config/TawkToWidget";


export const metadata = {
  title: "PayQwicker",
  description: "Seamless payment platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-mainFont">
        <NavBar />
        <main>{children}
        <TawkToWidget />
        </main>
        <Footer />
      </body>
    </html>
  );
}
