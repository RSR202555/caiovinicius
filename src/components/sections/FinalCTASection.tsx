import { motion } from "framer-motion";
import { MessageCircle, Clock, Shield, Zap, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const whatsappLink = "https://wa.me/5534993160962?text=Olá! Estou pronto para começar minha transformação!";

  const guarantees = [
    { icon: Clock, text: "Primeira avaliação gratuita" },
    { icon: Shield, text: "Garantia de 7 dias" },
    { icon: Zap, text: "Resultados comprovados" },
    { icon: Gift, text: "Bônus exclusivos para novos alunos" },
  ];

  return (
    <section className="py-20 md:py-32 bg-hero-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-primary-foreground mb-6">
            Está Pronto Para Sua{" "}
            <span className="text-primary">Transformação?</span>
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Não deixe para amanhã o corpo que você pode começar a construir hoje. 
            Vagas limitadas para garantir atendimento de qualidade.
          </p>

          {/* Guarantees */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {guarantees.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
              >
                <item.icon className="w-6 h-6 text-primary" />
                <span className="text-sm text-primary-foreground/80 text-center">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="xxl" className="w-full sm:w-auto group">
                <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                Falar com o Personal Agora
                <span className="inline-flex items-center gap-1 ml-2 px-2 py-0.5 bg-primary-foreground/20 rounded-full text-xs">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Online
                </span>
              </Button>
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-8 text-primary-foreground/60 text-sm"
          >
            🚀 Junte-se a <span className="text-primary font-semibold">+500 alunos</span> que já transformaram suas vidas
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;