'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';

const Banner = () => {
  const handleOrderNow = () => {
    document.getElementById('buy-now')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#321907]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,#61330f_0%,#321907_55%,#241005_100%)]" />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-semibold text-orange-300 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              রিফি বাজার
              <span className="text-orange-100/40">|</span>
              শীতের বিশেষ অফার
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-xl text-[32px] leading-[1.35] font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[52px]">
              এই শীতে ঘরে আনুন
              <span className="mt-1 block text-[#55E58D]">
                ৪ রকম খাঁটি গুড়ের কম্বো
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-lg text-sm leading-7 text-orange-100/70 sm:text-base">
              শীতের ঐতিহ্যবাহী স্বাদ উপভোগ করুন খাঁটি খেজুরের গুড়ের চারটি ভিন্ন
              আইটেমে। প্রিয়জনদের জন্যও হতে পারে দারুণ একটি উপহার।
            </p>

            {/* Price */}
            <div className="mt-7 flex items-center gap-4">
              <div>
                <p className="text-xs font-medium text-orange-100/60 sm:text-sm">
                  সম্পূর্ণ কম্বো প্যাকেজ
                </p>

                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    ৳৯৯৯
                  </span>

                  <span className="text-sm font-medium text-orange-100/50">
                    মাত্র
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-green-400/20 bg-green-400/10 px-3 py-2">
                <p className="text-xs font-semibold text-green-300">
                  বিশেষ অফার
                </p>
                <CheckCircle2 size={19} className="mt-1 text-green-400" />
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleOrderNow}
              className="group mt-7 flex w-full items-center justify-center gap-3 rounded-sm bg-[#FF851B] px-7 py-4 text-base font-bold text-[#321907] shadow-lg shadow-orange-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF9A3D] sm:w-auto"
            >
              এখনই অর্ডার করুন
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* Trust Indicators */}
            <div className="mt-8 grid w-full grid-cols-3 gap-3 border-t border-white/10 pt-6">
              <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
                <CheckCircle2 size={20} className="text-[#55E58D]" />
                <span className="text-[11px] leading-5 text-orange-100/70 sm:text-xs">
                  খাঁটি পণ্য
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
                <ShieldCheck size={20} className="text-[#55E58D]" />
                <span className="text-[11px] leading-5 text-orange-100/70 sm:text-xs">
                  মানসম্মত প্যাকেজিং
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
                <Truck size={20} className="text-[#55E58D]" />
                <span className="text-[11px] leading-5 text-orange-100/70 sm:text-xs">
                  হোম ডেলিভারি
                </span>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
            {/* Image Glow */}
            <div className="absolute inset-8 rounded-full bg-orange-400/10 blur-[80px]" />

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-md border border-white/10 bg-[#F8EBDD] shadow-2xl shadow-black/30 sm:rounded-3xl">
              <Image
                src="/images/gur-banner.png"
                alt="খাঁটি খেজুরের গুড় কম্বো প্যাকেজ"
                width={1000}
                height={750}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            {/* Floating Label */}
            <div className="absolute -bottom-4 left-4 rounded-xl border border-white/10 bg-[#42250F] px-4 py-3 shadow-xl sm:bottom-5 sm:left-5">
              <p className="text-xs text-orange-100/60">শীতের বিশেষ আয়োজন</p>
              <p className="mt-1 text-sm font-bold text-[#55E58D]">
                ঐতিহ্যের খাঁটি স্বাদ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
