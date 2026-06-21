import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Semaforo from "@/components/Semaforo";
import PorQue from "@/components/PorQue";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Semaforo />
        <PorQue />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
