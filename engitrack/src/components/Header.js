import Link from "next/link";
import { Roboto } from 'next/font/google'; // Importing Roboto font

// Load the Roboto font
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Header() {
  return (
    <header className={`bg-white text-black pt-10 pr-4 pb-7 pl-4 ${roboto.className}`}>
      <nav className="container mx-auto flex justify-between items-center">
        <Link href={"/"}><p className="text-2xl font-bold">EngiTrack</p></Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
