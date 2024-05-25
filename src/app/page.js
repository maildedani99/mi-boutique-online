import AboutAs from "./components/AboutAs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MetaTags from "./components/MetaTags";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full flex-col bg-gradient-to-r from-[white] to-[#E2E3DE] mx-auto ">
      <MetaTags
        title="Inicio - Mi Boutique Online"
        description="Descubre las últimas tendencias en moda en Mi Boutique Online."
        keywords="moda, boutique, tienda online, ropa"
        image="https://res.cloudinary.com/tu_cloud_name/image/upload/v1620310732/assets/images/og-image-home.jpg"
        url="https://miboutiqueonline.es"
      />
      <Header />
      <AboutAs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
