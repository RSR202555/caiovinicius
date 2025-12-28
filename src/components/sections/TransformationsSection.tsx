import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import transformation1 from "@/assets/transformação1.jpeg";
import transformation2 from "@/assets/tranformação2.jpeg";
import transformation3 from "@/assets/transformação3.jpeg";
import transformation4 from "@/assets/transformação4.jpeg";
import transformation5 from "@/assets/transformação5.jpeg";
import transformation6 from "@/assets/tranformação6.jpeg";

const TransformationsSection = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-carousel-item='true']");
    const styles = window.getComputedStyle(el);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const step = (firstCard?.offsetWidth ?? el.clientWidth) + gap;

    el.scrollBy({ left: direction === "left" ? -step : step, behavior: "smooth" });
  };

  const transformations = [
    {
      name: "Carlos Mendes",
      testimonial: "Perdi 20kg e ganhei confiança. Mudou minha vida!",
      image: transformation1,
    },
    {
      name: "Marina Santos",
      testimonial: "Consegui ganhar massa muscular de forma saudável.",
      image: transformation2,
    },
    {
      name: "Roberto Silva",
      testimonial: "Voltei a correr e ter disposição para brincar com meus filhos.",
      image: transformation3,
    },
    {
      name: "Juliana Costa",
      testimonial: "Realizei o sonho de vestir as roupas que sempre quis.",
      image: transformation4,
    },
    {
      name: "Transformação 5",
      testimonial: "",
      image: transformation5,
    },
    {
      name: "Transformação 6",
      testimonial: "",
      image: transformation6,
    },
  ];

  return (
    <section id="transformacoes" className="py-20 md:py-32 bg-lavender">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Transformações Reais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Resultados de Quem <span className="text-primary">Treina Comigo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de alunos que transformaram seus corpos e suas vidas 
            com dedicação e acompanhamento profissional.
          </p>
        </motion.div>

        {/* Transformations Carousel */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-primary shadow-lg hover:bg-primary/90 transition-colors z-10"
              aria-label="Ver transformações anteriores"
            >
              <ChevronLeft className="w-6 h-6 text-primary-foreground" />
            </button>

            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-11 h-11 rounded-full bg-primary shadow-lg hover:bg-primary/90 transition-colors z-10"
              aria-label="Ver próximas transformações"
            >
              <ChevronRight className="w-6 h-6 text-primary-foreground" />
            </button>

            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
          {transformations.map((item, index) => (
            <motion.div
              key={item.name}
              data-carousel-item="true"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group snap-start shrink-0 w-[85%] sm:w-[420px] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border card-hover">
                {/* Before/After Placeholder */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-muted to-muted/50">
                  <img
                    src={item.image}
                    alt={`Transformação de ${item.name}`}
                    className="absolute inset-0 h-full w-full object-contain bg-hero-bg"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-foreground mb-2">{item.name}</h3>
                  {item.testimonial ? (
                    <p className="text-sm text-muted-foreground italic">"{item.testimonial}"</p>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-foreground font-medium">
            🎯 Quer ser o próximo caso de sucesso?{" "}
            <a
              href="https://wa.me/5534993160962?text=Quero iniciar minha transformação!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Fale comigo agora
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationsSection;