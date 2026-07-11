import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PorQue from "@/components/PorQue";
import Servicios from "@/components/Servicios";
import Semaforo from "@/components/Semaforo";
import Testimonios from "@/components/Testimonios";
import FAQ from "@/components/FAQ";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PorQue />
        <Servicios />
        <Semaforo />
        <Testimonios />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
