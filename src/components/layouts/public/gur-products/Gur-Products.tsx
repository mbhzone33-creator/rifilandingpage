'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle2, PackageCheck, Truck } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'লালি গুড়',
    weight: '৫০০ গ্রাম',
    image: '/images/nali gur.jpeg',
  },
  {
    id: 2,
    name: 'পাটালি গুড়',
    weight: '৫০০ গ্রাম',
    image: '/images/patali gur.jpeg',
  },
  {
    id: 3,
    name: 'দানাদার গুড়',
    weight: '৫০০ গ্রাম',
    image: '/images/danadar gur.jpeg',
  },
  {
    id: 4,
    name: 'খেজুর পাটালি',
    weight: '৫০০ গ্রাম',
    image: '/images/foyal-patali gur.jpeg',
  },
];

const GurProducts = () => {
  const handleOrderNow = () => {
    document.getElementById('buy-now')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#241509] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mx-auto mb-9 max-w-xl text-center sm:mb-12">
          <span className="inline-block rounded-full border border-green-400/20 bg-green-400/10 px-4 py-1.5 text-xs font-semibold text-green-400">
            আমাদের বিশেষ আয়োজন
          </span>

          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
            কম্বোতে যা যা থাকছে
          </h2>

          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-[#FF851B]" />

          <p className="mt-4 text-sm leading-7 text-orange-100/60 sm:text-base">
            চারটি আলাদা স্বাদ, প্রতিটি ৫০০ গ্রাম। সুন্দরবনের ঐতিহ্যবাহী খেজুরের
            গুড়ের স্বাদ নিন একসাথে।
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-5 lg:grid-cols-4">
          {products.map(product => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-sm border border-white/10 bg-[#352315] transition-all duration-300 hover:border-green-400/30"
            >
              {/* Product Image */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#E3E3E3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Weight Badge */}
                <span className="absolute bottom-2 right-2 rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-[#5A351C] shadow-sm sm:text-xs">
                  {product.weight}
                </span>
              </div>

              {/* Product Details */}
              <div className="px-2 py-3 text-center sm:px-4 sm:py-4">
                <h3 className="text-sm font-bold text-white sm:text-base">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-green-400">
                  <CheckCircle2 size={14} />
                  <span>প্রিমিয়াম কোয়ালিটি</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Weight */}
        <div className="mt-6 flex items-center justify-center gap-2 rounded-sm border border-green-400/10 bg-[#123B27] px-4 py-4 text-center sm:mt-8">
          <PackageCheck size={20} className="shrink-0 text-green-400" />

          <p className="text-sm font-semibold text-green-300 sm:text-base">
            মোট ২ কেজি গুড় + সুন্দর প্যাকেজিং
          </p>
        </div>

        {/* Order Button */}
        <div className="mt-3 flex justify-center">
          <button
            onClick={handleOrderNow}
            className="group  flex w-full items-center justify-center gap-3 rounded-sm bg-[#FF851B] px-7 py-4 text-base font-bold text-[#321907] shadow-lg shadow-orange-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF9A3D] sm:w-auto"
          >
            এখনই অর্ডার করুন
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Service Features */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
          {/* Delivery */}
          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#352315] p-4 sm:p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
              <Truck size={22} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-white sm:text-base">
                দ্রুত হোম ডেলিভারি
              </h3>

              <p className="mt-1 text-xs leading-5 text-orange-100/60 sm:text-sm">
                সারা দেশে নির্ভরযোগ্য ডেলিভারি সার্ভিস।
              </p>
            </div>
          </div>

          {/* COD */}
          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#352315] p-4 sm:p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-orange-400">
              <PackageCheck size={22} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-white sm:text-base">
                ক্যাশ অন ডেলিভারি
              </h3>

              <p className="mt-1 text-xs leading-5 text-orange-100/60 sm:text-sm">
                অর্ডার করুন, পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GurProducts;

// {
//   /* Product Grid */
// }
// <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
//   {products.map(product => (
//     <div
//       key={product.id}
//       className="group overflow-hidden rounded-2xl border border-white/10 bg-[#352315] transition-all duration-300 hover:border-green-400/30"
//     >
//       {/* Product Image */}
//       <div className="relative aspect-square w-full overflow-hidden bg-[#F7F2EB]">
//         <Image
//           src={product.image}
//           alt={product.name}
//           fill
//           sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />

//         {/* Weight Badge */}
//         <span className="absolute bottom-2 right-2 rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-[#5A351C] shadow-sm sm:text-xs">
//           {product.weight}
//         </span>
//       </div>

//       {/* Product Details */}
//       <div className="px-2 py-3 text-center sm:px-4 sm:py-4">
//         <h3 className="text-sm font-bold text-white sm:text-base">
//           {product.name}
//         </h3>

//         <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-green-400">
//           <CheckCircle2 size={14} />
//           <span>প্রিমিয়াম কোয়ালিটি</span>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>;
