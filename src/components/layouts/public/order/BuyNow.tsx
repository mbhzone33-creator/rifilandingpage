'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Plus,
  Minus,
  ShoppingBag,
  Truck,
  ShieldCheck,
  Phone,
  User,
  MapPin,
  AlertCircle,
  Package,
} from 'lucide-react';
import { toast } from 'sonner';

import { createOrder } from '@/services/orders.service';
import { gurProducts } from '@/data/gur-products';
import { trackBeginCheckout } from '../../shared/analytics/events';
import Image from 'next/image';

interface ISelectedProduct {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

const BuyNow = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [selectedProducts, setSelectedProducts] = useState<ISelectedProduct[]>(
    [],
  );

  const hasTrackedCheckout = useRef(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    district: '',
    thana: '',
    address: '',
    note: '',
    isInsideDhaka: true,
  });

  // DELIVERY CHARGE
  const shippingFee = form.isInsideDhaka ? 90 : 130;

  // SELECTED PRODUCTS
  const selectedItems = useMemo(() => {
    return selectedProducts.filter(item => item.quantity > 0);
  }, [selectedProducts]);

  // SUBTOTAL
  const subtotal = useMemo(() => {
    return selectedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }, [selectedItems]);

  // TOTAL
  const totalPrice = subtotal + (selectedItems.length > 0 ? shippingFee : 0);

  // TOTAL QUANTITY
  const totalQuantity = selectedItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  // TRACK BEGIN CHECKOUT
  useEffect(() => {
    if (selectedItems.length === 0) return;

    if (hasTrackedCheckout.current) return;

    hasTrackedCheckout.current = true;

    trackBeginCheckout({
      value: totalPrice,
      items: selectedItems.map(item => ({
        item_id: item.productId,
        item_name: item.name,
        price: Number(item.price),
        quantity: item.quantity,
        item_brand: 'Sera Agro',
        item_category: 'Gur',
      })),
    });
  }, [selectedItems, totalPrice]);

  // ADD PRODUCT
  const handleAddProduct = (productId: string) => {
    const product = gurProducts.find(item => item.id === productId);

    if (!product) return;

    setSelectedProducts(prev => {
      const existing = prev.find(item => item.productId === productId);

      if (existing) {
        return prev.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ];
    });
  };

  // REMOVE PRODUCT
  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts(prev => {
      return prev
        .map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter(item => item.quantity > 0);
    });
  };

  // HANDLE FORM CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // FORM VALIDATION
  const validateForm = () => {
    if (selectedItems.length === 0) {
      toast.error('কমপক্ষে একটি গুড় নির্বাচন করুন।');
      return false;
    }

    if (!form.name.trim()) {
      toast.error('আপনার নাম লিখুন।');
      return false;
    }

    if (!/^01\d{9}$/.test(form.phone.trim())) {
      toast.error('সঠিক ১১ সংখ্যার ফোন নম্বর লিখুন।');
      return false;
    }

    if (!form.district.trim()) {
      toast.error('আপনার জেলা লিখুন।');
      return false;
    }

    if (!form.thana.trim()) {
      toast.error('আপনার থানা লিখুন।');
      return false;
    }

    if (!form.address.trim()) {
      toast.error('সম্পূর্ণ ঠিকানা লিখুন।');
      return false;
    }

    return true;
  };

  // PLACE ORDER
  const handleOrder = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        district: form.district.trim(),
        thana: form.thana.trim(),
        address: form.address.trim(),
        note: form.note.trim() || undefined,
        isInsideDhaka: form.isInsideDhaka,

        items: selectedItems.map(item => ({
          // productId: item.productId,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          size: null,
          color: null,
        })),
      };

      const res = await createOrder(payload);

      // Handle common sendResponse structures
      const orderData = res?.data?.data ?? res?.data ?? res?.result ?? res;

      const orderId = orderData?.id;

      if (!orderId) {
        console.error('ORDER RESPONSE:', res);
        toast.error('Order ID পাওয়া যায়নি।');
        return;
      }

      toast.success('আপনার অর্ডার সফলভাবে সম্পন্ন হয়েছে!');

      router.push(`/thank-you?orderId=${orderId}`);
    } catch (error) {
      console.error('GUR ORDER ERROR:', error);

      toast.error('অর্ডার সম্পন্ন করা যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="buy-now"
      className="min-h-screen bg-[#15120f] py-8 text-white md:py-12"
    >
      <div className="mx-auto max-w-5xl px-3 sm:px-6">
        {/* HEADER */}

        <div className="mb-6">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-7 w-7 text-orange-500" />

            <h1 className="text-2xl font-extrabold md:text-3xl">
              আপনার অর্ডার
            </h1>
          </div>

          <p className="mt-2 text-sm text-gray-400">
            পছন্দের গুড় নির্বাচন করে অর্ডার সম্পন্ন করুন।
          </p>
        </div>

        {/* MAIN CARD */}

        <div className="rounded-sm border border-[#3b3329] bg-[#241f19] p-4 sm:p-6">
          {/* PRODUCT LIST */}

          <div>
            <h2 className="mb-4 text-base font-bold">
              কোন গুড় নেবেন? বেছে নিন
            </h2>

            <div className="space-y-2">
              {gurProducts.map(product => {
                const selected = selectedItems.find(
                  item => item.productId === product.id,
                );

                return (
                  <div
                    key={product.id}
                    className={`flex items-center justify-between gap-3 rounded-sm border p-3 transition ${
                      selected
                        ? 'border-orange-500 bg-orange-500/5'
                        : 'border-[#41382e] bg-[#191511]'
                    }`}
                  >
                    <div className="min-w-0 flex items-center gap-3">
                      <Image
                        src={product.imgUrl}
                        alt={product.name}
                        width={64}
                        height={64}
                        className="rounded-sm object-cover"
                      />
                      <div className="">
                        <h3 className="font-bold text-white">{product.name}</h3>

                        <p className="mt-0.5 text-sm text-gray-400">
                          ৳{product.price.toLocaleString('bn-BD')} /{' '}
                          {product.unit === 'কেজি' ? 'কেজি' : 'প্যাকেজ'}
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      {selected && (
                        <>
                          <button
                            type="button"
                            disabled={loading}
                            onClick={() => handleRemoveProduct(product.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-500 text-orange-500 transition hover:bg-orange-500 hover:text-white"
                          >
                            <Minus size={15} />
                          </button>

                          <span className="min-w-5 text-center font-bold">
                            {selected.quantity.toLocaleString('bn-BD')}
                          </span>
                        </>
                      )}

                      <button
                        type="button"
                        disabled={loading}
                        onClick={() => handleAddProduct(product.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-orange-500 text-orange-400 transition hover:bg-orange-500 hover:text-white disabled:opacity-50"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ORDER SUMMARY */}

          <div className="mt-6 border-t border-[#41382e] pt-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">মোট</h2>

              <p className="text-xl font-extrabold text-orange-400">
                ৳{totalPrice.toLocaleString('bn-BD')}
              </p>
            </div>

            <div className="mt-4 space-y-3">
              {selectedItems.length > 0 ? (
                selectedItems.map(item => (
                  <div
                    key={item.productId}
                    className="flex justify-between gap-3 text-sm text-gray-300"
                  >
                    <span>
                      {item.name} × {item.quantity.toLocaleString('bn-BD')}
                    </span>

                    <span className="font-semibold text-white">
                      ৳{(item.price * item.quantity).toLocaleString('bn-BD')}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-400">
                  এখনো কোনো গুড় নির্বাচন করেননি।
                </p>
              )}

              <div className="flex justify-between border-t border-[#41382e] pt-3 text-sm">
                <span className="text-gray-400">মোট পরিমাণ</span>

                <span className="font-semibold">
                  {totalQuantity.toLocaleString('bn-BD')} টি
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-400">ডেলিভারি চার্জ</span>

                <span className="font-semibold">
                  {selectedItems.length > 0
                    ? `৳${shippingFee.toLocaleString('bn-BD')}`
                    : '৳০'}
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-400">
              ডেলিভারি চার্জ কনফার্মেশন কলে জানানো হবে।
            </p>
          </div>

          {/* CUSTOMER INFORMATION */}

          <div className="mt-8 border-t border-[#41382e] pt-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                <User size={20} />
              </div>

              <div>
                <h2 className="font-bold text-white">আপনার ডেলিভারি তথ্য</h2>

                <p className="text-xs text-gray-400">
                  সঠিক তথ্য দিয়ে অর্ডার কনফার্ম করুন।
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* NAME */}

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  আপনার নাম *
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="আপনার সম্পূর্ণ নাম"
                  className="w-full rounded-xl border border-[#41382e] bg-[#191511] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500"
                />
              </div>

              {/* PHONE */}

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  ফোন নম্বর *
                </label>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={e => {
                      const value = e.target.value.replace(/\D/g, '');

                      if (value.length <= 11) {
                        setForm(prev => ({
                          ...prev,
                          phone: value,
                        }));
                      }
                    }}
                    placeholder="017XXXXXXXX"
                    maxLength={11}
                    inputMode="numeric"
                    className="w-full rounded-xl border border-[#41382e] bg-[#191511] px-4 py-3 pr-12 text-white outline-none placeholder:text-gray-500 focus:border-orange-500"
                  />

                  <Phone className="absolute right-4 top-3.5 h-4 w-4 text-gray-500" />
                </div>
              </div>

              {/* DISTRICT & THANA */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    জেলা *
                  </label>

                  <input
                    type="text"
                    name="district"
                    value={form.district}
                    onChange={handleChange}
                    placeholder="জেলার নাম"
                    className="w-full rounded-xl border border-[#41382e] bg-[#191511] px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    থানা *
                  </label>

                  <input
                    type="text"
                    name="thana"
                    value={form.thana}
                    onChange={handleChange}
                    placeholder="থানার নাম"
                    className="w-full rounded-xl border border-[#41382e] bg-[#191511] px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-orange-500"
                  />
                </div>
              </div>

              {/* ADDRESS */}

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  সম্পূর্ণ ঠিকানা *
                </label>

                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows={3}
                  placeholder="বাড়ি, রোড, গ্রাম বা এলাকার নাম লিখুন..."
                  className="w-full resize-none rounded-xl border border-[#41382e] bg-[#191511] px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-orange-500"
                />
              </div>

              {/* DELIVERY AREA */}

              <div>
                <label className="mb-3 block text-sm font-semibold">
                  ডেলিভারি এরিয়া *
                </label>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() =>
                      setForm(prev => ({
                        ...prev,
                        isInsideDhaka: true,
                      }))
                    }
                    className={`rounded-xl border p-4 text-left transition ${
                      form.isInsideDhaka
                        ? 'border-orange-500 bg-orange-500/10'
                        : 'border-[#41382e] bg-[#191511]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin size={17} className="text-orange-500" />

                      <span className="font-semibold">ঢাকার ভেতরে</span>
                    </div>

                    <p className="mt-2 text-sm text-gray-400">
                      ডেলিভারি চার্জ: ৳৯০
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setForm(prev => ({
                        ...prev,
                        isInsideDhaka: false,
                      }))
                    }
                    className={`rounded-xl border p-4 text-left transition ${
                      !form.isInsideDhaka
                        ? 'border-orange-500 bg-orange-500/10'
                        : 'border-[#41382e] bg-[#191511]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin size={17} className="text-orange-500" />

                      <span className="font-semibold">ঢাকার বাইরে</span>
                    </div>

                    <p className="mt-2 text-sm text-gray-400">
                      ডেলিভারি চার্জ: ৳১৩০
                    </p>
                  </button>
                </div>
              </div>

              {/* NOTE */}

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  অতিরিক্ত নোট (ঐচ্ছিক)
                </label>

                <textarea
                  name="note"
                  value={form.note}
                  onChange={handleChange}
                  rows={2}
                  placeholder="বিশেষ কোনো নির্দেশনা থাকলে লিখুন..."
                  className="w-full resize-none rounded-xl border border-[#41382e] bg-[#191511] px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-orange-500"
                />
              </div>
            </div>

            {/* FAKE ORDER NOTICE */}

            <div className="mt-6 rounded-xl border border-amber-600/30 bg-amber-500/5 p-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 shrink-0 text-amber-500" />

                <div>
                  <h3 className="text-sm font-bold text-amber-400">
                    দয়া করে ফেইক অর্ডার করবেন না।
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-gray-400">
                    একটি অর্ডার প্রস্তুত করতে আমাদের সময়, শ্রম ও প্যাকেজিং খরচ
                    হয়। তাই নিশ্চিত হয়ে অর্ডার করুন।
                  </p>
                </div>
              </div>
            </div>

            {/* ORDER BUTTON */}

            <button
              type="button"
              onClick={handleOrder}
              disabled={loading || selectedItems.length === 0}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-4 font-bold text-white shadow-lg shadow-orange-500/10 transition hover:bg-orange-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                'অর্ডার প্রসেস হচ্ছে...'
              ) : (
                <>
                  <ShoppingBag size={19} />
                  অর্ডার কনফার্ম করুন — ৳{totalPrice.toLocaleString('bn-BD')}
                </>
              )}
            </button>

            {/* TRUST */}

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="flex items-center justify-center gap-2 rounded-lg bg-[#191511] p-3 text-xs text-gray-400">
                <Truck size={17} className="text-orange-500" />
                সারা বাংলাদেশে ডেলিভারি
              </div>

              <div className="flex items-center justify-center gap-2 rounded-lg bg-[#191511] p-3 text-xs text-gray-400">
                <ShieldCheck size={17} className="text-green-500" />
                ক্যাশ অন ডেলিভারি
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
