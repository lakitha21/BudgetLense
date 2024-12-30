import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gray-50 flex items-center min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-16 text-center">
        <div className="mx-auto max-w-xl">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Manage Your Expense
            <strong className="block font-extrabold text-primary">Control Money</strong>
          </h1>

          <p className="mt-4 sm:text-xl">
            Your smart, simple, and intuitive personal finance companion
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-blue-950 px-12 py-3 text-sm font-medium text-white shadow hover:bg-black focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Centered Image */}
        <div className="mt-12 flex justify-center">
          <Image
            src="/maxresdefault.jpg"
            alt="dashboard"
            width={1000}
            height={700}
            className="rounded-xl border-2"
          />
        </div>
      </div>
    </section>
  );
}


