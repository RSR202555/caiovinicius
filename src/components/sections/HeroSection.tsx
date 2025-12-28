import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Award, Users, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
import heroVideo from "@/assets/video.mp4";

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const scrollToPlans = () => {
    const el = document.getElementById("planos");
    if (!el) {
      window.location.hash = "#planos";
      return;
    }

    const targetTop = el.getBoundingClientRect().top + window.scrollY - 80;
    const nudgeTop = targetTop + 1;

    window.scrollTo({ top: nudgeTop, behavior: "auto" });
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: targetTop, behavior: "smooth" });
    });
  };

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="relative min-h-screen bg-hero-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 100px, hsla(0,0%,100%,0.03) 100px, hsla(0,0%,100%,0.03) 101px)`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-14">
        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium backdrop-blur-sm border border-primary/30">
            <Award className="w-4 h-4" />
            +10 Anos de Experiência
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium backdrop-blur-sm border border-primary/30">
            <Users className="w-4 h-4" />
            +500 Alunos Transformados
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto mb-10"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
            PARE DE TENTAR SOZINHO.{" "}
            <span className="text-primary">TENHA UM TREINO E UMA ESTRATÉGIA FEITOS PARA O SEU OBJETIVO.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80">
            Treinos prontos, dieta personalizada e acompanhamento profissional para quem quer resultado real, sem perder tempo e dinheiro.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl">
            {!isVideoPlaying ? (
              <>
                {/* Video Thumbnail */}
                <img
                  src={heroBg}
                  alt="Apresentação do Personal Trainer"
                  className="w-full h-full object-contain bg-hero-bg"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-hero-bg/40" />
                
                {/* Play Button */}
                <button
                  onClick={handlePlayVideo}
                  className="absolute inset-0 flex flex-col items-center justify-center group cursor-pointer"
                  aria-label="Assistir vídeo de apresentação"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary-foreground/90 flex items-center justify-center shadow-lg group-hover:bg-primary-foreground transition-colors"
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-hero-bg ml-1" fill="currentColor" />
                  </motion.div>
                  <p className="mt-6 text-xl md:text-2xl font-bold text-primary-foreground uppercase tracking-wider">
                    Aperte o Play
                  </p>
                </button>
              </>
            ) : (
              <video
                className="w-full h-full object-contain bg-hero-bg"
                src={heroVideo}
                autoPlay
                controls
                playsInline
                preload="metadata"
                poster={heroBg}
              />
            )}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-full max-w-lg">
            <Button type="button" variant="cta" size="xxl" className="w-full text-lg" onClick={scrollToPlans}>
              <MessageCircle className="w-6 h-6" />
              QUERO EXPERIMENTAR POR 7 DIAS
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-primary/30 border-2 border-hero-bg flex items-center justify-center text-primary-foreground text-sm font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-yellow-500">
                <span className="font-bold text-primary-foreground">+1000</span>
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-sm text-primary-foreground/70">Alunos Transformados</p>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-primary-foreground/60 text-sm"
        >
          <span className="flex items-center gap-2">
            ✓ CREF Ativo
          </span>
          <span className="flex items-center gap-2">
            ✓ Presencial ou Online
          </span>
          <span className="flex items-center gap-2">
            ✓ Primeira Avaliação Gratuita
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-primary-foreground/50 cursor-pointer"
          onClick={scrollToPlans}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;