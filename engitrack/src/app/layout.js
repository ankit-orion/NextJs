import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header><Header/></header>
        <main>{children}</main>
        <footer>© 2021</footer>
      </body>
    </html>
  );
}
