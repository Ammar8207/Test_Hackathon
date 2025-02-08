import * as React from "react";
import Link from "next/link";
import Image from "next/image";

function MyComponent() {
  return (
    <>
      <div className="flex overflow-hidden flex-col bg-white">
        <div className="flex overflow-hidden flex-wrap gap-10 justify-end py-2.5 pr-4 pl-20 w-full text-sm text-white bg-indigo-950 max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-2 items-center my-auto">
            <Image
              loading="lazy"
              src="/Images/Delivery.png"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 bg-blend-multiply aspect-square fill-white"
              width={16}
              height={16}
            />
            <div className="self-stretch my-auto flex justify-center">
              Free delivery on all orders over £50 with code easter checkout
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col pt-5 w-full bg-white max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1361px] max-md:max-w-full">
          <div className="text-2xl text-zinc-800 ml-4">Avion</div>
          <div className="flex gap-10 my-auto">
            <div className="flex gap-8 items-start text-base text-gray-500">
              <nav className="flex gap-10 justify-center items-center text-base text-gray-500 mt-5 mb-10">
                <Link href="/productpage" className="hover:text-gray-700">
                  Product Page
                </Link>
                <Link href="/" className="hover:text-gray-700">
                  Home Page
                </Link>
                <Link href="/shoppingcart" className="hover:text-gray-700">
                  Shopping Cart
                </Link>
              </nav>
            </div>
            <div className="flex gap-4 items-start self-start mt-1.5">
            <Image
            src="/Images/Search.png"
            alt="Search Icon"
            width={24} 
            height={24}
            />
             <Image loading="lazy" src="/Images/Cart.png" alt="Cart" width={16} height={16} />
              <Image loading="lazy" src="/Images/User.png" alt="Social link 3" width={16} height={16} />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center px-16 py-24 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1184px] max-md:max-w-full">
            <div className="text-4xl leading-[50px] text-indigo-950 max-md:max-w-full">
              A brand built on the love of craftsmanship,
              <br />
              quality and outstanding customer service
            </div>
            <div className="overflow-hidden gap-2.5 self-start px-8 py-4 text-base bg-stone-50 text-indigo-950 max-md:px-5">
              View our products
            </div>
          </div>
        </div>

        {/* Replace other <img> with <Image> components similarly */}
        {/* Avoid excessive repetition in the example here for brevity */}
      </div>
    </>
  );
}

export default MyComponent;
