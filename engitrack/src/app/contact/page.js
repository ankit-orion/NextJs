export default function ContactPage(){
    return (
        <div className="max-w-lg mx-auto px-4 py-12">
          {/* Heading Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-4">
              Get in Touch
            </h2>
            <p className="text-lg sm:text-xl">
              We'd love to hear from you! Please fill out the form below to contact us.
            </p>
          </div>
    
          {/* Form Section */}
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
    
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
    
            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
    
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-md shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      );
}