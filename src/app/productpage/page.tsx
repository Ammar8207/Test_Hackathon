"use client";
import * as React from "react";
import Image from "next/image";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string;
}

interface MenuItemProps {
  text: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, price }) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow max-md:mt-10">
      <div className="flex flex-col max-w-full w-[305px]">
        <Image
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="object-contain w-full aspect-[0.81]"
          width={305}
          height={250}
        />
      </div>
      <div className="flex flex-col self-start mt-6 text-indigo-950">
        <div className="text-xl leading-snug">{title}</div>
        <div className="mt-2 text-lg">£{price}</div>
      </div>
    </div>
  </div>
);

const MenuItem: React.FC<MenuItemProps> = ({ text, className = "" }) => (
  <div className={`mt-3 ${className}`}>{text}</div>
);

const Page: React.FC = () => {
  const [, setSelectedCategory] = React.useState<string | null>(null);
  const [selectedSort, setSelectedSort] = React.useState<string>("Date added");

  const products: Array<ProductCardProps & { dateAdded: string }> = [
    { imageSrc: "/Images/image1.png", title: "The Dandy chair", price: "250", dateAdded: "2025-01-01" },
    { imageSrc: "/Images/image4.png", title: "Rustic Vase Set", price: "155", dateAdded: "2025-01-05" },
    { imageSrc: "/Images/image5.png", title: "The Silky Vase", price: "125", dateAdded: "2025-01-03" },
    { imageSrc: "/Images/image3.png", title: "The Lucy Lamp", price: "399", dateAdded: "2025-01-07" },
  ];

  const sortedProducts = [...products].sort((a, b) =>
    selectedSort === "Date added"
      ? new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      : 0
  );

  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <div className="flex overflow-hidden flex-col px-7 py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-center w-full max-md:max-w-full">
          <Image
            loading="lazy"
            src="/Images/Search.png"
            alt="Search"
            className="object-contain shrink-0 w-4 aspect-square"
            width={16}
            height={16}
          />
          <div className="self-stretch text-2xl text-zinc-800">Avion</div>
          <div className="flex gap-4">
            <Image loading="lazy" src="/Images/Cart.png" alt="Cart" width={16} height={16} />
            <Image loading="lazy" src="/Images/User.png" alt="User" width={16} height={16} />
          </div>
        </div>
        <div className="shrink-0 mt-5 h-px border border-solid border-black border-opacity-10" />
      </div>

      {/* Page Title */}
      <div className="overflow-hidden px-16 pt-32 pb-9 w-full text-4xl leading-snug text-white max-md:px-5">
        All products
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-10 justify-center px-6 py-2 w-full bg-white max-md:px-5">
        <div className="flex flex-wrap gap-3 text-base text-indigo-950">
          <button
            className="flex gap-2 items-center px-6 py-3 bg-white max-md:px-5"
            onClick={() => setSelectedCategory("Furniture")}
          >
            <span>Category</span>
            <Image loading="lazy" src="/Images/Category.png" alt="Category Icon" width={16} height={16} />
          </button>
        </div>

        <form className="flex gap-4 items-center">
          <label htmlFor="sortSelect" className="text-sm text-indigo-950">Sorting by:</label>
          <div className="flex gap-2 items-center px-6 py-3 text-base bg-white text-indigo-950 max-md:px-5">
            <select
              id="sortSelect"
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="appearance-none bg-transparent border-none focus:outline-none"
            >
              <option>Date added</option>
            </select>
            <Image loading="lazy" src="/Images/Sorting.png" alt="Sort Icon" width={16} height={16} />
          </div>
        </form>
      </div>

      {/* Product List */}
      <div className="justify-center px-20 py-6 w-full bg-white max-md:px-5">
        <div className="flex gap-5 max-md:flex-col">
          {sortedProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col px-20 pt-14 pb-6 w-full bg-indigo-950 max-md:px-5">
        <div className="flex flex-wrap gap-5 justify-between text-sm">
          <div className="flex flex-col text-white">
            <div className="text-base">Menu</div>
            <MenuItem text="New arrivals" />
            <MenuItem text="Best sellers" />
            <MenuItem text="Recently viewed" />
            <MenuItem text="Popular this week" />
            <MenuItem text="All products" />
          </div>
          <div className="flex flex-col text-base">
            <div className="text-white">Join our mailing list</div>
            <form className="flex flex-wrap mt-4 w-full">
              <label htmlFor="emailInput" className="sr-only">Email address</label>
              <input
                type="email"
                id="emailInput"
                placeholder="your@email.com"
                className="flex-1 px-8 py-4 text-white bg-opacity-10 bg-white min-w-[240px] max-md:px-5"
              />
              <button type="submit" className="px-8 py-4 bg-white text-indigo-950 max-md:px-5">
                Sign up
              </button>
            </form>
          </div>
        </div>
        <div className="shrink-0 mt-12 h-px bg-indigo-800 border border-indigo-800 w-full max-md:mt-10" />
        <div className="flex flex-wrap gap-5 justify-between mt-6 w-full">
          <div className="text-sm text-white">Copyright 2022 Avion LTD</div>
          <Image loading="lazy" src="/Images/SocialLinks.png" alt="Social Links" width={128} height={32} />
        </div>
      </footer>
    </div>
  );
};

export default Page;
