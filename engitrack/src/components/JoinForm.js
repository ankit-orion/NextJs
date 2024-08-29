export default function JoinForm() {
    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Internship Application Form</h1>
          <form>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name here"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
    
            {/* Email Address */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
    
            {/* Whatsapp Number */}
            <div className="mb-4">
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">Whatsapp Number*</label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                placeholder="Get updates regarding your internship tasks and certificate"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
    
            {/* Current Location */}
            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Current Location*</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter your current location"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
    
            {/* College Name */}
            <div className="mb-4">
              <label htmlFor="college" className="block text-sm font-medium text-gray-700">College Name*</label>
              <input
                type="text"
                id="college"
                name="college"
                placeholder="Enter Your College Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
    
            {/* Branch */}
            <div className="mb-4">
              <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch*</label>
              <input
                type="text"
                id="branch"
                name="branch"
                placeholder="College Branch"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
    
            {/* Year */}
            <div className="mb-4">
              <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year*</label>
              <select
                id="year"
                name="year"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="">Select your year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
                <option value="passed-out">Passed Out</option>
              </select>
            </div>
    
            {/* Internship Domain */}
            <div className="mb-4">
              <label htmlFor="domain" className="block text-sm font-medium text-gray-700">Internship Domain*</label>
              <select
                id="domain"
                name="domain"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="">Select your domain</option>
                <option value="web-development-basic">Web Development Basic</option>
                <option value="full-stack-web-development">Full Stack Web Development</option>
                <option value="app-development">App Development</option>
                <option value="machine-learning">Machine Learning</option>
                <option value="data-science">Data Science</option>
                <option value="cyber-security">Cyber Security</option>
              </select>
            </div>
    
            {/* Submit Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      );
}