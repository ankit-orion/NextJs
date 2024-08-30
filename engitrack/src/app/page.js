import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Engi Track",
  description:
    "Engi Track is a leading online platform in India that connects engineering students with internships and offers services like resume building and career counseling.",
  openGraph: {
    images: [
      {
        url: "/engitrack/public/vercel.svg",
        alt: "Engi Track",
      },
    ],
  },
};

const newdata = [
  {
    title: "Resume Building Services Available",
    description: "Let us help you create a standout resume to land your dream job.",
    image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Interview Preparation",
    description: "Get ready for your dream job with our interview preparation services.",
    image: "https://images.unsplash.com/photo-1526328828355-69b01701ca6a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Career Counseling",
    description: "Get personalized career counseling from industry experts.",
    image: "https://images.unsplash.com/photo-1561489422-45de3d015e3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

// card component here
const Card = () => (
  <div className="rounded-lg overflow-hidden shadow-lg bg-white">
    <div className="relative h-80 w-full">
      <Image
        src="https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?b=1&s=612x612&w=0&k=20&c=4K6Bf1I6OnKzJmLaqVArPqIBTZ3VnDGJfx6hohXb1pg="
        alt="UI/UX Review"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="px-4 sm:px-6 py-4">
      <h2 className="font-bold text-xl mb-2">Resume Building Services Available
      </h2>
      <p className="text-gray-700 text-sm sm:text-base">
      Let us help you create a standout resume to land your dream job.
      </p>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <div className={`flex flex-col items-center justify-start min-h-screen text-center px-4 py-8 pt-16 sm:pt-28 ${roboto.className}`}>
      {/* Connect learn grow div */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-8">
          <span className="block mb-2">Connect. Learn. Grow.</span>
          <span className="block mb-2">Excel. Achieve.</span>
          <span className="block">Succeed.</span>
        </h1>

        <p className="mt-4 sm:mt-6 lg:mt-8 text-lg sm:text-xl">
          Unlock endless opportunities in the world of corporate
          <br className="hidden sm:inline" /> with Engitrack's comprehensive
          internship program.
        </p>

        <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
          <Link href="/join">
            <button
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 h-12 
            px-6 rounded-md text-sm font-medium ring-offset-background 
            transition-colors focus-visible:outline-none focus-visible:ring-2 
            focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
            disabled:opacity-50"
            >
              Apply Now
            </button>
          </Link>

          <Link href="/explore">
            <button
              className="w-full sm:w-auto bg-transparent text-black hover:text-gray-700 h-12 
            px-6 rounded-md text-sm font-medium ring-offset-background 
            transition-colors focus-visible:outline-none focus-visible:ring-2 
            focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
            disabled:opacity-50"
            >
              Explore
            </button>
          </Link>
        </div>
      </div>

      {/* Empowerin students div */}
      <div className="max-w-4xl mx-auto px-4 pt-16 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
            <span className="block mb-2 sm:mb-4">Empowering Students</span>
            <span className="block">Through Opportunities</span>
          </h1>
          <p className="mt-6 sm:mt-8 lg:mt-12 text-lg">
            Engitrack is a leading online platform in India that connects 
            engineering students <br className="hidden sm:inline" /> with internships and offers services like
            resume building and career counseling.
          </p>
        </div>
        <div className="lg:w-1/2 lg:ml-12 flex justify-center lg:justify-end relative">
          <Image 
          src="https://images.unsplash.com/photo-1591980607162-923fa31e8240?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <div className="absolute bottom-[-20px] sm:bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md shadow-lg text-sm sm:text-lg lg:text-xl whitespace-nowrap">
            Trusted by 150+ Students
          </div>
        </div>
      </div>

      {/*  */}
      <div className="max-w-7xl mx-auto px-4 pt-12 sm:pt-16 md:pt-20 lg:pt-24">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-4 sm:mb-6">
          <span className="block mb-2">Internship Connection</span>
          <span className="block">Platform</span>
        </h1>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl">
          Explore our services for resume building, interview preparation, and
          career counseling today
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <Card />
        <Card />
        <Card />
      </div>
    </div>

    </div>
  );
}
