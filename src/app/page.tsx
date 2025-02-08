import * as React from "react";
import Link from "next/link";
import Image from "next/image";

type InfoBlockProps = {
  title: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
};

const InfoBlock: React.FC<InfoBlockProps> = ({ title, text, imgSrc, imgAlt }) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow text-indigo-950 max-md:mt-10">
      <Image src={imgSrc} alt={imgAlt} width={50} height={50} />
      <div className="flex flex-col mt-4 max-w-full">
        <div className="text-xl leading-snug">{title}</div>
        <div className="mt-2 text-base leading-6">{text}</div>
      </div>
    </div>
  </div>
);

function MyComponent() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col px-7 py-5 w-full bg-white max-md:px-5">
        <div className="flex justify-between items-center w-full">
          <Image src="/Images/Search.png" alt="Search Icon" width={24} height={24} />
          <div className="text-2xl text-zinc-800">Avion</div>
          <div className="flex gap-4">
            <Image src="/Images/Cart.png" alt="Cart Icon" width={24} height={24} />
            <Image src="/Images/User.png" alt="User Icon" width={24} height={24} />
          </div>
        </div>

        <div className="mt-5 h-px border border-solid border-black border-opacity-10" />

        <div className="flex flex-wrap gap-10 items-start mt-5 text-base text-gray-500">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact us</Link>
          <Link href="/productpage">Product Page</Link>
          <Link href="/shoppingcart">Shopping Cart</Link>
        </div>
      </div>

      <div className="flex flex-col px-16 py-16 w-full bg-indigo-950 max-md:px-5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:w-full">
            <div className="text-white">
              <h1 className="text-3xl leading-10">
                The furniture brand for the future, with timeless designs
              </h1>
              <button className="mt-10 px-8 py-4 bg-stone-50 bg-opacity-10">
                View collection
              </button>
              <p className="mt-48 text-lg leading-7">
                A new era in eco-friendly furniture with Avion, the French
                luxury retail brand.
              </p>
            </div>
          </div>

          <div className="w-6/12 max-md:w-full">
            <Image src="/Images/image1.png" alt="Furniture Display" width={600} height={400} />
          </div>
        </div>
      </div>

      <div className="flex flex-col px-10 py-16 w-full bg-white max-md:px-5">
        <h2 className="text-2xl font-semibold text-indigo-950 text-center">
          What makes our brand different
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <InfoBlock
            title="Next day as standard"
            text="Order before 3pm and get your order the next day as standard."
            imgSrc="/Images/Delivery.png"
            imgAlt="Next day as standard"
          />
          <InfoBlock
            title="Made by true artisans"
            text="Handmade crafted goods made with real passion and craftsmanship."
            imgSrc="/Images/Checkmark--outline.png"
            imgAlt="Made by true artisans"
          />
          <InfoBlock
            title="Unbeatable prices"
            text="For our materials and quality you won’t find better prices anywhere."
            imgSrc="/Images/Purchase.png"
            imgAlt="Unbeatable prices"
          />
          <InfoBlock
            title="Recycled packaging"
            text="We use 100% recycled packaging to ensure our footprint is manageable."
            imgSrc="/Images/Sprout.png"
            imgAlt="Recycled packaging"
          />
        </div>
      </div>

      <footer className="flex flex-col px-20 py-14 bg-indigo-950">
        <div className="text-white text-sm">Copyright 2022 Avion LTD</div>
      </footer>
    </div>
  );
}

export default MyComponent;
