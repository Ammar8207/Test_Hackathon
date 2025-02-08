"use client";
import Image from "next/image";
import * as React from "react";

interface CartItemProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

interface FooterLinkGroupProps {
  title: string;
  links: string[];
}

interface QuantityControlProps {
  quantity: number;
  price: string;
}

const CartItem: React.FC<CartItemProps> = ({ image, title, description, price }) => (
  <div className="flex gap-5 items-center">
    <Image loading="lazy" src={image} alt={title} width={109} height={88} className="object-contain" />
    <div className="flex flex-col">
      <div className="text-xl leading-snug">{title}</div>
      <div className="mt-2 text-sm leading-5">{description}</div>
      <div className="mt-2 text-base">{price}</div>
    </div>
  </div>
);

const QuantityControl: React.FC<QuantityControlProps> = ({ quantity, price }) => (
  <div className="flex gap-5 justify-between items-start w-full">
    <div className="flex gap-8 items-center px-4 py-3 bg-stone-50 text-slate-200">
      <button aria-label="Decrease quantity">-</button>
      <div className="text-indigo-950">{quantity}</div>
      <button aria-label="Increase quantity">+</button>
    </div>
    <div className="text-lg text-indigo-950">{price}</div>
  </div>
);

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, links }) => (
  <div className="flex flex-col text-white">
    <div className="text-base">{title}</div>
    {links.map((link, index) => (
      <div key={index} className="mt-3">{link}</div>
    ))}
  </div>
);

export default function Page() {
  const cartItems = [
    { image: "/Images/vase.png", title: "Graystone vase", description: "A timeless ceramic vase.", price: "£85" },
    { image: "/Images/pot.png", title: "Basic white vase", description: "Beautiful and simple.", price: "£85" }
  ];

  const footerGroups = [
    { title: "Menu", links: ["New arrivals", "Best sellers", "Recently viewed", "Popular this week", "All products"] },
    { title: "Categories", links: ["Crockery", "Furniture", "Homeware", "Plant pots", "Chairs"] },
    { title: "Our company", links: ["About us", "Vacancies", "Contact us", "Privacy", "Returns policy"] }
  ];

  return (
    <div className="flex flex-col bg-stone-50">
      <header className="flex flex-col px-7 py-5 bg-white">
        <div className="flex justify-between items-center">
          <Image loading="lazy" src="/Images/Search.png" alt="Search" width={16} height={16} />
          <div className="text-2xl text-zinc-800">Avion</div>
          <div className="flex gap-4">
            <Image loading="lazy" src="/Images/Cart.png" alt="Cart" width={16} height={16} />
            <Image loading="lazy" src="/Images/User.png" alt="User" width={16} height={16} />
          </div>
        </div>
        <div className="mt-5 h-px border border-black border-opacity-10" />
      </header>

      <main className="flex flex-col items-center px-20 py-14">
        <h1 className="text-4xl leading-snug text-indigo-950">Your shopping cart</h1>
        <div className="flex gap-5 justify-between mt-12 text-sm text-indigo-950">
          <div>Product</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>
        <div className="mt-3 h-px border bg-slate-200" />
        <div className="flex gap-5 justify-between mt-5">
          <div className="flex flex-col text-indigo-950">
            {cartItems.map((item, index) => (
              <CartItem key={index} {...item} />
            ))}
          </div>
          <div className="flex flex-col self-start mt-3">
            <QuantityControl quantity={1} price="£85" />
            <div className="mt-10">
              <QuantityControl quantity={1} price="£125" />
            </div>
          </div>
        </div>
        <div className="mt-8 h-px border bg-slate-200" />
        <div className="flex flex-col self-end mt-7">
          <div className="flex gap-4 items-center">
            <div className="text-xl text-indigo-800">Subtotal</div>
            <div className="text-2xl text-indigo-950">£210</div>
          </div>
          <div className="mt-3 text-sm text-indigo-800">Taxes and shipping calculated at checkout</div>
          <button className="px-8 py-4 mt-4 text-white bg-indigo-950">Go to checkout</button>
        </div>
      </main>

      <footer className="flex flex-col px-20 pt-14 pb-6 bg-indigo-950">
        <div className="flex justify-between items-start text-sm">
          {footerGroups.map((group, index) => (
            <FooterLinkGroup key={index} {...group} />
          ))}
          <div className="flex flex-col text-base">
            <div className="text-white">Join our mailing list</div>
            <form className="flex mt-4">
              <input type="email" placeholder="your@email.com" className="px-8 py-4 text-white bg-opacity-10 bg-white min-w-[240px]" />
              <button type="submit" className="px-8 py-4 bg-white text-indigo-950">Sign up</button>
            </form>
          </div>
        </div>
        <div className="mt-12 h-px bg-indigo-800 border-indigo-800" />
        <div className="flex justify-between mt-6">
          <div className="text-sm text-white">Copyright 2022 Avion LTD</div>
          <Image loading="lazy" src="/Images/SocialLinks.png" alt="Social Links" width={128} height={32} />
        </div>
      </footer>
    </div>
  );
}
