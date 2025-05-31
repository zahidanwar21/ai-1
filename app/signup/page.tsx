"use client";

import React from "react";
import Link from "next/link";

const SignupPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-100 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md space-y-10">
    <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800">
    <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
      Create an Account
    </h2>
    <form className="mt-8 space-y-6">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 mt-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold hover:from-blue-600 hover:to-purple-700 transition duration-300"
      >
        Sign Up
      </button>
      <p className="mt-4 text-sm text-center text-gray-400">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-400 hover:underline">
          Log in
        </Link>
      </p>
    </form>
  </div>
</div>
</div>
  )
};

export default SignupPage;