import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PlansSection from "@/components/sections/PlansSection";
import TransformationsSection from "@/components/sections/TransformationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Personal Trainer Caio Vinícius</title>
        <meta
          name="description"
          content="Personal Trainer em São Paulo com +10 anos de experiência. Treinos personalizados, acompanhamento diário via app e resultados comprovados. Agende sua avaliação gratuita!"
        />
        <meta
          name="keywords"
          content="personal trainer, personal trainer são paulo, treino personalizado, emagrecimento, hipertrofia, condicionamento físico"
        />
        <meta property="og:title" content="Personal Trainer Caio Vinícius" />
        <meta
          property="og:description"
          content="Transforme seu corpo em 90 dias com acompanhamento profissional real. +500 alunos transformados."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://caiovinicius.com.br" />
      </Helmet>

      <Navbar />
      <main className="pt-16">
        <div id="topo" />
        <HeroSection />
        <PlansSection />
        <TransformationsSection />
        <AboutSection />
        <TestimonialsSection />
        <FinalCTASection />
        <FAQSection />
        <FooterSection />
        <WhatsAppFloat />
      </main>
    </>
  );
};

export default Index;