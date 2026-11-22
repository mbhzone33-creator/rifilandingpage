'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import {
  ArrowRight,
  Check,
  ChevronDown,
  MessageCircle,
  ShieldCheck,
  X,
} from 'lucide-react';

const comparison = [
  'খাঁটি ও প্রাকৃতিক গুড়',
  'ভেজালমুক্ত পণ্যের নিশ্চয়তা',
  'পরিচ্ছন্ন ও স্বাস্থ্যসম্মত প্যাকেজিং',
  'সঠিক ওজন নিশ্চিত',
  'সততার সাথে ব্যবসা পরিচালনা',
];

const faqs = [
  {
    question: 'কম্বোতে কী কী আছে?',
    answer:
      'এই কম্বোতে রয়েছে ৫০০ গ্রাম লালি গুড়, ৫০০ গ্রাম পাটালি গুড়, ৫০০ গ্রাম দানাদার গুড় এবং ৫০০ গ্রাম খেজুর পাটালি। মোট ২ কেজি গুড়।',
  },
  {
    question: 'কম্বোর দাম কত?',
    answer: 'সম্পূর্ণ ৪ আইটেমের ২ কেজি কম্বো প্যাকেজের মূল্য মাত্র ৯৯৯ টাকা।',
  },
  {
    question: 'কত দিনে ডেলিভারি পাব?',
    answer:
      'ঢাকার মধ্যে সাধারণত ১–২ দিন এবং ঢাকার বাইরে ২–৪ কার্যদিবসের মধ্যে ডেলিভারি দেওয়া হয়।',
  },
  {
    question: 'পণ্য হাতে পেয়ে টাকা দিতে পারব?',
    answer:
      'জি! আমাদের ক্যাশ অন ডেলিভারি সুবিধা রয়েছে। পণ্য হাতে পেয়ে মূল্য পরিশোধ করতে পারবেন।',
  },
];

const reviews = [
  {
    id: 1,
    image: '/images/review-1.jpeg',
    title: 'পণ্যের মান সত্যিই ভালো',
    platform: 'Facebook Messenger',
  },
  {
    id: 2,
    image: '/images/review-2.jpeg',
    title: 'পণ্যের মান সত্যিই ভালো',
    platform: 'WhatsApp',
  },
  {
    id: 3,
    image: '/images/review-3.jpeg',
    title: 'পণ্যের মান সত্যিই ভালো',
    platform: 'Facebook Messenger',
  },
  {
    id: 4,
    image: '/images/review-4.jpeg',
    title: 'পণ্যের মান সত্যিই ভালো',
    platform: 'WhatsApp',
  },
];

const WhyChooseUs = () => {
  const handleOrderNow = () => {
    document.getElementById('buy-now')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <section className="relative overflow-hidden bg-[#241509] px-4 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        {/* ================= WHY CHOOSE US ================= */}

        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-semibold text-green-400">
              <ShieldCheck size={15} />
              আমাদের প্রতিশ্রুতি
            </span>

            <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
              কেন কিনবেন{' '}
              <span className="text-[#55E58D]">রিফি বাজারের গুড়?</span>
            </h2>

            <p className="mt-3 text-sm leading-7 text-orange-100/60 sm:text-base">
              আপনার পরিবারের জন্য ভালো মানের পণ্য নিশ্চিত করাই আমাদের লক্ষ্য।
            </p>
          </div>

          {/* Comparison Cards */}

          <div className="mt-8 grid grid-cols-2 gap-2 sm:gap-5">
            {/* Others */}
            <div className="rounded-sm border border-red-400/15 bg-[#352315] p-3 sm:p-5">
              <div className="rounded-lg bg-red-500/10 px-2.5 py-3">
                <h3 className="text-sm font-bold text-red-300 sm:text-base">
                  সাধারণ বাজারের গুড়
                </h3>
              </div>

              <div className="mt-4 space-y-4">
                {[
                  'গুণগত মান অনিশ্চিত',
                  'ভেজাল থাকার আশঙ্কা',
                  'সঠিক ওজন নিয়ে সন্দেহ',
                  'প্যাকেজিংয়ে অসতর্কতা',
                  'উৎপাদনের তথ্য অজানা',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 border-b border-dashed border-white/10 pb-3 last:border-0"
                  >
                    <X size={15} className="mt-0.5 shrink-0 text-red-400" />

                    <span className="text-[11px] leading-5 text-orange-100/60 sm:text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rifi Bazar */}
            <div className="rounded-sm border border-green-400/20 bg-[#352315] p-3 shadow-lg shadow-green-950/10 sm:p-5">
              <div className="rounded-lg bg-green-400/10 px-2.5 py-3">
                <h3 className="text-sm font-bold text-[#55E58D] sm:text-base">
                  রিফি বাজারের গুড়
                </h3>
              </div>

              <div className="mt-4 space-y-4">
                {comparison.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 border-b border-dashed border-white/10 pb-3 last:border-0"
                  >
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0 text-[#55E58D]"
                    />

                    <span className="text-[11px] leading-5 text-white/85 sm:text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= CUSTOMER REVIEWS ================= */}

        <div className="mt-10">
          {/* Section Heading */}
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">
              Customer Feedback
            </span>

            <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
              আমাদের কাস্টমাররা কী বলছেন?
            </h2>

            <p className="mt-3 text-sm text-orange-100/60">
              আপনাদের সন্তুষ্টিই আমাদের সবচেয়ে বড় অর্জন।
            </p>
          </div>

          {/* Review Slider */}
          <div className="mx-auto mt-8 max-w-4xl px-1 pb-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={14}
              slidesPerView={1.08}
              centeredSlides={false}
              grabCursor
              loop={reviews.length > 2}
              autoplay={
                reviews.length > 2
                  ? {
                      delay: 3500,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
                  : false
              }
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 18,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              className="customer-review-slider"
            >
              {reviews.map(review => (
                <SwiperSlide key={review.id} className="h-auto">
                  <div className="group h-full overflow-hidden rounded-sm border border-white/10 bg-[#352315] transition-all duration-300 hover:border-orange-400/30">
                    {/* Review Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F8EBDD]">
                      <Image
                        src={review.image}
                        alt={review.title || 'Customer review image'}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 768px) 60vw, 400px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Review Details */}
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center justify-between gap-3">
                        {/* Rating */}
                        <div className="flex items-center gap-1 text-yellow-400">
                          {[1, 2, 3, 4, 5].map(star => (
                            <span key={star}>★</span>
                          ))}
                        </div>

                        <span className="text-[11px] text-orange-100/40">
                          {review.platform}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Pagination Styling */}
          <style jsx global>{`
            .customer-review-slider .swiper-pagination {
              bottom: 0 !important;
            }

            .customer-review-slider .swiper-pagination-bullet {
              width: 7px;
              height: 7px;
              background: #a78b68;
              opacity: 0.5;
              transition: all 0.3s ease;
            }

            .customer-review-slider .swiper-pagination-bullet-active {
              width: 22px;
              border-radius: 10px;
              background: #ff851b;
              opacity: 1;
            }
          `}</style>
        </div>

        {/* ================= ORDER CTA ================= */}

        <div className=" text-center">
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

        {/* ================= FAQ ================= */}

        <div className="mx-auto mt-7 md:mt-10 max-w-3xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">
              FAQ
            </span>

            <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
              আপনার জিজ্ঞাসা, আমাদের উত্তর
            </h2>

            <p className="mt-3 text-sm text-orange-100/60">
              অর্ডার করার আগে সাধারণ কিছু প্রশ্নের উত্তর জেনে নিন।
            </p>
          </div>

          {/* FAQ Accordion */}

          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group overflow-hidden rounded-md border border-white/10 bg-[#352315] transition-colors open:border-green-400/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-sm font-semibold text-white sm:p-5 sm:text-base [&::-webkit-details-marker]:hidden">
                  {faq.question}

                  <ChevronDown
                    size={19}
                    className="shrink-0 text-[#55E58D] transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>

                <div className="border-t border-white/5 px-4 py-4 text-xs leading-7 text-orange-100/65 sm:px-5 sm:text-sm">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* ================= FINAL CTA ================= */}

        <div className="mt-12 rounded-md border border-orange-400/10 bg-[#352315] px-5 py-8 text-center sm:px-10 sm:py-10">
          <h3 className="text-lg font-bold text-white sm:text-2xl">
            আর দেরি কেন? আজই অর্ডার করুন!
          </h3>

          <p className="mt-2 text-sm text-orange-100/60">
            শীতের ঐতিহ্যবাহী খাঁটি গুড় পৌঁছে যাক আপনার ঘরে।
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#07813C] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-700"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <a
              href="#buy-now"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF851B] px-6 py-3 text-sm font-bold text-[#321907] transition-colors hover:bg-orange-400"
            >
              অর্ডার করুন
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
