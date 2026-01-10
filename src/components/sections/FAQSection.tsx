import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona o primeiro contato?",
      answer: "Após entrar em contato pelo WhatsApp, agendamos uma avaliação física gratuita onde conhecerei seus objetivos, histórico e limitações. A partir daí, montamos juntos o plano ideal para você.",
    },
    {
      question: "Preciso ter experiência prévia com exercícios?",
      answer: "Não! Trabalho com pessoas de todos os níveis, desde iniciantes completos até atletas. O treino é 100% adaptado ao seu nível atual e evolui junto com você.",
    },
    {
      question: "Onde são realizados os treinos?",
      answer: "Ofereço treinos presenciais em academia parceira na Cidade de Uberlândia, além de opção de treino online com acompanhamento via app para quem prefere malhar em casa ou em outra academia.",
    },
    {
      question: "Como funciona o acompanhamento diário?",
      answer: "Através do app exclusivo, você registra seus treinos, alimentação e bem-estar. Recebo notificações e respondo dúvidas em tempo real, fazendo ajustes sempre que necessário.",
    },
    {
      question: "Em quanto tempo vou ver resultados?",
      answer: "Com consistência, os primeiros resultados aparecem entre 30-45 dias. Transformações significativas acontecem a partir de 90 dias. Lembre-se: resultados duradouros exigem paciência e dedicação.",
    },
    {
      question: "Posso cancelar ou pausar o plano?",
      answer: "Sim! Oferecemos garantia de 7 dias para novos alunos. Após esse período, você pode pausar (até 30 dias por ano) ou cancelar com aviso prévio de 30 dias, sem multa.",
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceito cartão de crédito (parcelado em até 12x), débito, PIX e transferência. O pagamento é mensal e pode ser feito no início de cada período.",
    },
    {
      question: "O plano alimentar está incluso?",
      answer: "Nos planos Premium e Elite, sim! Incluo orientação alimentar personalizada. Para necessidades específicas, trabalho em parceria com nutricionistas que podem oferecer acompanhamento especializado.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-lavender">
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
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre os treinos, planos e metodologia.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Ainda tem dúvidas?{" "}
            <a
              href="https://wa.me/5534998960962?text=Olá! Tenho uma dúvida sobre os treinos."
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Fale diretamente comigo pelo WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;