import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-400 drop-shadow-lg">Contact Us</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Contact Form Placeholder */}
          <div className="w-full md:w-1/2 bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-blue-700 glow-border">
            <h2 className="text-2xl font-semibold mb-6 text-blue-300">Send us a message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-blue-300 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" className="shadow-inner bg-gray-700 appearance-none border border-blue-600 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 futuristic-input" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-blue-300 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" className="shadow-inner bg-gray-700 appearance-none border border-blue-600 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 futuristic-input" placeholder="Your Email" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-blue-300 text-sm font-bold mb-2">Message</label>
                <textarea id="message" className="shadow-inner bg-gray-700 appearance-none border border-blue-600 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 h-32 futuristic-input" placeholder="Your Message"></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105 futuristic-button">Send</button>
              </div>
            </form>
          </div>
          {/* Contact Information Placeholder */}
          <div className="w-full md:w-1/2 bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-blue-700 glow-border text-white">
            <h2 className="text-2xl font-semibold mb-6 text-white">Contact Information</h2>
            <p className="mb-2"><span className="font-semibold">Email:</span> info@traderplatform.com</p>
            <p className="mb-2"><span className="font-semibold">Phone:</span> +1 (123) 456-7890</p>
            <p className="mb-2"><span className="font-semibold">Address:</span> 123 Trading St, Finance City, FC 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

/* Add these styles to your globals.css for the futuristic look */
/*
.glow-border {
  position: relative;
}

.glow-border::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #00f, #0ff, #f0f, #f00);
  background-size: 400% 400%;
  filter: blur(8px);
  z-index: -1;
  animation: glowing 20s linear infinite;
  border-radius: 10px;
}

@keyframes glowing {
  0% { background-position: 0 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
}
*/

