import { Roboto } from 'next/font/google'
import Link from "next/link";
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function HomePage() {
  return (
    <div className={`flex flex-col items-center justify-start min-h-screen text-center px-4 py-8 pt-16 sm:pt-28 ${roboto.className}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
          <span className="block mb-2 sm:mb-4">Connect. Learn. Grow.</span>
          <span className="block mb-2 sm:mb-4">Excel. Achieve.</span>
          <span className="block">Succeed.</span>
        </h1>
      </div>

      <p className="mt-8 sm:mt-12 lg:mt-16">
        Unlock endless opportunities in the world of corporate with Engitrack's comprehensive internship program.
      </p>

      {/* add a button here */}
      <div>
        <Link href= "/join">
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 
        px-6 mt-8 rounded-md text-sm font-medium ring-offset-background 
        transition-colors focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
        disabled:opacity-50">Apply Now</button>
        </Link>
      </div>

      {/* Another button here */}
      <div>
        <Link href= "/explore">
        <button className="bg-transparent text-black hover:text-gray-700 h-12 
        px-6 mt-8 rounded-md text-sm font-medium ring-offset-background 
        transition-colors focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
        disabled:opacity-50">Explore</button>
        </Link>
      </div>
    </div>
  );
}