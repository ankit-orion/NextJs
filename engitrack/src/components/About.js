import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <>
<div className="max-w-4xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center">
  {/* Text Container */}
  <div className="lg:w-1/2 text-center lg:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6">
      <span className="block mb-2">Get to know us.</span>
    </h1>

    <p className="mt-4 sm:mt-6 lg:mt-8 text-lg sm:text-l p-6">
      At EngiTrack, we're focused on driving innovations
      that make a better future for businesses and individuals.
      <br className="hidden sm:inline" /> <br className="hidden sm:inline" />

      Connects students with internships: EngiTrack helps students 
      find internships in different fields, giving them the chance to gain practical experience, learn
      new skills, and connect with industry professionals.
      <br className="hidden sm:inline" /> <br className="hidden sm:inline" />
      Provides valuable experience, skills, and networking: Internships offer
      students the opportunity to build experience in their field, develop
      important skills, and grow their professional network.
      <br className="hidden sm:inline" /> <br className="hidden sm:inline" />
      Is a great way to jumpstart your career: EngiTrack internships are an excellent
      starting point for your career, helping you gain the experience,
      skills, and connections needed to secure your first job.
    </p>
  </div>

  {/* Image Container */}
  <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
    <Image
      src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&w=328&h=320"
      alt="hero"
      width={500}
      height={500}
      className="rounded-lg"
    />
  </div>
</div>

    </>
  );
}
