import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white text-black pt-10 pr-4 pb-7 pl-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href={"/"}><p className="text-2xl font-bold font-puck">EngiTrack</p></Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}