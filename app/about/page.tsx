import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-200 py-20 relative overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm10 28a6 6 0 100-12 6 6 0 000 12zm20 0a6 6 0 100-12 6 6 0 000 12zM2 28a6 6 0 100-12 6 6 0 000 12zm20 0a6 6 0 100-12 6 6 0 000 12zM36 4a6 6 0 100-12 6 6 0 000 12zm20 0a6 6 0 100-12 6 6 0 000 12zM12 34v-4H10v4H6v2h4v4h2v-4h4v-2h-4zm0-30V0H10v4H6v2h4v4h2V6h4V4h-4zm24 28a6 6 0 100-12 6 6 0 000 12zm20 0a6 6 0 100-12 6 6 0 000 12zM12 4a6 6 0 100-12 6 6 0 000 12zm20 0a6 6 0 100-12 6 6 0 000 12z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          transform: 'scale(2)',
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          About Our Trading Platform
        </h1>

        {/* Our Mission Section */}
        <div className="mb-16 border-b-2 border-blue-500 border-opacity-50 pb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Our Team Section */}
        <div className="border-b-2 border-purple-500 border-opacity-50 pb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">Our Team</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            [Placeholder for team information]
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
