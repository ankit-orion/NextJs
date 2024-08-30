import Link from "next/link";
import Image from "next/image";
import Component from "@/components/Component";
export default function About() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-start">
        {/* Text Container */}
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-6">
            Get to know us.
          </h1>

          <div className="space-y-4 text-lg">
            <p>
              At EngiTrack, we're focused on driving innovations that make a
              better future for businesses and individuals.
            </p>
            <p>
              EngiTrack connects students with internships, helping them find
              opportunities in different fields. This gives students the chance
              to gain practical experience, learn new skills, and connect with
              industry professionals.
            </p>
            <p>
              Our internships provide valuable experience, skills, and
              networking opportunities. Students can build experience in their
              field, develop important skills, and grow their professional
              network.
            </p>
            <p>
              EngiTrack internships are an excellent way to jumpstart your
              career, helping you gain the experience, skills, and connections
              needed to secure your first job.
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1654263391025-4c4809a37f5c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About EngiTrack"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <Component />
    </>
  );
}
