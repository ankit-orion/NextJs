import { Roboto } from 'next/font/google'
import Image from 'next/image';
import Link from "next/link";
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Engi Track',
  description: 'Engi Track is a leading online platform in India that connects engineering students with internships and offers services like resume building and career counseling.',
  openGraph:{
    images:[
      {
        url: '/engitrack/public/vercel.svg',
        alt: 'Engi Track',
      }
    ]
  }
}

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
        Unlock endless opportunities in the world of corporate <br/> with Engitrack's comprehensive internship program.
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
        px-6 mt-8 rounded-md text-l font-medium ring-offset-background 
        transition-colors focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
        disabled:opacity-50">Explore</button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto pt-16 flex flex-col lg:flex-row items-center lg:items-start">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
          <span className="block mb-2 sm:mb-4">Empowering Students</span>
          <span className="block mb-2 sm:mb-4">Through Opportunities</span>
        </h1>
        <p className="mt-8 sm:mt-12 lg:mt-16">
          Engitrack is a leading online platform in India that
          <br />
          connects engineering students with internships and offers
          <br />
          services like resume building and career counseling.
        </p>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 flex justify-center lg:justify-end relative">
  <Image
    src="https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?b=1&s=612x612&w=0&k=20&c=4K6Bf1I6OnKzJmLaqVArPqIBTZ3VnDGJfx6hohXb1pg="
    alt="hero"
    width={500}
    height={500}
    className="rounded-lg"
  />
  <div className="absolute bottom-[-30px] lg:bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-md shadow-lg text-lg lg:text-xl">
    Trusted by 150+ Students
  </div>
</div>
    </div>
    </div>
  );
}