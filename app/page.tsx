import Hero from "@/app/components/Hero";
import NewArrivalsHome from "@/app/components/NewArrivalsHome";
import FeaturedProducts from "@/app/components/FeaturedProducts";
import MenProducts from "@/app/components/MenProducts";
import WomensProducts from "@/app/components/Womens";
import BestsellersHome from "@/app/components/BestsellersHome";
import UnisexProducts from "@/app/components/Unisex";
import TopProducts from "@/app/components/TopProduct";
import Services from "@/app/components/Services";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <MenProducts />
      <WomensProducts />
      <BestsellersHome />
      <UnisexProducts />
      <NewArrivalsHome />
      <TopProducts />
      <Services />
      <Footer />
    </main>
  );
}
