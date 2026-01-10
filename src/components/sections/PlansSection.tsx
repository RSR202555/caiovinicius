import { motion } from "framer-motion";
import { Check, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PlansSection = () => {
  const whatsappLink = (plan: string) =>
    `https://wa.me/5534998960962?text=Olá! Tenho interesse no plano ${plan}.`;

  const plans = [
    {
      name: "Atendimento Presencial",
      description: "Acompanhamento direto e individual",
      features: [
        "Avaliação física completa",
        "Análise postural e biomecânica",
        "Treino personalizado",
        "Correção técnica durante os treinos",
        "Ajustes conforme evolução",
      ],
      notIncluded: [],
      highlighted: false,
      idealFor: "Ideal para quem busca atenção total e acompanhamento presencial.",
      ctaLabel: "Agendar Presencial",
    },
    {
      name: "Consultoria On-line",
      description: "Estratégia personalizada com acompanhamento",
      features: [
        "Avaliação inicial e anamnese detalhada",
        "Treino personalizado no aplicativo",
        "Plano alimentar individualizado",
        "Ajustes periódicos de treino e dieta",
        "Chamadas para alinhamento e estratégia",
        "Suporte direto via WhatsApp",
      ],
      notIncluded: [],
      highlighted: true,
      badge: "Mais Procurado",
      idealFor: "Ideal para quem quer personalização com flexibilidade.",
      ctaLabel: "Quero Consultoria",
    },
    {
      name: "Projeto Elite",
      description: "Treinos prontos | Custo-benefício",
      features: [
        "Treinos prontos e estruturados",
        "Metodologia validada",
        "Acesso ao aplicativo de treino",
        "Orientações gerais de execução",
        "Conteúdos exclusivos do projeto",
      ],
      notIncluded: [],
      highlighted: false,
      idealFor: "Ideal para quem quer começar com estratégia e investimento acessível.",
      ctaLabel: "Entrar no Projeto Elite",
    },
  ];

  return (
    <section id="planos" className="py-20 md:py-32 bg-background scroll-mt-24">
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
            Planos de Treinamento
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Escolha o Plano Ideal para <span className="text-primary">Você</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Todos os planos incluem avaliação física inicial gratuita e garantia de 7 dias.
            Se não ficar satisfeito, devolvemos seu investimento.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 md:p-8 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground md:scale-105 shadow-2xl border-2 border-primary"
                  : "bg-card border border-border shadow-lg"
              } card-hover`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-card text-primary text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-lg font-semibold ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                    Valor sob consulta
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/90" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 opacity-50">
                    <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-center">—</span>
                    <span className="text-sm line-through">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Ideal For */}
              {plan.idealFor && (
                <p className={`text-sm mb-8 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.idealFor}
                </p>
              )}

              {/* CTA */}
              <a href={whatsappLink(plan.name)} target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  variant={plan.highlighted ? "heroOutline" : "hero"}
                  size="lg"
                  className="w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  {plan.ctaLabel}
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            🔒 Pagamento seguro • 💳 Aceito cartão e PIX • ✨ Garantia de 7 dias
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansSection;