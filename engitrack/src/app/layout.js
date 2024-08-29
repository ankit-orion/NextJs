import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header>
          <Header />
        </header>
        <main className="flex-grow">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}