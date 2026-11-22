import Banner from '@/components/layouts/public/banner/Banner';
import Category from '@/components/layouts/public/category/Category';
import FooterCTA from '@/components/layouts/public/Footer-CTA/FooterCTA';
import GurProducts from '@/components/layouts/public/gur-products/Gur-Products';
import BuyNow from '@/components/layouts/public/order/BuyNow';
import Products from '@/components/layouts/public/product/Products.';
import PromoBanner from '@/components/layouts/public/Promo-Banner/PromoBanner';
import TopDeal from '@/components/layouts/public/topdeal/TopDeal';
import WhyChooseUs from '@/components/layouts/public/why-choose-us/WhyChooseUs';

export default function Home() {
  return (
    <div className="container mx-auto  ">
      <Banner></Banner>
      <div className=" md:px-0">
        {/* <Category></Category> */}
        {/* <TopDeal></TopDeal>
        <PromoBanner></PromoBanner> */}
        {/* <Products></Products> */}
        <GurProducts></GurProducts>
        <WhyChooseUs></WhyChooseUs>
        <BuyNow></BuyNow>
        {/* <FooterCTA></FooterCTA> */}
      </div>
    </div>
  );
}
