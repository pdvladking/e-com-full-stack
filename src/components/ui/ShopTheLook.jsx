import React from "react";

const ShopTheLook = () => {
  return (
    <section className="bg-white dark:bg-black py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src="/images/look-4.webp"
            alt="Styled outfit"
            className="w-full h-full object-cover"
          />
        </div>


        <div>
          <h2 className="text-3xl md:text-5xl font-serif text-black dark:text-white mb-6">
            Shop the Look
          </h2>
          <p className="text-neutral-700 dark:text-gray-300 mb-8 text-lg">
            From morning walks to gallery dates, this look is built for quiet confidence and everyday luxury.
          </p>

          <ul className="space-y-6">
            <li className="flex items-center justify-between">
              <span className="text-black dark:text-white">The Soft Wool Coat</span>
              <button className="text-sm text-black dark:text-white underline hover:opacity-70">
                View
              </button>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-black dark:text-white">Minimal Leather Crossbody</span>
              <button className="text-sm text-black dark:text-white underline hover:opacity-70">
                View
              </button>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-black dark:text-white">Low-Profile Suede Boots</span>
              <button className="text-sm text-black dark:text-white underline hover:opacity-70">
                View
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ShopTheLook;